import Axios from 'axios';
import {Link} from 'react-router-dom';
function StudentRow(props)
{

    const {_id,name,email,rollno} = props.obj; //Object destruction

    const handleClick = () =>{
        Axios.delete("https://crud-deployment-backend-4f2y.onrender.com/studentRoute/delete-student/"+_id)
        .then((res) =>{
            if(res.status === 200){
                alert("Record Deleted Successfully");
                window.location.reload();
            }
            else{
                Promise.reject();
            }
        })
        .catch( (err) => alert(err));
        }
    return(
        <tr>
            <td class="text-center">{name}</td>
            <td class="text-center">{email}</td>
            <td class="text-center">{rollno}</td>
            <td class="d-flex justify-content-center">
                <Link to={"/edit-student/"+_id} class="text-decoration-none text-light me-4">
                    <button class="btn btn-success">
                        Edit
                    </button>
                </Link>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td>   

        </tr>
    )
}
export default StudentRow;
