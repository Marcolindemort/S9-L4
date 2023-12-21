import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => (
	<Navbar bg="primary" data-bs-theme="dark">
		<Container>
			<Navbar.Brand href="#">
				<img
					src="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="logo"
					width={70}
					height={70}
					className="rounded-circle me-3"
				/>
				EpiBooks
			</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link href="#">Home</Nav.Link>
				<Nav.Link href="#">About</Nav.Link>
				<Nav.Link href="#">Browse</Nav.Link>
			</Nav>
		</Container>
	</Navbar>
);

export default MyNav;
