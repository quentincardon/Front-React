import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Container, Row, Table } from "react-bootstrap";


function GuaranteeList (){
    const [allguarantees, setGuaranteeList] = useState([]);

  


useEffect(() => {
  Axios.get('http://localhost:3001/api/get/guarantee')
  .then((res) => {
  console.log(res.data.rows)
  setGuaranteeList(res.data.rows);
  })
  }, []);


return (
  <>
  <div className="flex-fill container p-20">
  <h1 className="my-30">Guarantee </h1>
          <Container>
            <Row>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Guarantee</th>
                    <th>label</th>
                  </tr>
                </thead>
                <tbody>
                  {allguarantees.map((guarantee, index) => {
                    return (
                      <tr key={index}>
                        <td>{guarantee.guarantee_id}</td>
                        <td>{guarantee.label}</td>
                        <td>
                          <Button variant="info">Edit</Button>
                        </td>
                        <td>
                          <Button variant="danger">Delete</Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Row>
          </Container>
    </div>
    </>
  );
};


export default GuaranteeList;
