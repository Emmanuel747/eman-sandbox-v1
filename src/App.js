import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import RandomAPI from './components/Clapback-Generator/Insults';
import CreateReact from './components/ReactPage/CreateReact';


import './App.scss';



function App() {
  useEffect(() => {
    document.title = `Eman's API Sandbox\u2122 - US`;
  }, []);
  const [isLogo, setIsLogo] = useState();
  const [isMaxNum, setMaxNum] = useState(77);
  const [isUser, setUser] = useState({});

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CreateReact />
        </Route>
        <Route path="/Clap-backs">
          <RandomAPI 
            maxNum={isMaxNum} setMaxNum={setMaxNum}
            user={isUser} setUser={setUser}
          />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
