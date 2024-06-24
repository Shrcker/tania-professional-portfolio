export default function ProjectCard({ project }) {
  const { title, description, image, deployLink, gitLink } = project;

  return (
    <div className="card">
      <img src={image} alt={title}/>
      <div className="cardBody">
        <h5>{title}</h5>
        <p>{description}</p>
        <a href={deployLink}>Site Link</a>
        <a href={gitLink}>GitHub Link</a>
      </div>
    </div>
  )
}
