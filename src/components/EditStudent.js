import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom";
import Axios from 'axios';
import { useEffect,useState} from "react";

function EditStudent(){
    const {id} = useParams();
    const [intialValue,setIntialValue] = useState({name:"",email:"",rollno:""});
    const [newData,setNewData] = useState([]);

    useEffect(() =>{
        Axios.get("https://crud-deployment-backend-4f2y.onrender.com/studentRoute/update-student/"+id)
        .then((res) =>{
            if(res.status === 200){
                const {name,email,rollno} = res.data;
                setIntialValue({name,email,rollno});
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () =>{
        const data = {name:newData[0],email:newData[1],rollno:newData[2]};
        Axios.put("https://crud-deployment-backend-4f2y.onrender.com/studentRoute/update-student/"+id,data)
        .then((res) =>{
            if(res.status === 200){
                alert("Record updated Successfully");
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }

    return(
        <form onSubmit={handleSubmit}>
        <StudentForm getState={getState}
                    nameValue={intialValue.name}
                    emailValue={intialValue.email}
                    rollnoValue={intialValue.rollno}>
                        Update Student
        </StudentForm>
        </form>
    )
}

export default EditStudent;