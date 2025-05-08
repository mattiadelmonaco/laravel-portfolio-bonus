import { useState, useEffect } from "react";
import axios from "../api/axios";
import ProjectsComp from "../components/ProjectsComp";

export default function ProjectListPage() {
  const [projectList, setProjectList] = useState([]);

  const fetchProjectList = () => {
    axios.get(import.meta.env.VITE_BE_URL).then((res) => {
      setProjectList(res.data.data);
    });
  };

  useEffect(() => fetchProjectList(), []);

  return (
    <>
      <h1 className="text-white text-7xl text-center py-7">
        Lista dei Progetti
      </h1>
      <ProjectsComp projectList={projectList} />
    </>
  );
}
