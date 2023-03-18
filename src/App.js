import "./App.css";
import NavBar from "./components/Navbar.jsx";
import TreeView from "./components/TreeView.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <TreeView />
      </div>
    </div>
  );
}

export default App;
