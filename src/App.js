import {BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import ForgotPassword from "./Pages/ForgotPassword"
import SignIn from "./Pages/SignIn"
import Signup from "./Pages/Signup"
import Offers from "./Pages/Offers" 


function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} /> 
        <Route path="/profile" element={<Profile></Profile>} /> 
        <Route path="/sign_in" element={<SignIn></SignIn>} /> 
        <Route path="/sign_up" element={<Signup></Signup>} /> 
        <Route path="/forgot_password" element={<ForgotPassword></ForgotPassword>} /> 
        <Route path="/Offers" element={<Offers></Offers>} /> 

      </Routes>
     </Router>
    
    </div>
  );
}

export default App;
 