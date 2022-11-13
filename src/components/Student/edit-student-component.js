// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

// EditStudent Component
const EditStudent = (props) => {
const [formValues, setFormValues] = useState({
	brand_id: "",
	label: "",
	external_code: "",
    i_signed_sport: "",
    sports: "",

});
	
//onSubmit handler
const onSubmit = (studentObject) => {
	axios
	.put(
		"http://localhost:3001/api/update/" +
		props.match.params.brand_id,
		studentObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully updated");
		props.history.push("/student-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize student form
useEffect(() => {
	axios
	.get(
		"http://localhost:3001/api/update/" +
		props.match.params.brand_id
	)
	.then((res) => {
		const { brand_id , label , external_code, i_signed_sport, sports } = res.rows.data;
		setFormValues({ brand_id , label , external_code, i_signed_sport, sports });
	})
	.catch((err) => console.log(err));
}, []);


// Return student form
return (
    <div className="flex-fill container p-20">
	<StudentForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Student
	</StudentForm>
    </div>
);
};

// Export EditStudent Component
export default EditStudent;
