import React, { useRef, useState } from 'react'
import { checkvalidation } from './utils/validate'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from './utils/firebase';
import { useNavigate } from 'react-router-dom';
import { LOGO } from './utils/Constant';

const SignIn = () => {
    const[isSignIn,setIsSignIn] = useState(true)
    const[errorMessage,setErrorMessage] = useState(null)
    const navigate = useNavigate()
    
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn)
    }

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleButton = () => {
        const showMessage = checkvalidation(email.current.value, password.current.value)
        setErrorMessage(showMessage)

        if(showMessage) return ; 

        if(!isSignIn){
            //Sign Up

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                navigate("/browse")

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + '-' +errorMessage )
            });
        }
        else{
            //Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/browse")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + '-' + errorMessage)
            });
        }
    }
  return (
    <div className='bg-[#121926] w-full h-screen'>
     {/* ---------------------Header---------------------------- */}
    <div className='max-w-screen-lg pt-9 mx-auto'>
        <img className='w-[100px]' src={LOGO} alt="" />
    </div>

    <form onSubmit={(e)=>e.preventDefault()} className='max-w-screen-lg ml-[10.1%] w-[30%] flex flex-col p-4 absolute top-[53%] left-[13.8%] translate-x-[-50%] translate-y-[-50%] ' action="">
        <h1 className='text-center text-3xl mb-5 font-[poppins] font-medium text-white'>{isSignIn ? 'Welcome to SMWZ' : 'Become Our Member'}</h1>
        {!isSignIn && <input ref={name} type="name" placeholder='Full Name' className='p-2 my-2 w-full outline-none text-white text-sm rounded-md bg-[#202939] border-[1.9px] border-[#364152]' required /> }
        <input ref={email} type="email" placeholder='Email' className='p-2 my-2 w-full outline-none text-white text-sm rounded-md bg-[#202939] border-[1.9px] border-[#364152]' />
        <input ref={password} type='password' placeholder='Password' className='p-2 my-2 outline-none text-white w-full text-sm rounded-md bg-[#202939] border-[1.9px] border-[#364152]' />
        <p className='text-red-400'>{errorMessage}</p>
        <button onClick={handleButton} className='mt-5 p-2 bg-[#f37615] text-white text-sm w-full rounded-md'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        <p className='text-white mt-7 text-sm text-center'>{isSignIn ? `Don't have an account?` : `Already have an account?`} <span onClick={toggleSignIn}  className='text-[#f37615] cursor-pointer'>{isSignIn ? 'Sign Up' : 'Sign In'}</span> </p>
    </form>


    


    </div>
    )
}
export default SignIn;