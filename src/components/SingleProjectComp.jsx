export default function SingleProjectComp({ project }) {
  console.log(project);
  return (
    <>
      <div className="bg-neutral-300 py-4 px-6 rounded-xl space-y-5">
        <h1>
          Titolo progetto: <strong className="text-3xl">{project?.name}</strong>
        </h1>

        {project.image && (
          <div className="max-w-[300px]">
            <img
              src={`${import.meta.env.VITE_BE_IMG_URL}${project?.image}`}
              alt={`immagine per progetto "${project?.name}"`}
              className="rounded-lg"
            />
          </div>
        )}
        <div>
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
        </div>
        <div>
          <h5 className="mb-1">Tecnologie utilizzate: </h5>
          <ul className="flex gap-2 flex-wrap text-white font-bold">
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
        </div>

        <div>
          <h5>
            <strong>Breve descrizione del progetto:</strong>
          </h5>
          <p>{project.summary}</p>
        </div>
      </div>

      <div className="flex justify-self-center my-10">
        <a
          href="/projects"
          className="text-white bg-slate-400 px-4 py-2 rounded-xl transition-all hover:scale-110 hover:transition-all "
        >
          Torna all'elenco dei progetti
        </a>
      </div>
    </>
  );
}
