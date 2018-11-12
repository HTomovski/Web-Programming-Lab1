import React, {Component} from "react";
import "./EditStudent.css";
class EditStudent extends Component{
    submitUpdate(){

    }
    render(){
        console.log(this.props);
        return(
            <div>
                <form className="form-group">
                    <div className="form-group form-inline"><label className="col-form-label col-md-2">First Name: </label><input id="FN" className="form-control" type="text" placeholder={this.props.student.FirstName} /></div>
                    <div className="form-group form-inline"><label className="col-form-label col-md-2">Last Name: </label><input id="LN" className="form-control" type="text" placeholder={this.props.student.LastName} /></div>
                    <div className="form-group form-inline"><label className="col-form-label col-md-2">Index: </label><input id="ind" className="form-control" type="text" placeholder={this.props.student.Index} /></div>
                    <div className="form-group form-inline"><label className="col-form-label col-md-2">Course: </label><input id="cou" className="form-control" type="text" placeholder={this.props.student.Course} /></div>
                    <div><button className="btn btn-primary col-sm-5" onClick={()=>this.submitUpdate()}>Submit</button></div>
                </form>
            </div>
        );
    }
}
export default EditStudent;
// onSubmit={this.props.updateFunction()}