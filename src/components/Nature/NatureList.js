import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Container, Row, Table } from "react-bootstrap";


function NatureList (){
    const [allNature, setNatureList] = useState([]);




useEffect(() => {
  Axios.get('http://localhost:3001/api/get/nature')
  .then((res) => {
  console.log(res.data.rows)
  setNatureList(res.data.rows);
  })
  }, []);


return (
  <>
  <div className="flex-fill container p-20">
          <Container>
            <Row>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Nature</th>
                    <th>external_code</th>
                    <th>active</th>
                    <th>default_group</th>
                    <th>decathlon</th>
                    <th>label_en</th>
                    <th>label_fr</th>
                  </tr>
                </thead>
                <tbody>
                  {allNature.map((nature, index) => {
                    return (
                      <tr key={index}>
                        <td>{nature.nature_id}</td>
                        <td>{nature.external_code}</td>
                        <td>{nature.active}</td>
                        <td>{nature.default_group}</td>
                        <td>{nature.decathlon}</td>
                        <td>{nature.label_en}</td>
                        <td>{nature.label_fr}</td>

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


export default NatureList;
