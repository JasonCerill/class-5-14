import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <h1>Welcome to WhoKnows</h1>
      <Navbar></Navbar>

      <Footer></Footer>
    </div>
  );
}

export default App;
