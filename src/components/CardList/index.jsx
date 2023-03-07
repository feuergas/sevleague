import { Card, ListGroup } from "react-bootstrap"

const CardList = ({ title, data, action }) => {
    return (
        <Card className="mb-3">
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    {
                        data.map((item, idx) => (
                            <ListGroup.Item
                                action={action}
                                key={`${title}-${idx}`}
                            >
                                {item}
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default CardList;