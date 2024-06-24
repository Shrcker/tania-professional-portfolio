// Stand-in for the "Resume" page
import devResume from "../assets/tania-resume-2024.png";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>Howdy, here is a collection of my past work experience and proficiencies:</p>
      <img
        src={devResume}
        alt="Resumé of the site's developer"
        width="544"
        height="704"
      />
      <br />
      <a href={devResume} download="tania-resume-2024" target="_blank">
        <button type="button">Download</button>
      </a>
    </div>
  );
}
