import './App.css';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup,
          FacebookAuthProvider
} from 'firebase/auth';
import { useState } from 'react';

function App() {

  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const gprovider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, gprovider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data) // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleFacebookLogin(){
    const fprovider =new FacebookAuthProvider();
    signInWithPopup(auth, fprovider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data) // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={handleGoogleLogin}>구글 Login</button>
      <p>
      {userData ? userData.displayName : null}
      </p>
      <p>
      {userData ? userData.email : null}
      </p>
      <p>
          {userData ? <img src={userData.photoURL}/>  : null}
      </p>

      
      <button onClick={handleFacebookLogin}>facebook Login</button>
      <p>
      {userData ? userData.displayName : null}
      </p>
      <p>
      {userData ? userData.email : null}
      </p>
      <p>
          {userData ? <img src={userData.photoURL}/>  : null}
      </p>
      
      </header>
    </div>
  );
}

export default App;
