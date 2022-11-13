import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";

const StudentList = () => {
const [students, setStudents] = useState([]);


useEffect(() => {
    axios.get('http://localhost:3001/api/get/brands')
    .then((res) => {
    console.log(res.data.rows)
    setStudents(res.data.rows);
    })
    }, []);

const DataTable = () => {
	return students.map((res, i) => {
	return <StudentTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
        <th>Brands</th>
        <th>label</th>
        <th>external_code</th>
        <th>is_signed_sport</th>
        <th>sports</th>
		<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default StudentList;
