import '../CSS/App.css';
import NavBarMenu from "../Compo/Menu";
import Button from "react-bootstrap/Button";
import {useState} from "react";

function App() {
    const [userName, setName] = useState("");
    localStorage.clear()
    const handleSubmit = (event) => {
        event.preventDefault();
        if(userName === "" || !userName) {
            alert("No username found please fill one.\nIn order to continue in the application ")
        } else {
            localStorage.setItem("username", userName)
            window.location = "/Lessons"
        }
    }

    return (
            <div className="App">
                <NavBarMenu/>
                <h1 className={"txtApp"}> Welcome to your personal learner app</h1>
                <p className={"txtApp"}> May i know your name before we start</p>
                <form onSubmit={handleSubmit}>
                    <label className={"txtApp"}> <b> Username: </b></label> {''} <br/>
                    <input type={"text"} placeholder={"Elise39u"}
                           onChange={(e) => setName(e.target.value)}/>
                    <Button type={"submit"}> Go to the lessons</Button>
                </form>
            </div>
   );
}

export default App;
