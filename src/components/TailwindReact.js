function TailwindReact() {
  const config = `module.exports = {
    content: 
      ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };`;

  return (
    <section>
      {/* title */}
      <h1 className="title">
        add <a href="https://tailwindcss.com/">tailwind</a> to react
      </h1>

      {/* ----------------- tailwind ------------------------- */}
      <div className="chunk">
        <p className="instruction">install tailwind</p>
        <div className="terminal">
          <p>npm install -D tailwindcss postcss autoprefixer</p>
          <p>npx tailwindcss init -p</p>
        </div>
      </div>

      {/* ----------------- config ------------------------- */}
      <div className="chunk">
        <p className="instruction">
          edit config file so it can use tailwind in all files
        </p>
        <div className="file">
          <p className="filename">tailwind.config.js</p>
          <div className="code">
            <pre>{config}</pre>
          </div>
        </div>
      </div>

      {/* ----------------- css file ------------------------- */}
      <div className="chunk">
        <p className="instruction">add to top of css file</p>
        <div className="file">
          <p className="filename">index.css</p>
          <div className="code">
            <p>@tailwind base;</p>
            <p>@tailwind components;</p>
            <p>@tailwind utilities;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TailwindReact;
