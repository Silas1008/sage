import './Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="wrapper">
      <form action="">
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
        <button type="submit" className="btn">
          Sign up
        </button>
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
