import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { Auth } from "../../Firebase";

const SignUp = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(Auth, email, password)
            .then((userCredential) => {
                // Signed In
                navigate('/');
                toast.success('Registration complete');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Sumbit
                </Button>
            </Form>
        </Container>
    );
}

export default SignUp;