'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

interface Session {
    user?: {
        name?: string;
        image?: string;
    };
}

const AuthButton = () => {
    const { data: session } = useSession() as { data: Session };

    return session?.user ? (
        <div className='flex items-center gap-3'>
            <img className='size-9 rounded-full' src={session.user.image ?? ''} alt={session.user.name ?? ''} />
            <div className=''>Hi, {session.user.name}</div>
            <button className='rounded-full bg-red-500 bg-opacity-10 px-3 py-2 text-red-500' onClick={() => signOut()}>
                Logout
            </button>
        </div>
    ) : (
        <button
            className='rounded-full bg-blue-500 bg-opacity-10 px-3 py-2 text-blue-500'
            onClick={() => signIn('github')}>
            Login
        </button>
    );
};

export default AuthButton;
