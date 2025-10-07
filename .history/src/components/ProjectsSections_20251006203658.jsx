
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
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span></h2>
      </div>
    </section>
  )
}