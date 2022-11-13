import React, { useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NatureForm() {

  const [external_code, setExternalCode] = useState("");
  const [active, setActive] = useState("");
  const [default_group, setDefaultGroup] = useState("");
  const [decathlon, setDecathlon] = useState("");
  const [label_en, setLabelEN] = useState("");
  const [label_fr, setLabelFR] = useState("");



  const submitReview = () =>{
    Axios.post("http://localhost:3001/api/insert/nautre", {
      external_code: external_code,
       is_signed_sport:active,
       default_group:default_group,
       decathlon:decathlon,
       label_en: label_en, 
       label_fr: label_fr 

      }).then(() =>{
        alert('succes')
      });
  };


  return (
    <div className="flex-fill container p-20">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>external_code</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e) => {
       setExternalCode(e.target.value);
     }}/>
        <Form.Text className="text-muted">          
        </Form.Text>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Active</Form.Label>
        <Form.Control type="text" placeholder="Active" onChange={(e) => {
       setActive(e.target.value);
     }} />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>default_group</Form.Label>
        <Form.Control type="text" placeholder="Default" onChange={(e) => {
       setDefaultGroup(e.target.value);
     }}/>
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Decathlon</Form.Label>
        <Form.Control type="text" placeholder="Decathlon" onChange={(e) => {
       setDecathlon(e.target.value);
     }}/>
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Label_EN</Form.Label>
        <Form.Control type="text" placeholder="Enter label" onChange={(e) => {
       setLabelEN(e.target.value);
     }}/>
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Label_FR</Form.Label>
        <Form.Control type="text" placeholder="Enter label" onChange={(e) => {
       setLabelFR(e.target.value);
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

export default NatureForm;
