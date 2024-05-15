import "../cssfiles/MpasswordForget.css";

export default function MpasswordForget() {
  return (
    <div className='one'>
      <div className="App">
        <form>
          <h3>Reset Your Password?</h3>
          <label htmlFor="email" className="email">Enter your email:</label>
          <input type="email" id="email" placeholder="Enter your email"></input>
          <button>Reset Password</button>
        </form>
      </div>
    </div>
  );
}
