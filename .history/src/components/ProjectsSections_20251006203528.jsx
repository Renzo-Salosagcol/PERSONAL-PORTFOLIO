
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One.",
    imageUrl: "/projects/dummy_photo.jpg",
    tags: ["React", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two.",
    imageUrl: "/projects/dummy_photo.jpg",
    tags: ["React", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three.",
    imageUrl: "/projects/dummy_photo.jpg",
    tags: ["React", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  }
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      Projects
    </section>
  )
}