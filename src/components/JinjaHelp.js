function JinjaHelp() {

  return (
    <section>
      {/* title */}
        <h1 className="title">
          <a href="https://jinja.palletsprojects.com/en/3.1.x/">jinja</a> help
        </h1>

        {/* ----------------- list length ------------------------- */}
        <div className="chunk">
          <p className="instruction">get list length:</p>
          <div>
            <p className="filename">index.html</p>
            <div className="code">
              <p>&lt;p&gt; [% list | length %] &lt;/p&gt;</p>
          </div>
          </div>
        </div>
    </section>
  );
}
export default JinjaHelp;


