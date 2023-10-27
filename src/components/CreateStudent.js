import StudentForm from "./StudentForm";
import Axios from "axios";
import { useState } from "react";
function CreateStudent()
{
    const [arr,setArr] = useState([]);

    const getState = (childData) =>{
        setArr(childData);
    }

    const handleSubmit = () => {
        const data = {name:arr[0],email:arr[1],rollno:arr[2]};
        Axios.post("https://crud-deployment-backend-4f2y.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status === 200){
                alert("Record added Successfully");
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }

    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}>
                Create Student
            </StudentForm>
        </form>
    )
}
export default CreateStudent;
