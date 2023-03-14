import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import CardList from "../CardList";

const BASE_URL = 'https://sevleague.altervista.org/api';

const ActiveContestCard = ({ number }) => {

    if (!number) number = 10;

    const [contests, setContests] = useState([]);
    const [displayContests, setDisplayContests] = useState([]);

    const getActiveContests = async (number) => {
        const response = await fetch(`${BASE_URL}/activecontests.php?n=${number}`);
        const data = await response.json();
        setContests(data);
    }

    useEffect(() => {
        getActiveContests(number);
    }, [number]);

    useEffect(() => {
        setDisplayContests(
            contests.map((contest) => (
                <>
                    <Badge bg="primary" className="font-monospace me-2">{`#${String(contest.id).padStart(3, '0')}`}</Badge>
                    {contest.name}
                </>
            ))
        );
    }, [contests])

    return (
        displayContests.length > 0 ? (
            <CardList title="Active Contests" data={displayContests} action={true} />
        ) : (
            <CardList title="Active Contests" data={['No active contests right now.']} action={false} />
        )
    );
};

export default ActiveContestCard;


