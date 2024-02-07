import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Login = (props) =>
 {
    const navigate=useNavigate()
    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()
    const [ruser, setruser] = useState(true)
    const user = props.user
    const handleUinput = (e) => {
        setEusername(e.target.value)
    }
    const handlePinput = (e) => {
        setEpassword(e.target.value)
    }
    const checkUser = () =>
     {
        var userfound = false

        user.forEach((item) => 
        {
            if (item.username === eusername && item.password === epassword)
            {
               // console.log("login")
                userfound = true
                navigate("/landing",{state:{eusername:eusername}})
            }
        })

        if (userfound === false) {
            console.log("login Failed")
            setruser(false)

        }
    }
    return (
        // <h1>Login</h1>
        <>
            <div className='bg-black p-10'>

                <div className='bg-[#efefef] p-10 border rounded-md'>
                    <h1 className="text-2xl font-m">Hey Hi</h1>
                    {ruser ? <p>I help you manage your activities after you login :)</p> : <p className='text-red-500'>Please Sign Up Before You Login!!</p>}


                    <div className="flex flex-col gap-2 my-2">
                        <input onChange={handleUinput} value={eusername} className='w-52 border-black p-1 bg-transparent border rounded-md' type="text" placeholder="Username"></input>

                        <input onChange={handlePinput} value={epassword} className='w-52 border-black p-1 bg-transparent border rounded-md' type="password" placeholder="Password"></input>


                        <button onClick={checkUser} className='bg-[#8272da] w-24 p-1 rounded-md'>Login</button>
                        <p>Don't have an account? <Link to={'/signUp'} className="underline"> Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login