import { useState,useEffect } from "react";
function StudentForm(props){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [rollno,setRollNo] = useState("");

    useEffect(() => {
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollNo(props.rollnoValue);
    },[props.nameValue,props.emailValue,props.rollnoValue]);

    const arr = [name,email,rollno];

    const handleClick = () =>{
        props.getState(arr);
    }
    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event) => setName(event.target.value)} class="form-control my-3" placeholder="Enter your Name"/>
            <input defaultValue={props.emailValue} onChange={(event) => setEmail(event.target.value)} class="form-control my-3" placeholder="Enter your Email"/>
            <input defaultValue={props.rollnoValue} onChange={(event) => setRollNo(event.target.value)} class="form-control my-3" placeholder="Enter your Roll Number"/>
            <button onClick = {handleClick} class="btn btn-primary my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}

export default StudentForm;