import "../cssfiles/PasswordForget.css";


export default function PasswordForget() { // Changed component name to PasswordForget
  return (
    <div className='one'>
      <div className="App">
        <form>
          <h3>Reset Your Password?</h3>
          <label htmlFor="email" className="email">Enter your email:</label> {/* Corrected htmlFor attribute */}
          <input type="email" id="email" placeholder="Enter your email"></input>
          <button>Reset Password</button>
        </form>
      </div>
    </div>
  );
}
