import Axios from "axios";
import { useEffect,useState} from "react";
import StudentRow from './StudentRow';

function StudentList()
{   
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://crud-deployment-backend-4f2y.onrender.com/studentRoute/")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=> alert(err));
    },[]);

    const ListItems = () =>{
        return arr.map((val,ind)=>{  //[{},{},{},{}]
            return <StudentRow obj={val}/>
        })
    }

    return(
        <table class="table table-bordered table-striped table-info mt-5" style={{maxWidth:"60%",margin:"50px auto"}}>
            <thead>
            <tr>
                <th class="text-center">Name</th>
                <th class="text-center">Email</th>
                <th class="text-center">Roll Number</th>
                <th class="text-center">Action</th>
            </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}
export default StudentList;

