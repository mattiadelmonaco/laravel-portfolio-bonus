import { useState, useEffect } from "react";
import axios from "../api/axios";

export default function ProjectListPage() {
  const [projectList, setProjectList] = useState([]);

  const fetchProjectList = () => {
    axios.get(import.meta.env.VITE_BE_URL).then((res) => {
      setProjectList(res.data);
    });
  };

  useEffect(() => fetchProjectList, []);

  console.log(projectList);

  return <></>;
}
