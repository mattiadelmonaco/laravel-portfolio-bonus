import axios from "../api/axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import SingleProjectComp from "../components/SingleProjectComp";

export default function SingleProjectPage() {
  const { id } = useParams();

  const [project, setProject] = useState({});

  const fetchProject = () => {
    axios.get(`${import.meta.env.VITE_BE_URL}/${id}`).then((res) => {
      //   console.log(project);
      setProject(res.data.data);
    });
  };

  useEffect(() => fetchProject(), [id]);

  return (
    <>
      <h1 className="text-white text-4xl text-center py-7">
        Maggiori informazioni sul progetto
      </h1>
      <div className="py-5">
        <SingleProjectComp project={project} />
      </div>
    </>
  );
}
