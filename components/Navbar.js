import Link from 'next/link'
import { FiChevronDown } from "react-icons/fi";
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Navbar() {
    const ICON_SIZE = 20;
    const { user, username } = useContext(UserContext)

    // const user = null;

    return (
        <nav className='navbar'>
            <ul>
                {}
                {user &&(
                    <>
                    <li>
                        <Link href={`/profile`}>
                            <img src={user?.photoURL}/>
                        </Link>
                    </li>

                    </>
                )}
                {}
                {!user &&(
                    <li>
                        <Link href="/enter">
                            <button className='btn-login'>Login</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}