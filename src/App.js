import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [randomUser, setRandomUser] = useState([]);
  useEffect(()=>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]))
  },[])

  const nayaks = ['Jashim', 'Deepjol', 'Bapparaz', 'Omar Sani', 'Alamgir'];
  
  const nayaksObject = [
    {name: 'Jashim', age: 50},
    {name: 'Deepjol', age: 15},
    {name: 'Bapparaz', age: 18},
    {name: 'Omar Sani', age: 30},
    {name: 'Alamgir', age: 60}
  ];
  return (
    <div className="App">
      {/* <ShowRandomUser user={randomUser}></ShowRandomUser> */}
      <MovieCounter></MovieCounter>
      {
        // nayaks.map(nayakName => <Nayak name={nayakName}></Nayak>)

        nayaksObject.map(nayakName => <Nayak name={nayakName.name} age={nayakName.age}></Nayak>)

      }

      {/* <Nayak name={nayaks[0]}></Nayak> */}
    </div>
  );
}

function ShowRandomUser(props) {
  const style ={
    border: "3px solid lightblue",
    margin: "5px",
    padding: "5px"
  }
  
  return(
    <div style={style}>
      <img src={props.user.picture.large} alt=""/>
      <h1>Name: <span style={{color:"tomato"}}>{props.user.name.title} {props.user.name.first} {props.user.name.last}</span></h1>
      
      <h2><span style={{color:"gray"}}>Age: {props.user.dob.age}</span></h2>

      <h3><span style={{color:"tomato"}}>Email:</span> {props.user.email}</h3><h3><span style={{color:"tomato"}}>Phone:</span> {props.user.phone}</h3>
      <h3><span style={{color:"black"}}>Location:</span> <span style={{color:"lightblue"}}>{props.user.location.street.number}, {props.user.location.street.name}, {props.user.location.city}, {props.user.location.country}</span></h3>
    </div>
  )
}

// Movie Counter Statement
function MovieCounter(props) {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return(
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

// Movie Display Statement
function MovieDisplay(props) {
  return <h4>Movies I have acted: {props.movies}</h4>
}

// Nayak Name Statement
function Nayak(props) {
  const style = {
    border: "3px solid tomato",
    margin: "5px",
    padding: "5px"
  }
  return (
    <div style= {style}>
      <h1>Ami <span style={{color:"tomato"}}>{props.name}</span></h1>
      <h4>I have done 5 movies at the age of {props.age || 20}</h4>
    </div>
  )
}

export default App;
