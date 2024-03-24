import Counter from "./counter";
import  "./counter.css";

function App() {
  const node = {
      count: 1
  }

  return (
      <div className="App">
          < Counter node={node} />
      </div>
  );
}

export default App;