export default function Project({project}) {
  return (
    <div
      className="project"
      style={{
        backgroundImage: `linear-gradient(to bottom, #343a40, ${project.color} 95%, white)`,
      }}
    >
      <div className="project-img">
        <img src={`img/${project.img}.png`} alt={project.name} />
      </div>
      <div className="project-text">
        <h4 className="project-title">{project.name}</h4>
        <p className="project-description">{project.description}</p>
        <a href={"#"} style={{ color: project.color }}>
          Visit
        </a>
      </div>
    </div>
  );
}
