import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import fantasy from "./data/fantasy.json";
import horror from "./data/horror.json";
import history from "./data/history.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";
import BookList from "./components/BookList";

function App() {
	return (
		<div className="App">
			<MyNav />
			<Welcome />
			<BookList genre={fantasy} category="Fantasy" />
			{/*<BookList genre={horror} category="Horror" />
			<BookList genre={history} category="History" />
			<BookList genre={romance} category="Romance" />
	<BookList genre={scifi} category="Sci-Fi" />*/}
			<MyFooter />
		</div>
	);
}

export default App;
