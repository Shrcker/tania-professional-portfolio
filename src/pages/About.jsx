// Stand-in for the "About Me" page.
import devAvatar from '../assets/dev-avatar.png';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={devAvatar} alt="Tania, this site's developer" />
      <p>
        I am an up and coming web and application front end developer who mostly
        works in JavaScript and SQL while learning React, MongoDB, and C#.
        I was born in New York City, grew up in Brooklyn while attending High School
        in Manhattan, and graduated with a Bachelor`&apos;`s degree in Creative Writing
        from SUNY Purchase in White Plains, New York. I currently live in Yellow Springs
        Ohio where I hope to start working as a professional Fullstack Developer with the
        Ohio State University Coding Boot Camp Program. I also dabble in game`&apos;`s development!
      </p>
    </div>
  );
}
