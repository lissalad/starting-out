function ReactInstall() {

  return (
    <section>
        {/* title */}
        <h1 className="title">basic <a href="https://reactjs.org/">React</a></h1>
        
        {/* ----------------- app ------------------------- */}
        <div className="chunk">
          <p className="instruction">create app:</p>
          <div className="terminal">
            <p>npx create-react-app PROJECT-NAME</p>
            <p>cd PROJECT-NAME</p>
          </div>

        {/* ----------------- run ------------------------- */}
        <div className="chunk">
          <p className="instruction">run with:</p>
          <div className="terminal">
            <p>npm start</p>
          </div>
        </div>
      </div>

      
    </section>
  );
}
export default ReactInstall;
