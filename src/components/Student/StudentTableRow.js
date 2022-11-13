import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
const { brand_id , label , external_code, i_signed_sport, sports } = props.obj;

const deleteStudent = () => {
	axios
	.delete(
"http://localhost:3001/api/delete/" + brand_id)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{brand_id}</td>
	<td>{label}</td>
	<td>{external_code}</td>
    <td>{i_signed_sport}</td>
	<td>{sports}</td>

	<td>
		<Link className="edit-link"
		to={"edit-student/" + brand_id}>
		<Button variant="info">Edit</Button>
		</Link>
		<Button onClick={deleteStudent}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default StudentTableRow;
