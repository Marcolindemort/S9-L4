import { Alert, Container } from "react-bootstrap";

const Welcome = () => (
	<Container className="mt-4">
		<Alert variant="info">
			<h1>EPIBOOKS!</h1>
			<hr />
			<p>Guarda che bei libri!</p>
		</Alert>
	</Container>
);

export default Welcome;
