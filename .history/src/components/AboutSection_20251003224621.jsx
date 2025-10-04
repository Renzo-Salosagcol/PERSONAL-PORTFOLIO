

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3>Passionate Full Stack Web Developer</h3>
            <p className="text-muted-foreground">Years, Experiences, technology specialization</p>
            <p className="text-muted-foreground">What are you passionate about?</p>
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
  )
}