import { Link } from "react-router-dom"
import './Login.css';

const LoginSignup = () => {
  return (
    <div className='login'>
    <form action="">
        <h1>Welcome back</h1>
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
          Not yet registered? <Link to='/signup'>Signup</Link>
        </p>
      </form>
    </div>
  )
}

export default LoginSignup
