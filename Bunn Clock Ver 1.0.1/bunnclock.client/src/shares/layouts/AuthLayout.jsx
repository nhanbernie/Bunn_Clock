import Banner from "@shares/components/Banner"
import PropTypes from "prop-types"
import { Container, Row, Col } from 'react-bootstrap'

const AuthLayout = ({ FormComponent }) => {
    return (
        <Container fluid>
            <Row className='d-flex h-100'>
                <Col xs={12} lg={6} sm={4} md={5}>
                    <Banner />
                </Col>
                <Col xs={12} lg={6} sm={12} md={12}>
                    <FormComponent />
                </Col>
            </Row>
        </Container>
    )
}
AuthLayout.propTypes = {
    FormComponent: PropTypes.elementType.isRequired,
}

export default AuthLayout;