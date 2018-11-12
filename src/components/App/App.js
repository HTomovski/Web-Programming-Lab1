import React, {Component} from "react";
import "./App.css";
import StudentList from "../StudentList/StudentList";
import {listStudents} from "../../repository/studentRepository";
import EditStudent from "../EditStudent/EditStudent";
class App extends Component{
    constructor(props){
        super(props);
        this.editStudent = this.editStudent.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
        this.state = {
            students: listStudents(),
            studentToEdit: null
        };
    };
    updateStudent(ID, fName, lName, index, course){
        this.setState( () => {
            let updatedStudent = {
                FirstName: fName,
                LastName: lName,
                Index: index,
                Course: course
            };
            let updatedStudents = this.state.students;
            updatedStudents[ID] = updatedStudent;
            return{
                students: updatedStudents
            };
        });
    };
    editStudent(id){
        this.setState( () => {
            let eStudent = this.state.students[id];
            return{
                studentToEdit: eStudent
            }
        })
    };
    render(){

        let toEdit;
        if (this.state.studentToEdit != null) {
            toEdit=<EditStudent student={this.state.studentToEdit} updateFunction={this.updateStudent}/>
        }
        return(
            <div className="App container">
                <StudentList students={this.state.students} editFunction={this.editStudent}/>
                {toEdit}
            </div>
        );
    }
}
export default App;