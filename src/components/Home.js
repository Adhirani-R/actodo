import Login from "./Login";
import SignUp from "./SignUp";
import Landing from "./Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";


const Userar = () =>
 {
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
const Home = () => {
    return (
        <Userar />
    )
}
export default Home