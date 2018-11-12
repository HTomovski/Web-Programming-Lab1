import React, {Component} from "react";
import "./StudentList.css";
import Student from "../Student/Student";
class StudentList extends Component{




    render(){
        console.log(this.props);
        let studentItems = this.props.students.map((e, id) => {
            return(
                <Student key={id} ID={id} student={e} editFunction={this.props.editFunction}/>
            )
        });
        return(
            <div className="StudentList">
                <h1>This is our StudentList</h1>
                {studentItems}


            </div>
        );

    }
}
export default StudentList;