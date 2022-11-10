import { useState } from 'react'
import './App.css'
// import Home from "./"
function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [details, setDetails] = useState([])

  function submitdetails(e){
    e.preventDefault()
    const user={email:email,password:password}
    setDetails([user])
    console.log(details)
  }

  return (
    <div className="App">

      <div id="navbar">
            <p id="home"><a href="./login .html">Login</a></p>
            <p id="login"><a href="./dashboard.html">Dashboard</a></p>
        </div>
      <div id= "form">
        <form className="form" onSubmit={submitdetails}>
          <div>
            <label>Email</label>
            <input type="text" name="email" id="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div>
            <label>password</label>
            <input type="text" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button>Login</button>
        </form>
      </div>
      <div className="showdetails">
        {
          details.map((e)=>{
            return(
              <div>
                <p>Email: {e.email}</p> <p>Password: {e.password}</p>   
              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default App
