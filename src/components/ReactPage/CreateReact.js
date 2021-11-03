import logo from './logo.svg';
import { Link } from 'react-router-dom';
import '../../App.scss';

const CreateReact = ({}) => {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2> Welcome Emmanuel</h2>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      or
      <a className="App-link mBtn">
        <Link to="/Clap-backs"  style={{color: "red", textDecoration: "none"}}>Generate an Insult</Link>
      </a>
    </header>
  </div>
  );
};

export default CreateReact;