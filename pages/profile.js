import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { serverTimestamp } from '../lib/firebase';

export default function ProfilePage({ }) {
    const { user } = useContext(UserContext)

    const data = {
        username: user.email.split("@gmail.com"),
    }

    const paymentHistory= 40;

    return (
        <main>
            <h1>Your profile</h1>
            <h1>{data.username}</h1>
            <h3>payment history: {paymentHistory}</h3>
            <div>
                <h3>Delete Data: </h3>
                <button className='btn-red'>Delete data</button>
            </div>
        </main>
    )
}