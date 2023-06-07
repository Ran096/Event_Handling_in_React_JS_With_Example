import "./styles.css";

export default function App() {
  const getInput = (event) => {
    console.log(event.target.value);
  };
  const addTwoNumber = (num1, num2) => {
    let c = num1 + num2;
    console.log(c);
  };
  return (
    <div className="App">
      <input placeholder="Enter Number" onChange={getInput} />
      <button onClick={() => addTwoNumber(25, 25)}> Add Number </button>
    </div>
  );
}
