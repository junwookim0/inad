import { auth } from '../../firebase';
import { GoogleAuthProvider, signInWithPopup,
            createUserWithEmailAndPassword, signInWithEmailAndPassword,
            FacebookAuthProvider,signOut,
            inMemoryPersistence,signInWithRedirect,setPersistence,
} from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import DataContext from '../context/DateContext';
import { useContext } from 'react';

function Login() {
    const data = useContext(DataContext);
    const [userData, setUserData] = useState(data);
    const navigate = useNavigate();

    createUserWithEmailAndPassword(auth, email, password)
    .then((data) => {
        setUserData(data.user.email);
        setUserData(data.user.password);
    })
    function handleEmailLogin(){
        signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
            setUserData(data.user);
            //navigate("/Home");
        })
        .catch((err) => {
            console.log(err);
        });
    }
    function handleGoogleLogin() {
        setPersistence(auth, inMemoryPersistence)
        .then((data) => {
            const gprovider = new GoogleAuthProvider(); // provider를 구글로 설정
            signInWithPopup(auth, gprovider) // popup을 이용한 signup
            setUserData(data.user); // user data 설정
            //navigate("/Home");
            console.log(data) // console로 들어온 데이터 표시
            return signInWithRedirect(auth, gprovider);
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
            //navigate("/Home");
            console.log(data) // console로 들어온 데이터 표시
        })
        .catch((err) => {
            console.log(err);
        });
    }
    function Logout() {
        signOut(auth).then(() => {
            setUserData(null);
            navigate("/");
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="App">
        <header className="App-header">
            
        <button onClick={handleGoogleLogin}>구글 Login</button>
        <button onClick={handleEmailLogin}> Login</button>
        <p>
        {userData ? userData.displayName : null}
        </p>
        <p>
        {userData ? userData.email : null}
        </p>
        <p>
            {userData ? <img src={userData.photoURL} alt="userphoto"/>  : null}
        </p>
        <button onClick={handleFacebookLogin}>facebook Login</button>
        <button onClick={Logout}>Logout</button>
        
        </header>
        </div>
    );
}

export default Login;
