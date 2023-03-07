import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import CardList from "../CardList";

const BASE_URL = 'https://gasmatematica.altervista.org/beta/api';

const ProblemCard = ({ number }) => {

    if (!number) number = 10;

    const [problems, setProblems] = useState([]);
    const [displayProblems, setDisplayProblems] = useState([]);

    const getProblems = async (number) => {
        const response = await fetch(`${BASE_URL}/problemset.php?n=${number}`);
        const data = await response.json();
        setProblems(data);
    }

    useEffect(() => {
        getProblems(number);
    }, [number]);

    useEffect(() => {
        setDisplayProblems(
            problems.map((problem) => (
                <>
                    <Badge bg="info" className="font-monospace me-2">{`#${String(problem.id).padStart(3, '0')}`}</Badge>
                    {problem.name}
                </>
            ))
        );
    }, [problems])

    return (
        <CardList title="Problems" data={displayProblems} action={true} />
    );
}

export default ProblemCard;