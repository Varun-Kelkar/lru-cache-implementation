import Users from "./Users";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>LRU Cache Demo</h1>
      <p className="description">
        This is a simple demo of an LRU Cache used in React. Type a name in the
        search box and press enter to see the results. The cache will store the
        last 4 searches, which you can click to load again.
      </p>
      <Users />
    </div>
  );
}

export default App;
