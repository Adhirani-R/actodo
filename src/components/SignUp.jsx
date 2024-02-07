import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
  
const SignUp = (props) => 
{
    const user=props.user
    const setuser=props.setuser
    const navigate=useNavigate()
    const [eusername,setEusername]=useState()
    const [epassword,setEpassword]=useState()

        
        const handleUinput=(e)=>
        {
            setEusername(e.target.value)
        }
        const handlePinput=(e)=>
        {
            setEpassword(e.target.value)
        }
        const addUser=()=>
        {
            setuser([...user,{username:eusername,password:epassword}])
            navigate("/")
        }
    return (
        <>
            <div className='bg-black p-10'>

                <div className= 'bg-[#efefef] p-10 border rounded-md'>
                    <h1 className="text-2xl font-m">Hey Hi</h1>
                    {/* <p>I help you manage your activities after you login :)</p> */}
                    <p>Sign Up here :)</p>
                   <div className="flex flex-col gap-2 my-2">
                   <input onChange={handleUinput} className='w-52 border-black p-1 bg-transparent border rounded-md' type="text" placeholder="Username"></input>
                   <input onChange={handlePinput} className='w-52 border-black p-1 bg-transparent border rounded-md' type="text" placeholder="Password"></input>
                   <input className='w-52 border-black p-1 bg-transparent border rounded-md' type="text" placeholder="Confirm Password"></input>
                   <button onClick={addUser} className='bg-[#FCA201] w-24 p-1 rounded-md'>Sign Up</button>
                   <p>Already have an account? <Link to={'/'}className="underline"> Login</Link></p>
                   </div>
                </div>
            </div>
        </>
    )
}
export default SignUp