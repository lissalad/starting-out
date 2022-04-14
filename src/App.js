import "./App.css";
import Header from "./components/Header";
import InstallReact from "./components/pages/react/InstallReact";

function App() {

  

  return (
    <div className="App">
      <Header />
      <main className="m-3">
        <InstallReact />
      </main>
    </div>
  );
}

export default App;
