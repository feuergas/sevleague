import './scss/Bootstrap.scss';
import './scss/theme.scss';

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RouterNavBar from './components/RouterNavBar';
import Home from './pages';
import Ranking from './pages/ranking';
import ContestSet from './pages/contestset';
import ProblemSet from './pages/problemset';
import { Container } from 'react-bootstrap';



const App = () => {

    return (
        <>
            <Router>
                <RouterNavBar />
                <Container fluid>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/ranking' element={<Ranking />} />
                        <Route path='/contestset' element={<ContestSet />} />
                        <Route path='/problemset' element={<ProblemSet />} />
                    </Routes>
                </Container>
            </Router>
        </>
    );
}

export default App;