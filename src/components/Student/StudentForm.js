import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const StudentForm = (props) => {
const validationSchema = Yup.object().shape({
	label: Yup.string().required("Required"),
	external_code: Yup.number().required("Required"),
	i_signed_sport: Yup.string().required("Required"),
	sports: Yup.string().required("Required"),
});
console.log(props);
return (
	<div className="form-wrapper">
            <div className="flex-fill container p-20">

	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<Field name="label" type="text"
				className="form-control" placeholder="enter label"/>
			<ErrorMessage
			name="label"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>

		<FormGroup>
			<Field name="external_code" type="number"
				className="form-control" placeholder="enter external_code"/>
			<ErrorMessage
			name="external_code"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>

		<FormGroup>
			<Field name="i_signed_sport" type="text"
				className="form-control" placeholder="enter signed_sport"/>
				
			<ErrorMessage
			name="i_signed_sport"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>

		<FormGroup>
			<Field name="sports" type="text"
				className="form-control" placeholder="enter sports"/>
			<ErrorMessage
			name="sports"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>

		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
    </div>
);
};

export default StudentForm;
