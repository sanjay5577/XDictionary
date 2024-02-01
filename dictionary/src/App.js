import {useState} from "react"
import './App.css';

const dictionary = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]


function App() {

  const[input , setInput]= useState('');
  const[dictvalue ,setDictValue] =useState('');
  const [searchcliked , setsearchClicked]=useState(false);

  const handleinput =(e)=>{
    const text = e.target.value;

    setInput(text);
  }

  const handlesearch=()=>{
    setDictValue('');
    const value =dictionary.find((arr)=>{
      return arr.word.toLowerCase()===input.toLowerCase();

    })
    
    if(value){
      setDictValue(value.meaning);
  
    }
    setsearchClicked(true)
    
  }


  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div>
        <input
        type ="text"
        name="inputdict"
         value={input}
        
        onChange={handleinput}
        />
        <button onClick= {handlesearch}>Search</button>
      </div>
      <h4>Definition:</h4>
      {searchcliked ?(dictvalue? <p>{dictvalue}</p>:<p>Word not found in the dictionary.</p> ):null}
    </div>

  );
}

export default App;
