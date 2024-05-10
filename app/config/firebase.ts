import { initializeApp } from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD3AO6vlvKjLgWI-XGexc95TwGItn7qnig",
  authDomain: "moon-store-82415.firebaseapp.com",
  projectId: "moon-store-82415",
  storageBucket: "moon-store-82415.appspot.com",
  messagingSenderId: "150202652791",
  appId: "1:150202652791:web:0a91896227007ae84f0e72",
};

const app = initializeApp(firebaseConfig);
export default app;
