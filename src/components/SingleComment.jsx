const SingleComment = (props) => (
	<div>
		<span>Autore {props.author}</span>
		<span>Voto: {props.rate}</span>
		<p>{props.comment}</p>
	</div>
);

export default SingleComment;
