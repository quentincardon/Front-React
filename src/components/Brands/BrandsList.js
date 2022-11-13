import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Container, Row, Table } from "react-bootstrap";


function BrandsList (){
  const [label] = useState("");
  const [external_code] = useState("");
  const [is_signed_sport] = useState("");
  const [sports] = useState("");
  const [allbrands, setBrandsList] = useState([]);

useEffect(() => {
  Axios.get('http://localhost:3001/api/get/brands')
  .then((res) => {
  console.log(res.data.rows)
  setBrandsList(res.data.rows);
  })
  }, []);

  const deleteBrands = (brand_id) =>{
    Axios.delete(`http://localhost:3001/api/delete/${brand_id}`)
  }

  const updateBrands = (brand_id) =>{
    Axios.put(`http://localhost:3001/api/update/${brand_id}`,{
      label: label, 
      external_code: external_code,
       is_signed_sport:is_signed_sport,
       sports:sports
      })
  }


return (
  <>
  <div className="flex-fill container p-20">
  <h1 className="my-30">Brands</h1>
          <Container>
            <Row>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Brands</th>
                    <th>label</th>
                    <th>external_code</th>
                    <th>is_signed_sport</th>
                    <th>sports</th>
                  </tr>
                </thead>
                <tbody>
                  {allbrands.map((brand, index) => {
                    return (
                      <tr key={index}>
                        <td>{brand.brand_id}</td>
                        <td>{brand.label}</td>
                        <td>{brand.external_code}</td>
                        <td>{brand.is_signed_sport}</td>
                        <td>{brand.sports}</td>
                        <td>
                          <Button variant="info" onChange={(e) => {
       setBrandsList(e.target.value)}}
       onClick={() => {updateBrands(brand.brand_id)}}>
        Edit</Button>
                        </td>
                        <td>
                          <Button variant="danger" onClick={() => {deleteBrands(brand.brand_id)}}>Delete</Button>
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


export default BrandsList;
