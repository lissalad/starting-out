function ReactInstall() {

  return (
    <div className="flex flex-col">
      {/* ----------------- basic ------------------------- */}
      <div className="box">
        <h1 className="title">basic <a href="https://reactjs.org/">React</a></h1>
        {/* create */}
        <div className="chunk">
          <p>create app</p>
          <div className="terminal">
            <p>npx create-react-app PROJECT-NAME</p>
            <p>cd PROJECT-NAME</p>
          </div>
        </div>

        {/* run */}
        <div className="chunk">
          <p>run with</p>
          <div className="terminal">
            <p>npm start</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}
export default ReactInstall;
