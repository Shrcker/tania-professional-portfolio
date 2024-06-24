export default function ProjectCard({ project }) {
  const { title, description, image, deployLink, gitLink } = project;
  const imageSize = [579, 270];

  return (
    <div className="card">
      <img src={image} alt={title} width={imageSize[0]} height={imageSize[1]} />
      <div className="cardBody">
        <h5>{title}</h5>
        <p>{description}</p>
        <a href={deployLink}>Site Link</a>
        <a href={gitLink}>GitHub Link</a>
      </div>
    </div>
  )
}
