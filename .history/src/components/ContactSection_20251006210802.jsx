import { Mail } from "lucide-react"

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In 
          <span className="text-primary">Touch</span>
        </h3>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          If you have any questions or just want to say hi, feel free to reach out!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="text-primary h-6 w-6"/>{" "}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:renzosalosagcol@outlook.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >renzosalosagcol@outlook.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="text-primary h-6 w-6"/>{" "}
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+19492678023"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >+1 (949) 267-8023</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="text-primary h-6 w-6"/>{" "}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:renzosalosagcol@outlook.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >renzosalosagcol@outlook.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}