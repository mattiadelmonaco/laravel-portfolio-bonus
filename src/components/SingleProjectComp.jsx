export default function SingleProjectComp({ project }) {
  console.log(project);
  return (
    <div className="bg-neutral-300 p-3">
      <h2>
        Titolo progetto: <strong>{project?.name}</strong>
      </h2>
      <h3>
        Realizzato per: <strong>{project?.client}</strong>
      </h3>
      <h5>
        Periodo di realizzazione: <strong>{project?.start_period}</strong> -{" "}
        <strong>{project.end_period}</strong>
      </h5>
      <h5>
        Tipo di progetto: <strong>{project?.type?.name}</strong>
      </h5>
      <h5>Tecnologie utilizzate: </h5>
      <ul className="flex gap-2 flex-wrap">
        {project?.technologies?.map((technology) => {
          //   console.log(technology);
          return (
            <li
              key={technology.id}
              className="px-2 py-1 rounded-md"
              style={{ backgroundColor: technology.color }}
            >
              {technology.name}
            </li>
          );
        })}
      </ul>
      <h5>Descrizione del progetto:</h5>
      <p>{project.summary}</p>
    </div>
  );
}
