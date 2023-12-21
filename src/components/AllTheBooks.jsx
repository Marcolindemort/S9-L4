import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

const AllTheBooks = (props) => (
	<Container>
		<h3 className="mb-4">Genere: {props.genere}</h3>
		<Row xs={1} md={4} className="g-4">
			{fantasy.map((book) => (
				<Col key={book.asin}>
					<Card className="h-100">
						<Card.Img variant="top" src={book.img} />
						<Card.Body className="d-flex flex-column justify-content-end align-items-center">
							<Card.Title>{book.title}</Card.Title>
							<Card.Text>
								Genere: {book.category} - <Badge>Prezzo: {book.price}</Badge>
							</Card.Text>
							<Button variant="primary">Compra</Button>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	</Container>
);

export default AllTheBooks;
