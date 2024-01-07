import { ReactComponent as Logo } from '../../images/logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return(
        <>
        <Container>
            <h2><Logo/>Recipedia</h2>
            <Row>
                <Col sm={12} xl={2}>
                    <h2>Meniu</h2>
                    <p><a href='#'>Home</a></p>
                    <p><a href='#'>Recipe</a></p>
                    <p><a href='#'>Community</a></p>
                    <p><a href='#'>About Us</a></p>
                </Col>
                <Col sm={12} xl={2}>
                    <h2>Categories</h2>
                    <p><a href='#'>Breakfast</a></p>
                    <p><a href='#'>Lunch</a></p>
                    <p><a href='#'>Dinner</a></p>
                    <p><a href='#'>Dessert</a></p>
                    <p><a href='#'>Drink</a></p>
                </Col>
                <Col sm={12} xl={2}>
                    <h2>Social</h2>
                    <p><a href='#'>Instagram</a></p>
                    <p><a href='#'>Twitter</a></p>
                    <p><a href='#'>Youtube</a></p>
                    <p><a href='#'>Facebook</a></p>
                </Col>
                <Col sm={12} xl={5}>
                    <h2>Sign up for our newsletter</h2>
                    <div>
                        <input type='text' placeholder='Your email adress'></input>
                        <button type='submit'>Submit</button>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Footer;