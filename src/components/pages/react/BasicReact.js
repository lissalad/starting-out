import { terminal } from "../../styles" 

function BasicReact() {
  const chunk = "flex flex-col text-left space-y-[10px]";
  // const terminal =
    // "flex flex-col text-left bg-black/90 max-w-[400px] min-w-fit text-lime-400 p-3 space-y-2 rounded-[3px] font-['Courier New']";
  const code =
    "flex flex-col text-left bg-black/90 max-w-[400px] min-w-fit text-sky-200 p-3 space-y-1 rounded-[3px] rounded-tl-none font-['Courier New']";
  const fileName =
    "text-sky-100 bg-black/60 px-2 py-1 w-fit rounded-t text-left";
  const file = "flex flex-col";
  const title = "text-2xl -mb-4";

  return (
    <div className="flex flex-row w-full">
      {/* ----------------- basic ------------------------- */}
      <div className="box">
        <h1 className="title">plain <a href="https://reactjs.org/">React</a></h1>
        {/* create */}
        <div className="chunk">
          <p>create app:</p>
          <div className="terminal">
            <p>npx create-react-app PROJECT-NAME</p>
            <p>cd PROJECT-NAME</p>
          </div>
        </div>

        {/* run */}
        <div className="chunk">
          <p>run with:</p>
          <div className="terminal">
            <p>npm start</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}
export default BasicReact;
