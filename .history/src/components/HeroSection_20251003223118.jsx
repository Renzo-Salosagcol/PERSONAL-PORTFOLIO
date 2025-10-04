

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="opacity-0 text-primary animate-fade-in-delay-1"> Renzo</span>
            <span className="opacity-0 text-gradient ml-2 animate-fade-in-delay-2">Salosagcol</span>
          </h1>
          <p className="text-lg md-texl-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Include your paragraph text here. This is a brief introduction about yourself, your skills, and what you do.
          </p>
        </div>
      </div>
    </section>
  )
}