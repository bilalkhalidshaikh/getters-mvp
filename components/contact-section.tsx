"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Send, Sparkles, CheckCircle, ArrowRight } from "lucide-react"
import { useLanguageContext } from "@/components/language-provider"

export function ContactSection() {
  const { translations, isLoaded } = useLanguageContext()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isLoaded) return null

  const projectTypes = translations.services?.items?.map((s: any) => s.title) || [
    "AI Agent Development",
    "Process Automation",
    "Data & Analytics",
    "Full-Stack Engineering",
    "Creative AI Solutions",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("https://formsubmit.co/hello@getters.ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", company: "", projectType: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#C9A86A]/10 border border-[#C9A86A]/30 rounded-full text-sm text-[#C9A86A] mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            {translations.audit?.title || "Get Started"}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            {translations.audit?.title || "Get Your Free AI Audit"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {translations.audit?.subtitle ||
              "Discover how autonomous AI can transform your business. Let's discuss your unique challenges."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-[#C9A86A]/20 bg-card/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">{translations.audit?.title || "Start Your AI Journey"}</CardTitle>
                <CardDescription>
                  {translations.audit?.subtitle || "Fill out the form below and we'll get back to you within 24 hours."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-16 h-16 text-[#C9A86A] mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your request. Our team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          {translations.audit?.form?.name || "Full Name"} *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="bg-background/50 border-[#C9A86A]/20 focus:border-[#C9A86A]/50 focus:ring-[#C9A86A]/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          {translations.audit?.form?.email || "Email Address"} *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          required
                          className="bg-background/50 border-[#C9A86A]/20 focus:border-[#C9A86A]/50 focus:ring-[#C9A86A]/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        {translations.audit?.form?.company || "Company Name"}
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="bg-background/50 border-[#C9A86A]/20 focus:border-[#C9A86A]/50 focus:ring-[#C9A86A]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        {translations.audit?.form?.projectType || "Project Type"}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((type: string) => (
                          <Badge
                            key={type}
                            variant={formData.projectType === type ? "default" : "outline"}
                            className={`cursor-pointer transition-all duration-200 ${
                              formData.projectType === type
                                ? "bg-[#C9A86A] text-background border-[#C9A86A]"
                                : "border-[#C9A86A]/20 hover:bg-[#C9A86A]/10 hover:border-[#C9A86A]/40 text-foreground"
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
                        {translations.audit?.form?.details || "Project Details"} *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, challenges, and goals..."
                        rows={4}
                        required
                        className="bg-background/50 border-[#C9A86A]/20 focus:border-[#C9A86A]/50 focus:ring-[#C9A86A]/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#C9A86A] hover:bg-[#C9A86A]/90 text-background font-medium transition-all duration-200 shadow-lg hover:shadow-[#C9A86A]/50 hover:shadow-xl"
                    >
                      {translations.audit?.form?.submit || "Get Free Audit"}
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="border-[#C9A86A]/20 bg-card/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">{translations.contact?.title || "Get in Touch"}</CardTitle>
                <CardDescription>Multiple ways to reach our team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#C9A86A]/10 rounded-lg">
                    <Mail className="w-5 h-5 text-[#C9A86A]" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{translations.contact?.email || "hello@getters.ai"}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#C9A86A]/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#C9A86A]" />
                  </div>
                  <div>
                    <p className="font-medium">{translations.contact?.locations?.[0]?.city || "Milan"}</p>
                    <p className="text-sm text-muted-foreground">
                      {translations.contact?.locations?.[0]?.address || "Via della Moscova, Milan"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#C9A86A]/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#C9A86A]" />
                  </div>
                  <div>
                    <p className="font-medium">{translations.contact?.locations?.[1]?.city || "Karachi"}</p>
                    <p className="text-sm text-muted-foreground">
                      {translations.contact?.locations?.[1]?.address || "Remote Operations HQ"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="border-[#C9A86A]/20 bg-card/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A86A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">24-Hour Response</p>
                    <p className="text-sm text-muted-foreground">We'll get back to you within one business day</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A86A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Free Consultation</p>
                    <p className="text-sm text-muted-foreground">30-minute strategy session at no cost</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#C9A86A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Custom Proposal</p>
                    <p className="text-sm text-muted-foreground">Tailored solution with clear timeline and pricing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick CTA */}
            <Card className="border-[#C9A86A]/20 bg-gradient-to-br from-[#C9A86A]/10 to-[#C9A86A]/5">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Need Immediate Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">Schedule a call directly with our AI strategy team</p>
                <Button
                  variant="outline"
                  className="w-full border-[#C9A86A]/30 hover:bg-[#C9A86A]/10 hover:border-[#C9A86A]/50 bg-transparent text-foreground"
                >
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
