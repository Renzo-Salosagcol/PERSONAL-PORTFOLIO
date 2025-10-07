
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

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my notable projects that showcase my skills and expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-2 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}