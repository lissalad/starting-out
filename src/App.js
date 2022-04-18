import "./App.css";
import Header from "./components/Header";
import JinjaHelp from "./components/JinjaHelp";
import ReactInstall from "./components/ReactInstall";
import FlaskProject from "./components/FlaskProject";
import TailwindReact from "./components/TailwindReact";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="m-3 flex flex-row flex-wrap">
        <JinjaHelp />
        <FlaskProject />
        <ReactInstall />
        <TailwindReact />
      </main>
    </div>
  );
}

export default App;
