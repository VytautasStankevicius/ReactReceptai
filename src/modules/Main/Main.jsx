import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ReactComponent as Hero } from "../../images/hero.svg";
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigator = useNavigate()
    return (
        <Container>
            <Row>
                <Col sm={12} xl={6}>
                    <h2>Cooking Made Fun and Easy: Unleash Your Inner Chef</h2>
                    <p>Discover more than <span>10,000</span> recipes in your hand with the best recipe.
                        Help you to find the easiest way to cook.
                    </p>
                    <button onClick={()=>{navigator('/category')}}>Explore Recipes</button>
                </Col>
                <Col sm={12} xl={6}>
                    <Hero className="img-fluid"/>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;