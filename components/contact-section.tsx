"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle, ArrowRight } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  })

  const projectTypes = [
    "AI Agent Development",
    "Full-Stack Engineering",
    "Data & Analytics",
    "Process Automation",
    "Creative AI Solutions",
    "Custom Solution",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Get Started
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Ready to Transform{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Your Business?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Let's discuss how autonomous AI can revolutionize your operations. Get a free consultation and custom
            strategy session.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Start Your AI Journey</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours with a custom strategy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Project Type</label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <Badge
                          key={type}
                          variant={formData.projectType === type ? "default" : "outline"}
                          className={`cursor-pointer transition-all duration-200 ${
                            formData.projectType === type
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-primary/10 hover:border-primary/40"
                          }`}
                          onClick={() => setFormData((prev) => ({ ...prev, projectType: type }))}
                        >
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, challenges, and goals..."
                      rows={4}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground pulse-glow"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Get in Touch</CardTitle>
                <CardDescription>Multiple ways to reach our team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">hello@getters.ai</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">24-Hour Response</p>
                    <p className="text-sm text-muted-foreground">We'll get back to you within one business day</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Free Consultation</p>
                    <p className="text-sm text-muted-foreground">30-minute strategy session at no cost</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Custom Proposal</p>
                    <p className="text-sm text-muted-foreground">Tailored solution with clear timeline and pricing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick CTA */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Need Immediate Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">Schedule a call directly with our AI strategy team</p>
                <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10 bg-transparent">
                  Book Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
