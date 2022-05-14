import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <h2>{props.work}</h2>
      <h3>{props.years}</h3>
    </div>
  );
}

export default Card;
