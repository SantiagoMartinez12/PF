
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, signInWithPopup, getAuth, signOut} from "firebase/auth" 
import { useState } from "react";
import HomeResto from './home';
import logo from "../../../assets/Logo.png";

const firebaseConfig = {
  apiKey: "AIzaSyCUK2oKGtF96c8rXSZeY6NINj6idoMRwBs",
  authDomain: "mozo-52fec.firebaseapp.com",
  projectId: "mozo-52fec",
  storageBucket: "mozo-52fec.appspot.com",
  messagingSenderId: "898771815662",
  appId: "1:898771815662:web:11e2bb7db45183d6ec77ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export default function Login(){

    const[name, setName] = useState('')
    const[restoId, setRestoId] = useState('')

    function signIn (){
        signInWithPopup(auth, provider).then((result)=>{
                    const user = result.user.displayName
                    const id = result.user.uid
                    console.log(id)
                    setRestoId(id)
                    setName(user)
                }).catch((error) =>{
                    const errorMessage = error.message
                })
    }

    console.log(restoId)


    function signOuts(){
    signOut(auth).then(()=>{
        //console.log("ya saliste")
        const user=''
        setName(user)
      })
    }

    return (
        <div>
            {
                name?
                <div className="container-sm">
                    <div className="row ">
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            {name} <button onClick={signOuts} className="btn btn-primary btn-md" > Salir</button>
                        </div>
                    </div>
                    <HomeResto restoId={restoId}/>
                </div>
                : <div className="container">
                    <div className="row vh-100 justify-content-center align-items-center">
                     <div className="col-auto  text-center">
                        <img src={logo} alt="Logo" width="60%" className="img-fluid" />
                        <p></p>
                        <button onClick={signIn} className="btn btn-primary btn-sm"> Ingresa con Google </button>
                    </div>
                </div>
              </div>
            }
        </div>
    )
}