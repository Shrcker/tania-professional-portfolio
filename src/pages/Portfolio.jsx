// Stand-in for the "Portfolio" page.
import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const placeHolder = "https://placehold.co/579x270";

  const [projects] = useState([
    {
      title: "Tisk-Tasker",
      description: "A simple scheduling web app that lets you create and track events",
      image:
        "https://private-user-images.githubusercontent.com/130515437/316686538-3d8f33ea-832f-44cd-9cc8-b9fd52e22442.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkyNTY1MzYsIm5iZiI6MTcxOTI1NjIzNiwicGF0aCI6Ii8xMzA1MTU0MzcvMzE2Njg2NTM4LTNkOGYzM2VhLTgzMmYtNDRjZC05Y2M4LWI5ZmQ1MmUyMjQ0Mi5QTkc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYyNFQxOTEwMzZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMTUyYzQ4NmJmMmY2YmJmODhiM2EyOTA0YzI5N2NmYjMzMDU0Nzk4OTkyOTc4ZDgwOWVjMDFlZmQxYTUwMWIzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.5eWRewAKgS48fvbOd6nUp_GW2spycASrpqPcoJGDH7U",
      deployLink: "https://shrcker.github.io/tisk-tasker",
      gitLink: "https://github.com/Shrcker/Tisk-Tasker?tab=readme-ov-file",
    },
    {
      title: "Guesser Gallow",
      description: "An automated game of Hangman that gives you a random word to guess.",
      image:
        "https://github.com/Shrcker/Guesser-Gallow/raw/main/public/resources/gallow-screen.png",
      deployLink: "https://guesser-gallows-04ed44eee1bd.herokuapp.com/",
      gitLink: "https://github.com/Shrcker/Guesser-Gallow",
    },
    {
      title: "Employee Manager",
      description: "SQL Database tracker and editor for tracking business employees.",
      image: placeHolder,
      deployLink: "https://github.com/Shrcker/Employee-Manager",
      gitLink: "https://github.com/Shrcker/Employee-Manager",
    },
    {
      title: "Logo Generator",
      description: "In console engine that produces vector based images in .svg format",
      image: placeHolder,
      deployLink: "https://github.com/Shrcker/Logo-Generator",
      gitLink: "https://github.com/Shrcker/Logo-Generator",
    },
    {
      title: "Tech Board",
      description:
        "In-progress blog for sharing ideas and thoughts on the tech industry.",
      image: "https://github.com/Shrcker/The-Tech-Board/raw/main/images/blog-screen.png",
      deployLink: "https://the-tech-board-ee3d9cb05afc.herokuapp.com/",
      gitLink: "https://github.com/Shrcker/The-Tech-Board",
    },
    {
      title: "myPass",
      description:
        "In-progress password generation site to be updated with more substansive UI",
      image: "https://github.com/Shrcker/myPass/raw/main/assets/images/screenshot.png",
      deployLink: "https://shrcker.github.io/tania-javascript-hw/",
      gitLink: "https://github.com/Shrcker/myPass",
    },
  ]);

  return (
    <>
      <div className="project">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={"project" + index} />
        ))}
      </div>
    </>
  );
}
