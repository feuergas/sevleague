import './scss/theme.scss';

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RouterNavBar from './components/RouterNavBar';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import ContestSet from './pages/Contestset';
import ProblemSet from './pages/Problemset';
import { Container } from 'react-bootstrap';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Auth, DataBase } from './Firebase';
import SignUp from './pages/SignUp';
import ToastNotification from './components/ToastNotification';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {

    const [user, setUser] = useState({});

    useEffect(() =>
        onAuthStateChanged(Auth, async (currentUser) => {
            if (currentUser !== null) {
                currentUser = await getUserByEmail(currentUser.email)
                    .then((userData) => {
                        return { ...currentUser, ...userData };
                    });
            }
            setUser(currentUser)
        })
        , []);

    const getUserByEmail = async (email) => {
        const q = query(collection(DataBase, "Users"), where("email", "==", email));
        const querySnapshot = await getDocs(q)
            .then((querySnapshots) => {
                const data = querySnapshots.docs
                    .map((doc) => (
                        { ...doc.data(), id: doc.id }
                    ));
                return data;
            });
        return querySnapshot[0];
    };


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
    }, []);

    return (
        <>
            <Router>
                <ToastNotification />
                <RouterNavBar user={user} setUser={setUser} />
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