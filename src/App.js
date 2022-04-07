import app from './firebase.init';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reged, setReged] = useState(false);


  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
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


  const handelSignInGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        setUser(result.user);
      })
      .catch(error => {
        console.error(error);
      })
  }

  const handelSignInFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        setUser(result.user);
      })
      .catch(error => {
        console.error(error);
      })
  }


  const emailInput = (event) => {
    setEmail(event.target.value);
  }

  const passwordInput = (event) => {
    setPassword(event.target.value);
  }


  const submitButton = (e) => {
    if (reged) {
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          setUser(user);
        })
        .catch(error => {
          console.error(error);
        })
    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;

          console.log(user);
        })
        .catch(error => {
          console.error(error);
        })
    }

    e.preventDefault();


  }

  const toggleBtn = (toggleId) => {
    setReged(toggleId);

  }

  console.log(reged);

  return (
    <div>
      <h1 className='text-2xl text-blue-500 font-bold text-center'>Welcome to Registration!!</h1>
      <div className='w-1/2 mx-auto mt-8 shadow-lg p-4 rounded-lg'>
        <form action="">
          <div className="">
            <p className='text-xl mb-2 font-bold text-blue-400'>Email :</p>
            <input onBlur={emailInput} className=" w-1/2 border-2  px-4 py-1 border-blue-100 outline-blue-300 rounded-lg" type="text" placeholder='Your Email' />
          </div>

          <div className="mt-3">
            <p className='text-xl mb-2 font-bold text-blue-400'>Password :</p>
            <input onBlur={passwordInput} className="w-1/2 border-2 px-4 py-1 border-blue-100 outline-blue-300 rounded-lg" type="password" placeholder='Your Password' />
          </div>
          <p className='my-1'>{reged ? 'New User?' : 'Are You already member?'} <span onClick={() => toggleBtn(!reged)} className='text-blue-400 hover:text-blue-500 cursor-pointer'>{reged ? 'Registration' : 'Login'}</span></p>
          <div className='mt-2'>
            <input onClick={submitButton} type='submit' className='rounded-lg text-white bg-blue-500 hover:bg-blue-400 px-6 py-2 cursor-pointer' value={reged ? 'Login' : 'Registration'} />
          </div>
        </form>

        <div className='flex mt-10 justify-around'>
          <button onClick={handelSignInGoogle} className='p-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-lg'>Google</button>
          <button onClick={handelSignInFacebook} className='p-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-lg'>Facebook</button>
          <button onClick={handelSignInGithub} className='p-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-lg'>Github</button>
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
