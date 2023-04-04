import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Login() {
    
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate()
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const host = "http://localhost:5000"

  const handleonsubmit = async (e) => {
    e.preventDefault()

    const response = await fetch(`${host}/api/auth/loginuser`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': "application/json"
      },

      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await response.json()
    console.log(json)

    if (json.success) {
      localStorage.setItem("token", json.authtoken)
      navigate('/courses')
    //   props.showalert("Login Successful", "success")
      console.log("Login Successful")
    } else {
    //   props.showalert("Invalid Credentials", "danger")
        console.log("Invalid Credentials")
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
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleonsubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onChange={onChange} value={credentials.email}  />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' onChange={onChange} value={credentials.password}  />
                      </Form.Group>
                     
                      <div className="d-grid">
                        <Button variant="success" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link to="/signup"><span  className="text-success fw-bold">
                          Sign Up
                        </span></Link>
                      </p>
                    </div>
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