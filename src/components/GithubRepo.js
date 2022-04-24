import { useState, useRef } from "react";

function GithubRepo() {
  const [username, setUsername] = useState("username");
  const [repo, setRepo] = useState("repoName");
  const userRef = useRef();
  const repoRef = useRef();

  function getLink() {
    setUsername(userRef.current.value);
    setRepo(repoRef.current.value);
  }

  return (
    <section>
      {/* title */}
      <h1 className="title">
        new <a href="https://github.com/">github</a> repo
      </h1>

      {/* ----------------- customize ------------------------- */}
      <div className="form chunk">
        <div>
          <label type="submit"> username</label>
          <input ref={userRef} type="text" name="term"></input>
        </div>
        <div>
          <label type="submit">repo name</label>
          <input ref={repoRef} type="text" name="term"></input>
        </div>
        <button onClick={getLink}>enter</button>
      </div>

      {/* ----------------- terminal paste ------------------------- */}
      <div className="chunk">
        <p className="instruction">in terminal enter:</p>
        <div className="terminal">
          <p>git init</p>
          <p>git add .</p>
          <p>git commit -m "first"</p>
          <p>git branch -M main</p>
          <p>
            git git remote add origin <br></br>https://github.com/{username}/ 
            {repo}.git
          </p>
          <p>git push -u origin main</p>
        </div>
      </div>
    </section>
  );
}
export default GithubRepo;

// className="instruction"