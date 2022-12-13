import './Signup.css'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'


export default function Signup() {
  return (
    <div className="signup-page">
      <div className="left-container">
        <div className="header">
          <img src={Logo} alt="open AI logo" />
          <h2>Continue to AI</h2>
        </div>
        <form className="signup-form">
          
        <label className="name">
            <span>Name</span>
            <input type="text" required />
          </label>
          
          <label className="email">
            <span>Email</span>
            <input type="text" required />
          </label>

          <label className="password">
            <span>Password</span>
            <input type="text" required />
          </label>

          <button>Sign Up</button>
        </form>

        <label className="option">
          <input type="checkbox"/>
          <span>Accept T&C and privacy Policy</span>
        </label>

        <p>Already have an account? <Link to="/login">Sign In</Link></p>
      </div>

      
      <div className="right-container"></div>
    </div>
  )
}
