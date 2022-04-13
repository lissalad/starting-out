import { terminalStyling } from "../styles" 

function InstallReact() {
  const box =
    "flex flex-col space-y-9 border-2 border-black/20 px-5 py-3 rounded m-5 h-fit";
  const chunk = "flex flex-col text-left space-y-[10px]";
  const terminal =
    "flex flex-col text-left bg-black/90 max-w-[400px] min-w-fit text-lime-400 p-3 space-y-2 rounded-[3px] font-['Courier New']";
  const code =
    "flex flex-col text-left bg-black/90 max-w-[400px] min-w-fit text-sky-200 p-3 space-y-1 rounded-[3px] rounded-tl-none font-['Courier New']";
  const fileName =
    "text-sky-100 bg-black/60 px-2 py-1 w-fit rounded-t text-left";
  const file = "flex flex-col";
  const title = "text-2xl -mb-4";

  return (
    <div className="flex flex-row w-full">
      {/* ----------------- basic ------------------------- */}
      <div className={box}>
        <h1 className={title}>starting out: <a href="https://reactjs.org/">React</a></h1>
        {/* create */}
        <div className={chunk}>
          <p>create app:</p>
          <div className={terminal}>
            <p>npx create-react-app PROJECT-NAME</p>
            <p>cd PROJECT-NAME</p>
          </div>
        </div>

        {/* run */}
        <div className={chunk}>
          <p>run with:</p>
          <div className={terminal}>
            <p>npm start</p>
          </div>
        </div>
      </div>

      {/* ----------------- MORE ------------------------- */}
      <div className="flex flex-col ">
        {/* <h2>then do more</h2> */}
        <div className={box}>
          {/* ------- tailwind ---------- */}
          <h1 className={title}>add <a href="https://tailwindcss.com/">tailwind</a></h1>

          {/* install */}
          <div className={chunk}>
            <p>install tailwind:</p>
            <div className={terminal}>
              <p>npm install -D tailwindcss postcss autoprefixer</p>
              <p>npx tailwindcss init -p</p>
            </div>
          </div>

          {/* config */}
          <div className={chunk}>
            <p>edit config file so it can use tailwind in all files</p>
            <div className={file}>
              <p className={fileName}>tailwind.config.js</p>
              <div className={code}>
                <p>module.exports = CURLY</p>
                <p className="indent-4">content: [</p>
                <p className="indent-8">
                  "./src/**/*.CURLYjs,jsx,ts,tsxCURLY",
                </p>
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
          <div className={chunk}>
            <p>add to top of css file</p>
            <div className={file}>
              <p className={fileName}>index.css</p>
              <div className={code}>
                <p>@tailwind base;</p>
                <p>@tailwind components;</p>
                <p>@tailwind utilities;</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default InstallReact;
