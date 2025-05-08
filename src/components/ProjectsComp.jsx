import { Link } from "react-router";

export default function ProjectsComp({ projectList }) {
  console.log(projectList);
  return (
    <ul className="grid grid-cols-2 py-5 gap-5">
      {projectList.map((project) => {
        return (
          <li
            key={project.id}
            className="bg-neutral-300 p-3 flex flex-col gap-2"
          >
            <h2 className="bg-slate-400 px-2 py-1">
              Titolo progetto: <strong>{project.name}</strong>
            </h2>
            <h3>
              Realizzato per: <strong>{project.client}</strong>
            </h3>
            <h5>
              Periodo di realizzazione: <strong>{project.start_period}</strong>{" "}
              - <strong>{project.end_period}</strong>
            </h5>
            <h5>
              Tipo di progetto: <strong>{project.type.name}</strong>
            </h5>
            <Link
              to="/projects/{id}"
              className="bg-blue-300 px-2 py-1 rounded-lg self-center mt-4"
            >
              Maggiori informazioni
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
