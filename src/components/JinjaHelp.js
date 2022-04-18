function JinjaHelp() {
  return (
    <div className="flex flex-row">
      {/* ----------------- basic ------------------------- */}
      <div className="box">
        <h1 className="title">
          <a href="https://jinja.palletsprojects.com/en/3.1.x/">jinja</a> help
        </h1>
        {/* list length */}
        {/* config */}
        <div className="chunk">
          <p>list length</p>
          <div className="file">
            <p className="filename">index.html</p>
            <div className="code">
              <p> &lt;p&gt; [% list | length %] (p)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default JinjaHelp;
