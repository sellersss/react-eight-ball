import "./App.css";
import EightBall from "./components/EightBall";
import Counter from "./components/Counter";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Think of a question</h1>
      <h4>Then click the magic 8 ball</h4>
      <EightBall
        style={{
          margin: "auto",
          width: "50%",
        }}
      />
    </div>
  );
}

export default App;
