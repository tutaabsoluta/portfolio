import { projects } from "../data/data"
import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
  return (
    <main className="max-w-5xl mx-auto flex flex-col gap-16">
        { projects.map( project => (
            <ProjectCard
                key={ project.id }
                name={ project.title }
                description={ project.description }
                url={ project.image }
                link={ project.link }
            />
        ) ) }
    </main>
  )
}
