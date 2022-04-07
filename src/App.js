import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  console.log('this is state', user)

  const googleProvider = new GoogleAuthProvider();
  const handelSignInGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
        console.log(result.user);

      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div>
      <h1 className='text-2xl text-blue-500 font-bold text-center'>Welcome to Registration!!</h1>
      <div className='w-1/2 mx-auto mt-8 shadow-lg p-4 rounded-lg'>
        <form action="">
          <div className="">
            <p className='text-xl mb-2 font-bold text-blue-400'>Email :</p>
            <input className=" w-1/2 border-2  px-4 py-1 border-blue-100 outline-blue-300 rounded-lg" type="text" placeholder='Your Email' />
          </div>

          <div className="mt-3">
            <p className='text-xl mb-2 font-bold text-blue-400'>Password :</p>
            <input className="w-1/2 border-2 px-4 py-1 border-blue-100 outline-blue-300 rounded-lg" type="password" placeholder='Your Password' />
          </div>
          <p className='my-1'>Are You already member? <span className='text-blue-400 hover:text-blue-500 cursor-pointer'>Login</span></p>
          <div className='mt-2'>
            <input type='submit' className='rounded-lg text-white bg-blue-500 hover:bg-blue-400 px-6 py-2 cursor-pointer' value="Registration" />
          </div>
        </form>

        <div className='flex mt-10 justify-around'>
          <button onClick={handelSignInGoogle} className='p-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-lg'>Google</button>
          <button className='p-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-lg'>Facebook</button>
          <button className='p-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-lg'>Github</button>
        </div>
      </div>



      <div className='w-1/2 mx-auto'>
        <p>Name: {user.displayName} </p>
        <p>Email: {user.email} </p>
        <img src={user.photoURL} alt="" />


      </div>
    </div>
  );
}

export default App;
