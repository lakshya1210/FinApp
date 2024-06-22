import React from 'react'
import { signInWithGoogle, signOut } from '../firebase';
import useUser from '../hooks/useUser';
import Navbar from './Navbar';


export default function Header(){
    const user= useUser(),
                    isUserSignedIn = user !== null;
    return(
        <header>
            {isUserSignedIn?
                <>
                    <div className="user">
                        <img src={user.photoUrl} alt="user"/>
                        <strong>{user.displayName}</strong>
                        <small>{user.email}</small>
                    </div>
                    <Navbar signOut={signOut} />
                </>
                :
                    <button onClick={signInWithGoogle}>Sign in</button>
                }
        </header>
    );
}