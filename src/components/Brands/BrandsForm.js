import React, { useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BrandsForm() {
  const [label, setLabel] = useState("");
  const [external_code, setExternalCode] = useState("");
  const [is_signed_sport, setIsSignedSport] = useState("");
  const [sports, setSport] = useState("");


  const submitReview = () =>{
    Axios.post("http://localhost:3001/api/insert", {
      label: label, 
      external_code: external_code,
       is_signed_sport:is_signed_sport,
       sports:sports
      }).then(() =>{
        alert('succes')
      });
  };


  return (
    <div className="flex-fill container p-20">
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Label</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e) => {
       setLabel(e.target.value);
     }}/>
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e) => {
       setExternalCode(e.target.value);
     }}/>
        <Form.Text className="text-muted">          
        </Form.Text>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e) => {
       setIsSignedSport(e.target.value);
     }} />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Sport</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e) => {
       setSport(e.target.value);
     }}/>
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Button onClick={submitReview} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   
</div>
  );
}

export default BrandsForm;
