import { Component } from "react";
import { Badge, Button, Card } from "react-bootstrap";

class SingleBook extends Component {
	state = {
		selected: false,
	};

	render() {
		return (
			<Card className="h-100" style={{ borderColor: this.state.selected ? "red" : "rgba(0,0,0,0.175)" }}>
				<Card.Img
					variant="top"
					src={this.props.img}
					onClick={() => this.setState({ selected: !this.state.selected })}
				/>
				<Card.Body className="d-flex flex-column justify-content-end align-items-center">
					<Card.Title>{this.props.title}</Card.Title>
					<Card.Text>
						Genere: {this.props.category} - <Badge>Prezzo: {this.props.price}</Badge>
					</Card.Text>
					<Button variant="primary">Compra</Button>
				</Card.Body>
			</Card>
		);
	}
}

export default SingleBook;
