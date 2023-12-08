import { Link } from "react-router-dom"
import './Login.css';
import logoname from '../../components/assets/images/logowebsite.png'

const LoginSignup = () => {
  return (
    <div className='login'>
    <form action="">
        <div className="logoname">
        <img src={logoname} alt=""/>
        </div>
        <h1>Login</h1>
        <div className="input">
          <input type="text" placeholder="Email" required />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit" className="btn">
          Sign up
        </button>
        <p>By continuing you agree to our terms and conditions</p>
        <p>
          Not yet registered? <Link to='/signup'>Signup</Link>
        </p>
      </form>
    </div>
  )
}

export default LoginSignup
