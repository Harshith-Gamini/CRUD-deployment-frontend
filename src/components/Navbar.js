import {Link} from 'react-router-dom';
import { Component } from 'react';

class Navbar extends Component{
    render(){
        return(
            <nav class="navbar bg-info">
                <Link style={{"fontFamily":"AlumniSansCollegiateOne"}}to="/" class='navbar-brand mx-3'>CRUD Operation</Link>
                <div class='nav'>
                    <Link style={{"fontFamily":"TitilliumWeb"}} to="/create-student" class="nav-link">Create Student</Link>
                    <Link style={{"fontFamily":"TitilliumWeb"}} to="/student-list" class="nav-link">Student List</Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;