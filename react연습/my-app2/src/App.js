import './App.css';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup,
          FacebookAuthProvider, createUserWithEmailAndPassword, 
          signInWithEmailAndPassword, signOut
} from 'firebase/auth';
import { useState } from 'react';
import {firestore} from './firebase'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log(firestore);
  });

  
  const [userData, setUserData] = useState(null);

  function RegisterUser(payload){
    createUserWithEmailAndPassword(auth, payload.pEmail, payload.pPassword ,payload.pNickname)
    .then((pUserInfo) => {
      setUserData({
        email: pUserInfo.user.email,
        name: pUserInfo.user.displayName,
        photoURL: pUserInfo.user.photoURL
      });
      router.push("/");
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
  function Login(){
    signInWithEmailAndPassword(auth, payload.pEmail, payload.pPassword)
        .then((pUserInfo) => {
          setUserData({
            id: pUserInfo.user.uid,
            name: pUserInfo.user.displayName,
            email: pUserInfo.user.email,
            photoURL: pUserInfo.user.photoURL,
          })
          router.push("/");
        })
        .catch((err) => {
          console.log(err.message);
        });
  }
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
  function Logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      setUserData(null);
    }).catch((err) => {
      console.log(err);
  });
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={col}> call버튼</button>*/}
      <button onClick={handleGoogleLogin}>구글 Login</button>
      <button onClick={handleFacebookLogin}>facebook Login</button>
      <button onClick={Logout}>logout</button>
      <p>
      {userData ? userData.displayName : null}
      </p>
      <p>
      {userData ? userData.email : null}
      </p>
      <p>
          {userData ? <img src={userData.photoURL}/>  : null}
      </p>

      <form onSubmit={Login}>
        <label>이메일</label>
        <input type="text" v-model="pEmail"/>
        <label>비밀번호</label>
        <input type="pssword" v-model="pPassword"/>
        <input type="submit" value="로그인"></input>
      </form>

      <form onSubmit={RegisterUser}>
        <label>이메일</label>
        <input type="text" v-model="pEmail"/>
        <label>비밀번호</label>
        <input type="pssword" v-model="pPassword"/>
        <input type="submit" value="회원가입"></input>
      </form>

      </header>
    </div>
  );
}

export default App;
