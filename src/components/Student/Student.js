import React, {Component} from "react";
import "./Student.css"
class Student extends Component{


    handleClick(id){
        console.log("div "+ id +" was clicked!");
        this.props.editFunction(id);
    }

    render(){
        return(
            <div className="Student">
                <div onClick={() => this.handleClick(this.props.ID)}>
                <p>{this.props.student.LastName}  {this.props.student.FirstName}</p>
                </div>





            </div>
        );
    }
}
export default Student;