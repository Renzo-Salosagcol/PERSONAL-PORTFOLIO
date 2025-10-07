
// Dummy Data for Skills
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
    <section id="skills" className="py-24 px-4 relative">
      Skills
    </section>
  )
}