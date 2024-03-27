// import React, { useState } from "react";
// import './LoginSignup/LoginSignup.css'


// import user_icon from "../Assets/person.png";
// import email_icon from "../Assets/email.png";
// import password_icon from "../Assets/password.png";

// const LoginSignup = () => {

//   const[action,setAction]= useState("Login")

//   return (
//     <div className="container">
//       <div className="header">
//         <div className="text">{action} </div>
//         <div className="underline"></div>
//       </div>
//       <div className="inputs">
//         {action==="Login"?<div></div>:<div className="input">
//           <img src={user_icon} alt="" />
//           <input type="text" placeholder="Name"/>
//         </div>}
        
//         <div className="input">
//           <img src={email_icon} alt="" />
//           <input type="email" placeholder="Email"/>
//         </div>
//         <div className="input">
//           <img src={password_icon} alt="" />
//           <input type="password" placeholder="Enter Password"/>
//         </div>
//       </div>
//       {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
      
//       <div className="submit-container">
//         <div className={action==="Login"?"submit gray": "submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up</div>
//         <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}> Login</div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form data
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Sign up the user
    // ...

    // Redirect the user to the login page
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form data
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Log in the user
    // ...

    // Redirect the user to the home page
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <Login /> : <SignUp />}
    </div>
  );
}