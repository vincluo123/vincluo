
import './Login.css';

export default function Login() {
  return (
    <div className='one'>
      <div className='sid'></div>
      <div className="App">
      
       <form>
       <h3>Login Here</h3>
        <label for className="username"></label>
        <input type ="email" placeholder="enter your email"></input>
        <label for className="username"></label>
        <input type ="text" placeholder="enter your password"></input>
        <button>Log In</button>

        <div className='social'>
       <div className='gl'>
       Google
       </div>
       <div className='fb'>
       Facebook
       </div>
      </div>

       </form>
      
    </div>

    </div>
  );
}





