import {BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import ForgotPassword from "./Pages/ForgotPassword"
import SignIn from "./Pages/SignIn"
import Signup from "./Pages/Signup"
import Offers from "./Pages/Offers" 
import Header  from "./Components/Header"
import { ToastContainer } from "react-toastify"
import PrivateRoute from "./Components/PrivateRoute"
  import 'react-toastify/dist/ReactToastify.css';
import CreateListening from "./Pages/CreateListening"
function App() {
  return (
    <div>
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home></Home>} /> 
        <Route path="/profile" element={<PrivateRoute></PrivateRoute> } >
        
         <Route path="/profile" element={<Profile></Profile>} /> 

        </Route>
      
        <Route path="/sign_in" element={<SignIn></SignIn>} /> 
        <Route path="/sign_up" element={<Signup></Signup>} /> 
        <Route path="/forgot_password" element={<ForgotPassword></ForgotPassword>} /> 
        <Route path="/offers" element={<Offers></Offers>} /> 
        <Route path="/create-listing" element={<PrivateRoute></PrivateRoute> } >
        
        <Route path="/create-listing" element={<CreateListening></CreateListening>} /> 

       </Route>
      </Routes>
     </Router>
     <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    
    </div>
  );
}

export default App;
 