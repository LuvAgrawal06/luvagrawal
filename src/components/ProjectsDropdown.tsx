
import React from "react";
import { Link } from "react-router-dom";

const sampleProjects = [
  { label: "Task Manager App", href: "/project/1" },
  { label: "Portfolio Website", href: "/project/2" },
  { label: "E-Commerce Dashboard", href: "/project/3" },
];

const ProjectsDropdown = ({ closeDropdown }: { closeDropdown: () => void }) => (
  <ul className="w-full">
    {sampleProjects.map((proj) => (
      <li key={proj.href}>
        <Link
          to={proj.href}
          className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100"
          onClick={closeDropdown}
        >
          {proj.label}
        </Link>
      </li>
    ))}
  </ul>
);

export default ProjectsDropdown;
