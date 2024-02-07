
const Todoitem=(props)=>
{   
    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr
    

    const handleDelete=(delid)=>
    {
        var temparr=activityArr.filter((item)=>
        {
            if(item.id===delid)
            {
                return false
            }
            else
            {
                return true
            }
        }
        )
        setactivityArr(temparr)
    }

    return( <div className="flex justify-between flex-wrap">
        <p> {props.index + 1}. {props.activity}</p>
        <button onClick={()=>handleDelete(props.id)} className='text-red-500'>Del</button>  
    </div>)

}
export default Todoitem