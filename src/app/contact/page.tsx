"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
          Get in Touch
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-foreground/80">
          I'm excited to hear from you. Fill out the form below or use the contact details to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell me how I can help" rows={5} />
              </div>
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
            <h2 className="text-2xl font-bold font-headline">Contact Information</h2>
            <div className="space-y-4 text-lg">
                <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 mt-1 text-primary"/>
                    <div>
                        <h3 className="font-semibold">Phone</h3>
                        <a href="tel:+1234567890" className="text-foreground/80 hover:text-primary transition-colors">+1 (234) 567-890</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 mt-1 text-primary"/>
                     <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:contact@lifecoach.com" className="text-foreground/80 hover:text-primary transition-colors">contact@lifecoach.com</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 mt-1 text-primary"/>
                     <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-foreground/80">123 Wellness St, Serenity City, 12345</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
