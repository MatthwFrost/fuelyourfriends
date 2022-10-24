import { auth, googleAuthProvider } from "../lib/firebase";
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Page(props) {

    const { user } = useContext(UserContext)

    return (
        <main>
            {user ? 
            <SignOutButton /> 
            : 
            <SignInButton />
            }
        </main>
    )
}

function SignInButton(){
    return (
        <button className="btn-green" onClick={signInWithGoogle}>
            <FcGoogle size={20}/> Sign in with Google
        </button>
    )
}

function signInWithGoogle(){
    auth.signInWithRedirect(googleAuthProvider)
        .then(data => {
        // data provides us with an idToken and accessToke, we use these to set up a credential
        const googleCredential = auth.GoogleAuthProvider.credential(data.idToken,data.accessToken);
        try {
            firebase.auth().signInWithCredential(googleCredential)
            .then(user => {
                //after we have the credential - lets check if the user exists in firestore
                var docRef = firestore().collection('users').doc(auth().currentUser.uid);

                docRef.get()
                .then(doc => {
                    if (doc.exists) {
                    //user exists then just update the login time
                    return user
                    } else {
                    //user doesn't exist - create a new user in firestore
                    resolve(addNewUserToFirestore(user));
                    }
                })
                .catch(error => {
                    console.error('Checking if customer exists failed" ' + error);
                });
            })
            .catch(error => {
                console.error('GoogleSignIn to firebase Failed ' + error);
            })
        } catch (error) {
            console.log("Something generic went wrong, ", error )
        }
    })
    .catch(error => {
        console.error('GoogleSignIn to firebase Failed ' + error);
    })

}

function addNewUserToFirestore(user) {
  const collection = firestore().collection('users');
  const {profile} = user.additionalUserInfo;
  const details = {
    firstName: profile.given_name,
    lastName: profile.family_name,
    fullName: profile.name,
    email: profile.email,
    picture: profile.picture,
    createdDtm: firestore.FieldValue.serverTimestamp(),
    lastLoginTime: firestore.FieldValue.serverTimestamp(),
  };
  collection.doc(auth().currentUser.uid).set(details);
  return {user, details};
}

// Sign out button
function SignOutButton() {
    return <button onClick={() => auth.signOut()}>Sign Out</button>
}

function UsernameForm(){
    return null;
}