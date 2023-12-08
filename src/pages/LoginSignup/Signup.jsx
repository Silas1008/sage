import './Signup.css'
import { Link } from 'react-router-dom';
import logoname from '../../components/assets/images/logowebsite.png'


const Signup = () => {
  return (
    <div className="wrapper">
      <form action="">
      <div className="logoname">
        <img src={logoname} alt=""/>
        </div>
        <h1>Sign up</h1>
        <div className="input">
          <input type="text" placeholder="Full Name" required />
        </div>
        <div className="input">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input">
          <input type="text" placeholder="Email" required />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="input">
          <input type="password" placeholder="Re-Enter password" required />
        </div>
        <button type="submit" className="btn">
          Sign up
        </button>
        <p>By creating an account you agree to our terms and conditions</p>
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
