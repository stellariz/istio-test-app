import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {ACCESS_TOKEN, Config} from "../constants";
import {useAuth} from "../auth/utils";
import {useLocation, useNavigate} from "react-router-dom";


const NavBar = () => {
    const auth = useAuth()
    const [isAuthenticated, setAuthenticated] = useState()
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

    useEffect( () => {
        if (localStorage.getItem(ACCESS_TOKEN) !== null) {
            setAuthenticated(true)
        } else {
            setAuthenticated(false)
        }
    })

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">Istio test app</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/permissions">Permissions</Nav.Link>
                    </Nav>
                    <Nav>
                        {isAuthenticated ?
                            <div className="container">
                                <Row className="Action">
                                    <Col sm={7}>
                                        <Button variant="primary">To do smth</Button>
                                    </Col>
                                    <Col sm={5}>
                                        <Button variant="danger" onClick={() => auth.signout(()=>{
                                            navigate("/home", {replace: true, state: {from: from}})
                                            window.location.reload()
                                        })}>Logout</Button>
                                    </Col>
                                </Row>
                            </div>
                            :
                            <Button variant="success" onClick={() => window.location.replace(`https://${Config.domain}/authorize?response_type=code&client_id=${Config.clientID}&audience=${Config.audience}&redirect_uri=${Config.redirect_uri}&scope=openid`)}>Login</Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar