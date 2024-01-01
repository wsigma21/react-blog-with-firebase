import React from 'react';
import { auth, provider } from "../firebase";
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      // 認証状態をローカルストレージに保持
      localStorage.setItem("isAuth", true);
      setIsAuth(true);

      // Homeへ遷移
      navigate("/");
    });
  }
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login