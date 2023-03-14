import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ActiveContestCard from '../../components/ActiveContestCard';
import ProblemCard from '../../components/ProblemCard';
import Top10Card from '../../components/Top10Card';

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={8}>
                    <ActiveContestCard />
                    <ProblemCard />
                </Col>
                <Col xs={12} md={4}>
                    <Top10Card />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;