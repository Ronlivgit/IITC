import { getAuth, createUserWithEmailAndPassword,   } from "firebase/auth";
import { dataBase , fireAuth } from '../config/firebaseConfig'
import NavBar from '../NavBar';


function AboutUs(props){

    return (
        <>
            <h1>Log in to start using the App</h1>
            <h2>Homepage is useless, about us is useless</h2>
        </>
    )
}

export default AboutUs