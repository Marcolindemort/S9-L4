import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, FormControl, Row } from "react-bootstrap";

class BookList extends Component {
	state = {
		searchQuery: "",
	};

	handleChange = (event) => {
		this.setState({ searchQuery: event.target.value });
	};

	render() {
		return (
			<>
				<Container>
					<FormControl
						type="text"
						placeholder="Inserisci il titolo del libro"
						className="mb-5"
						value={this.state.searchQuery}
						onChange={this.handleChange}
					/>
				</Container>
				<Container>
					<h2 className="my-4">Genere: {this.props.category}</h2>
					<Row xs={1} md={4} className="g-4">
						{this.props.genre
							.filter((book) => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
							.map((book) => (
								<Col key={book.asin}>
									<SingleBook img={book.img} title={book.title} category={book.category} price={book.price} />
								</Col>
							))}
					</Row>
				</Container>
			</>
		);
	}
}
export default BookList;
