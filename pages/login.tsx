import { useRouter } from "next/router";

const Login = () => {
	const router = useRouter();

	const { previous } = router.query;

	return <div>Previous page was {previous}</div>;
};

export default Login;
