function FlaskProject() {
  const starter = "<!DOCTYPE html> ... </html>"

  return (
    <section>
        {/* title */}
        <h1 className="title">
          start a{" "}
          <a href="https://flask.palletsprojects.com/en/2.1.x/">Flask</a>{" "}
          project
        </h1>

      {/* ----------------- environment ------------------------- */}
      <div className="chunk">
          <p className="instruction">set up the environment:</p>
          <div className="terminal">
            <p>python3 -m venv venv</p>
            <p>source venv/bin/activate</p>
          </div>
        </div>

        {/* ----------------- flask ------------------------- */}
        <div className="chunk">
          <p className="instruction">install flask:</p>
          <div className="terminal">
            <p>pip3 install flask</p>
          </div>
        </div>

        {/* ----------------- requirements ----------------------- */}
        <div className="chunk">
          <p className="instruction">freeze requirements:</p>
          <div className="terminal">
            <p>pip3 freeze &gt; requirements.txt</p>
          </div>
        </div>

        {/* ----------------- app.py ------------------------- */}
        <div className="chunk">
          <p className="instruction">create app.py:</p>
          <div className="file">
            <p className="filename">app.py</p>
            <div className="code">
              <p>from flask import Flask, render_template</p>
              <p>app = Flask(__name__)</p>
              <br></br>
              <p> @app.route('/')</p>
              <p>def hello_world():</p>
              <p className="indent-4">return render_template('index.html')</p>
              <br></br>
              <p className="indent-4">if __name__ == "__main__":</p>
              <p> app.run(debug=True)</p>
            </div>
          </div>
        </div>

        {/* ----------------- templates ------------------------- */}
        <div className="chunk">
          <p className="instruction">inside new templates folder, create index.html:</p>

          <div className="file">
            <p className="filename">index.html</p>
            <div className="code">
              <pre>{starter}</pre>
            </div>
          </div>
        </div>

        {/* ----------------- run ------------------------- */}
        <div className="chunk">
          <p className="instruction">run:</p>
          <div className="terminal">
            <p>python3 app.py</p>
          </div>
        </div>
    </section>
  );
}

export default FlaskProject;
