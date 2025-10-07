
// Dummy Data for Skills Section
const skills = [
  {name: "HTML/CSS", level: 95, category: "Frontend"},
  {name: "JavaScript", level: 90, category: "Frontend"},
  {name: "React", level: 85, category: "Frontend"},
  {name: "Node.js", level: 80, category: "Backend"},
  {name: "Express", level: 75, category: "Backend"},
  {name: "MongoDB", level: 70, category: "Backend"},
  {name: "SQL", level: 65, category: "Backend"},
  {name: "Python", level: 60, category: "Backend"},
  {name: "Django", level: 55, category: "Backend"},
  {name: "Git", level: 50, category: "Tools"},
  {name: "Docker", level: 45, category: "Tools"},
  {name: "AWS", level: 40, category: "Tools"},
]


export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                     style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  )
}