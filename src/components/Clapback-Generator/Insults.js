import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import getInsult from '../../api/EvilInsultGen';
import axios from "axios";
import './Insults.scss';


const RandomAPI = ({maxNum, user, setUser}) => {
  const InsultURL = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;
  const randAPI = `https://jsonplaceholder.typicode.com/todos/`
  const requestInsult = async () => {
    // try {
    //   const  data  = await axios.get(InsultURL);
    //   console.log(data);
    //   return data;
    // } catch (err) {
    //   throw err;
    // }
    
    maxNum = Math.floor(Math.random() * 100);
    fetch(`${randAPI}${maxNum}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => {
      console.log(data, "Random number was: ", maxNum);
      setUser(data);
      console.log(emanMap1.get(2));
      emanMap1.set("my", "Emmanuel");
      console.log(emanMap1);

    })
    .catch(err => {throw err})
  }
    let emanMap1 = new Map([
      [1, "first"],
      [2, "second"],
      [3, "third"],
      [55, "Doggo"]
    ]);
    
    let emanMap2 = {
      name: "",
      Gender: "",

    }

    //data = {userId: 1, id: 8, title: 'quo adipisci enim quam ut ab', completed: true}
    const {completed, id, title, userId} = user
  return (
    <div className="pageContainer">
      <div className="myHeader">
        <h2>Welcome To my Random Employee Status Checker πͺπΎπ</h2>
        <button onClick={requestInsult}> CLICK ME FOR JSON to HTML </button>
      </div>

      <div className="userInfo">
        <h1>Random User #: {userId}</h1>
        <ul>
          <li>User's Company Number: <span>{id}</span></li>
          <li>Description: <span>{title}</span></li>
          <li>Terminated: <span style={{color: completed ? "green" : "red" }}>
              {completed !== undefined ? completed.toString() : ''}
            </span>
          </li>
          <div style={{textAlign: "center", fontWeight: "bold"}}> ~End of Transcription~ </div>
        </ul>

          <button style={{ fontWeight: "bold"}}>
            <Link to="/">
            <div className="tooltip">
              Go Back to ReactApp Home
              <span className="tooltiptext">Return back to HomePage</span>
            </div>
            </Link>
          </button>

      </div>
    </div>

  )

};

export default RandomAPI;