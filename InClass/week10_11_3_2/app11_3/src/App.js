import {Button} from "react-bootstrap";
import './App.css';

function App() {
    const myWarning = "The following are my opinions only"
    const likes = 500;
    const sHero = {
        name: "Hulk",
        power: "Smash"
    }
    const mySchool = "http://www.aurora.edu"
    let fruit = ["Apples", "Bananas", "Cake"];
    const myStyle = {
        color: 'blue',
        backgroundColor: "DodgerBlue",
        padding: '10px'
    }
    return (
        <div className="App">
            <h2> Hello First App </h2>
            <h2> {myWarning} </h2>
            <h3> I have {likes} likes on my post </h3>
            <h4> My favorite superhero is {sHero.name} who likes to {sHero.power} </h4>
            <div className="content">
                Now is the time for all good people...
                <p> I go to <a href={mySchool}> University </a></p>
                <p style={myStyle}> I like {fruit.toString()} fruit</p>
                <p style={{
                    color:'red',
                    backgroundColor: 'green'
                }}> I like these fruits {fruit.length} fruits</p>
            </div>
            <Button variant="primary">Click Me!</Button>
        </div>
    );
}

export default App;
