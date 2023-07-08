import Link from '../../components/link';

import logo from '../../assets/images/logo.png';

function Intro() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          you do you
        </p>
        <div className="App-links"> 
          <Link route="brands">
            Log In
          </Link> 
          |
          <Link route="brands">
            Sign Up
          </Link> 
        </div> 
      </header>
    </div>
  );
}

export default Intro;
