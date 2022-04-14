function TailwindReact() {

  return (
    <div className="flex flex-col ">
      <div className="box">
        {/* ------- tailwind ---------- */}
        <h1 className="title">
          add <a href="https://tailwindcss.com/">tailwind</a>
        </h1>

        {/* install */}
        <div className="chunk">
          <p>install tailwind:</p>
          <div className="terminal">
            <p>npm install -D tailwindcss postcss autoprefixer</p>
            <p>npx tailwindcss init -p</p>
          </div>
        </div>

        {/* config */}
        <div className="chunk">
          <p>edit config file so it can use tailwind in all files</p>
          <div className="file">
            <p className="filename">tailwind.config.js</p>
            <div className="code">
              <p>module.exports = CURLY</p>
              <p className="indent-4">content: [</p>
              <p className="indent-8">"./src/**/*.CURLYjs,jsx,ts,tsxCURLY",</p>
              <p className="indent-4">],</p>
              <p className="indent-4">theme: CURLY </p>
              <p className="indent-8">extend: CURLY CURLY,</p>
              <p className="indent-4">CURLY,</p>
              <p className="indent-4">plugins: [],</p>
              <p>CURLY</p>
            </div>
          </div>
        </div>

        {/* css file */}
        <div className="chunk">
          <p>add to top of css file</p>
          <div className="file">
            <p className="filename">index.css</p>
            <div className="code">
              <p>@tailwind base;</p>
              <p>@tailwind components;</p>
              <p>@tailwind utilities;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TailwindReact;
