import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hello, I'm</span>
            <span className="opacity-0 text-primary animate-fade-in-delay-1"> Renzo</span>
            <span className="opacity-0 text-gradient ml-2 animate-fade-in-delay-2">Salosagcol</span>
          </h1>
          <p className="text-lg md-texl-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Include your paragraph text here. This is a brief introduction about yourself, your skills, and what you do.
          </p>

          <div>
            <a href="#projects" className="cosmic-button opacity-0 animate-fade-in-delay-4">
              View My Projects
            </a>
          </div>
        </div>

        <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
          <ArrowDown className="h-5 w-5 text-primary" />

        </div>

      </div>
    </section>
  )
}