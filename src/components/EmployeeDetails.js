import axios from "axios";
import { useEffect, useState } from "react";

function EmployeeDetails()
{
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200)
            {
                // console.log(res.data);
                setData(res.data)
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[]);
    
    const ListNames = () => {
        return data.map((val)=>{
            return <p>{val.name}</p>
        })
    }
    return(
        <div>
            {ListNames()}
        </div>
    )
}
export default EmployeeDetails;