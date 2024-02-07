import Header from "./components/Header";
import Card from "./components/card";
import TodoContainer from "./components/TodoContainer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
   const [user, setuser] = useState([
      {
         username: 'adhi',
         password: '654'
      }
   ])

   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Login user={user} setuser={setuser} />}></Route>
               <Route path='/SignUp' element={<SignUp user={user} setuser={setuser} />}></Route>
               <Route path='/Landing' element={<Landing />}></Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}

export default App;
