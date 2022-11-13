// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

// CreateStudent Component
const CreateStudent = () => {
const [formValues, setFormValues] =
	useState({ brand_id: '', label: '', external_code: '', i_signed_sport: '', sports: '' })
// onSubmit handler
const onSubmit = studentObject => {
	axios.post(
'http://localhost:3001/api/insert',
	studentObject)
	.then(res => {
		if (res.status === 200)
		alert('Student successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return student form
return(
    <div className="flex-fill container p-20">
	<StudentForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Student
	</StudentForm>
    </div>
)
}

// Export CreateStudent Component
export default CreateStudent
