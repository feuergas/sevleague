import { useEffect, useState } from "react";
import { Badge, Col, Row } from "react-bootstrap";
import CardList from "../CardList";

const BASE_URL = 'https://gasmatematica.altervista.org/beta/api';

const Top10Card = ({ number }) => {

    if (!number) number = 10;

    const [users, setUsers] = useState([]);
    const [displayUsers, setDisplayUsers] = useState([]);

    const getUsers = async (number) => {
        const response = await fetch(`${BASE_URL}/topusers.php?n=${number}`);
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        getUsers(number);
    }, [number]);

    useEffect(() => {
        const rankColor = {
            1: 'text-gold',
            2: 'text-silver',
            3: 'text-bronze'
        };
        setDisplayUsers(
            users.map((user) => (
                <>
                    <Row>
                        <Col xs={1} className="text-nowrap text-center">
                            <strong className={user.rank <= 3 ? rankColor[user.rank] : ''}>{user.rank}</strong>
                        </Col>
                        <Col>
                            <Badge bg="secondary" className="font-monospace me-2">{`#${String(user.id).padStart(3, '0')}`}</Badge>
                            {user.username}
                        </Col>
                    </Row>
                </>
            ))
        );
    }, [users])

    return (
        <CardList title="Top 10" data={displayUsers} action={true} />
    );
}

export default Top10Card;