import "./styles.css";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <h1> Welcome </h1>
      <Card
        name="Mohameth"
        years="Occupation: Educator"
        work="Experiecne: 2 years"
      />
      <Card
        name="Diego"
        years="Occupation: Egineer"
        work="Experiecne: 5 years"
      />
      <Card
        name="Kyley"
        years="Occupation: Educator"
        work="Experiecne: 6 years"
      />

      <div>
        <Footer />
      </div>
    </div>
  );
}

//this a comment
