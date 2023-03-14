import { useState } from "react";
import { Button, Form, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../../Firebase";
import { toast } from "react-hot-toast";


const LoginForm = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(Auth, email, password)
            .then((userCredential) => {
                // Signed In
                navigate('/');
                toast.success('You logged in');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <NavDropdown
            title="Log In"
            id="login-dropdown"
            align={{ md: 'end' }}
            data-bs-theme
        >
            <Form className="px-4 py-3">
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onLogin}>
                    Sign in
                </Button>
            </Form>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/signup">New around here? Sign up</NavDropdown.Item>
            <NavDropdown.Item>Forgot password?</NavDropdown.Item>
        </NavDropdown>
    );
}

export default LoginForm;