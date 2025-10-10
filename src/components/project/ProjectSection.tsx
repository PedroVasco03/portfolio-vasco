import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Button from "../UI/Button";

export default function ProjectsSection() {
  return (
    <section className="grid md:grid-cols-3 gap-8 px-4 md:px-10">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-[#00191E] rounded-2xl shadow p-4 hover:shadow-lg transition flex flex-col"
        >
          <div className="relative w-full h-48">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <h3 className="text-xl font-bold mt-4">{project.title}</h3>
          <small className="text-[#5CF28E] mb-2">{project.tecnologia}</small>
          <p className="text-gray-400 mt-2">{project.description}</p>

          {/* Botões fixos no fundo */}
          <div className="flex gap-2 mt-auto pt-4 justify-end">
            {project.url && (
              <Link href={project.url} target="_blank">
                <Button variant="primary">Visitar</Button>
              </Link>
            )}
            {project.repo && (
              <Link href={project.repo} target="_blank">
                <Button variant="secondary">GitHub</Button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
