import "./App.css";
import Header from "./components/Header";
import JinjaHelp from "./components/JinjaHelp";
import ReactInstall from "./components/ReactInstall";
import FlaskProject from "./components/FlaskProject";
import TailwindReact from "./components/TailwindReact";
import GithubRepo from "./components/GithubRepo";
import EscapeChar from "./components/EscapeChar";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="">
        {/* <EscapeChar /> */}
        <GithubRepo />
        <JinjaHelp />
        <FlaskProject />
        <ReactInstall />
        <TailwindReact />
      </main>
    </div>
  );
}

export default App;
