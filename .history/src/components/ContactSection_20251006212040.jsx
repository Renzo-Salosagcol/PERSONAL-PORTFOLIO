import { Mail, Phone, Map, Linkedin, Instagram, Facebook, Twitter } from "lucide-react"

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
                  <Phone className="text-primary h-6 w-6"/>{" "}
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
                  <Map className="text-primary h-6 w-6"/>{" "}
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >Los Angeles, CA, USA</a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/renzo-salosagcol/" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="https://www.facebook.com/renzo.salosagcol" target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/renzosalosagcol/" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>

              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Please enter your name..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}