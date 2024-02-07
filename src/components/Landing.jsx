import Header from "./Header";
import Card from "./card";
import TodoContainer from "./TodoContainer";
import { useLocation } from "react-router-dom"
const Landing=()=>
{   
   const data=useLocation()
 
    return(<>
     <div className='bg-black p-16'>
         <div className='bg-[#efefef] p-10 border rounded-md'>
         
           {/* Header */}
            <Header name={data.state.eusername}/>
           
            {/* Card */}
            <div className='flex justify-between gap-7 my-5 flex-wrap'>
               <Card bgcolor={'rgb(118, 1, 239)'} title={'23'} subtitle={'Chennai'} />
               <Card bgcolor={'#fd5663'} title={'February'} subtitle={'12:31:00'} />
               <Card bgcolor={ '#fca201'} title={'Built Using'} subtitle={'React'} />
           </div>
          
           {/* TodoContainer */}
           <TodoContainer/>
          
          
         </div>
      </div>
      </>)
}
export default Landing