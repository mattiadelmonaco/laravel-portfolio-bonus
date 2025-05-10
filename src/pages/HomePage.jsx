export default function Homepage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-white text-5xl text-center py-7">
          Benvenuto nel tuo portfolio!
        </h1>
        <img
          src="images/maccio2.jpg"
          alt="immagine di benvenuto"
          className="max-w-[800px] rounded-xl"
        />
        <a
          href="/projects"
          className="text-white text-2xl bg-slate-400 px-4 py-2 rounded-xl transition-all hover:scale-110 hover:transition-all my-10"
        >
          Vai ai tuoi progetti
        </a>
      </div>
    </>
  );
}
