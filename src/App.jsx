import './scss/theme.scss';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RouterNavBar from './components/RouterNavBar';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import ContestSet from './pages/Contestset';
import ProblemSet from './pages/Problemset';
import { Container } from 'react-bootstrap';
import { collection, getDocs } from 'firebase/firestore';
import { DataBase } from './Firebase';
import SignUp from './pages/SignUp';
import ToastNotification from './components/ToastNotification';

const App = () => {

    const getUsers = async () => {
        await getDocs(collection(DataBase, 'Users'))
            .then((querySnapshots) => {
                const data = querySnapshots.docs
                    .map((doc) => (
                        { ...doc.data(), id: doc.id }
                    ));
                console.table(data);
            })
    }

    useEffect(() => {
        getUsers();
    });

    return (
        <>
            <Router>
                {/*<Toaster />*/}
                <ToastNotification />
                <RouterNavBar />
                <Container fluid>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/ranking' element={<Ranking />} />
                        <Route path='/contestset' element={<ContestSet />} />
                        <Route path='/problemset' element={<ProblemSet />} />
                        <Route path='/signup' element={<SignUp />} />
                    </Routes>
                </Container>
            </Router>
        </>
    );
}

export default App;