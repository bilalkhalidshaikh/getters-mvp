import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Services: [
      { name: "AI Agent Development", href: "#services" },
      { name: "Full-Stack Engineering", href: "#services" },
      { name: "Data & Analytics", href: "#services" },
      { name: "Process Automation", href: "#services" },
      { name: "Creative AI Solutions", href: "#services" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" },
    ],
    Resources: [
      { name: "AI Readiness Guide", href: "#resources" },
      { name: "ROI Calculator", href: "#resources" },
      { name: "Whitepapers", href: "#resources" },
      { name: "Webinars", href: "#resources" },
      { name: "Documentation", href: "#resources" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Security", href: "#security" },
    ],
  }

  return (
    <footer className="bg-card/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/images/getters-logo.png" alt="Getters AI" width={40} height={40} className="w-10 h-10" />
                <span className="text-xl font-bold text-foreground">Getters</span>
              </Link>

              <p className="text-muted-foreground leading-relaxed">
                Next-generation digital AI agency designing, building, and deploying autonomous systems that drive
                revenue and eliminate operational waste.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">hello@getters.ai</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                    <h3 className="font-semibold text-foreground mb-4">{category}</h3>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">
                Get the latest insights on AI automation and digital transformation.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button size="sm" className="bg-primary hover:bg-primary/90 shrink-0">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2024 Getters AI Agency. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Built with autonomous AI systems</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>System Status: Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
