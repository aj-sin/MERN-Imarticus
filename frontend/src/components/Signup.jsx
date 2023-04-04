import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
    const host = "http://localhost:5000"


    const [credentials, setCredentials] = useState({ Name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate()
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
  
  
  
    const handleonsubmit = async (e) => {
      e.preventDefault()
  
      // console.log("User signed in")
      if (credentials.password === credentials.cpassword) {
        const { Name, email, password } = credentials
        //API CALL
        const response = await fetch(`${host}/api/auth/signupuser`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': "application/json"
          },
  
          body: JSON.stringify({ Name, email, password })
        });
  
        const json = await response.json()
        // console.log(json)
  
  
        if (json.success) {
          localStorage.setItem("token", json.authtoken)
          navigate('/courses')
  
        } else {
          console.log("Email Already Exists.....")
        }
      } else {
        console.log("Password Do not match")
      }
  
  
    }
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-success"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Imarticus</h2>
                  <p className=" mb-5">Register yourself</p>
                  <div className="mb-3">
                    <Form onSubmit={handleonsubmit}>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                          name='Name' onChange={onChange} value={credentials.Name} 
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onChange={onChange} value={credentials.email} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' onChange={onChange} value={credentials.password} minLength={8} required />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicConfirmPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          name='cpassword' onChange={onChange} value={credentials.cpassword} minLength={8} required
                        />
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="success" type="submit">
                          Signup
                        </Button>
                      </div>
                    </Form>
                   
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
