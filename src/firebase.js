// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// 認証用モジュールをインポート
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsY4piSfIlClx9oWy-OfWx-ajQBVTVjKk",
  authDomain: "blog-f884a.firebaseapp.com",
  projectId: "blog-f884a",
  storageBucket: "blog-f884a.appspot.com",
  messagingSenderId: "307416494538",
  appId: "1:307416494538:web:165f3595802aaeb8a31f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 認証の初期化
const auth = getAuth(app);

// GoogleAuthProviderのインスタンス化
const provider = new GoogleAuthProvider();

// DBの初期化
const db = getFirestore(app);

export { auth, provider, db};