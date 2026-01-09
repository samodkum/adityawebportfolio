'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Menu, X, ExternalLink, Star, Code, Palette, Rocket, Bug, Lightbulb,
  Search, ShoppingBag, Scissors, Stethoscope, Utensils, CheckCircle,
  Mail, Phone, MapPin, Shield, MessageSquare, Mic, Info, Plus, Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '', business: '', phone: '', email: '', websiteType: '',
    budget: '', timeline: '', details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    { icon: Utensils, title: 'Restaurant & Cafe', description: 'Beautiful designs with online ordering and reservations' },
    { icon: Scissors, title: 'Salon & Beauty', description: 'Elegant designs with booking systems' },
    { icon: Heart, title: 'Pet Services', description: 'Modern pet grooming websites with booking' },
    { icon: Stethoscope, title: 'Healthcare', description: 'Professional designs with appointment booking' },
    { icon: Search, title: 'SEO-Optimized', description: 'Built for visibility and fast loading' }
  ];

  const projects = [
    { title: 'Aadaram Cafe', category: 'Restaurant', description: 'Modern cafe website with menu showcase', link: 'https://aadaramcafe.vercel.app/' },
    { title: 'Ultimutt Pet Grooming', category: 'Pet Services', description: 'Pet grooming with booking system', link: 'https://ultimutt.vercel.app/' },
    { title: 'Gritty Gaming Cafe', category: 'Gaming Cafe', description: 'Gaming cafe with booking system', link: 'https://grittygamingcafe.vercel.app/' },
    { title: 'Twelve7 Salon', category: 'Salon', description: 'Elegant salon with appointment booking', link: 'https://tweleve7salonsample.vercel.app/' },
    { title: 'InkThrive SEO', category: 'SEO Agency', description: 'Professional SEO agency website', link: 'https://inkthriveseo.vercel.app/' }
  ];

  const testimonials = [
    { name: 'Ravi Sharma', business: 'Aadaram Cafe', content: 'The website is beautiful, fast, and our online orders have tripled!', rating: 5 },
    { name: 'Emma Rodriguez', business: 'Ultimutt Pet Grooming', content: 'Our clients love the online booking system. Bookings increased by 40%!', rating: 5 },
    { name: 'Arjun Singh', business: 'Gritty Gaming Cafe', content: 'Perfect gaming vibe. Bookings increased significantly within the first week!', rating: 5 },
    { name: 'Sarah Johnson', business: 'Twelve7 Salon', content: 'Elegant design. The booking system streamlined our operations completely.', rating: 5 }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const message = `Hi! I'm interested in getting a website developed.\n\n*My Details:*\nName: ${formData.name}\nBusiness: ${formData.business}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\n*Project Details:*\nWebsite Type: ${formData.websiteType}\nBudget Range: ${formData.budget || 'Not specified'}\nTimeline: ${formData.timeline || 'Not specified'}\n\n*Requirements:*\n${formData.details}\n\nLooking forward to discussing this project with you!`;
    const whatsappURL = `https://wa.me/919315435356?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setFormData({ name: '', business: '', phone: '', email: '', websiteType: '', budget: '', timeline: '', details: '' });
    }, 1500);
  };

  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 border-b border-white/10' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-bold">
              Aditya Suryavanshi
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm hover:text-white/70 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Get Quote
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-b border-white/10"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 hover:bg-white/5"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Websites that bring<br />clients not clicks
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 mb-12"
          >
            Professional web development focused on real business results
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-white text-black font-semibold hover:bg-white/90 transition-all"
            >
              View Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-white hover:bg-white hover:text-black transition-all"
            >
              Start Project
            </button>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About</h2>
          <div className="space-y-6 text-lg text-white/70">
            <p>I specialize in creating high-performance websites that help businesses establish their digital presence and drive real results.</p>
            <p>With expertise in modern web technologies and user experience design, I transform ideas into powerful digital solutions that convert visitors into customers.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Recent Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 border-t border-white/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Get Started</h2>
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Name *</Label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-black border-white/20 focus:border-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Business *</Label>
                    <Input
                      required
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="bg-black border-white/20 focus:border-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Phone *</Label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-black border-white/20 focus:border-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Email *</Label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-black border-white/20 focus:border-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label>Website Type *</Label>
                    <Select value={formData.websiteType} onValueChange={(value) => setFormData({ ...formData, websiteType: value })}>
                      <SelectTrigger className="bg-black border-white/20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant/Cafe</SelectItem>
                        <SelectItem value="salon">Salon/Beauty</SelectItem>
                        <SelectItem value="pet">Pet Services</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Budget</Label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                      <SelectTrigger className="bg-black border-white/20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-15k">Under ₹15,000</SelectItem>
                        <SelectItem value="15k-30k">₹15,000-₹30,000</SelectItem>
                        <SelectItem value="30k+">₹30,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                      <SelectTrigger className="bg-black border-white/20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="2-weeks">2 weeks</SelectItem>
                        <SelectItem value="1-month">1 month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Project Details *</Label>
                  <Textarea
                    required
                    rows={5}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="bg-black border-white/20 focus:border-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-black font-semibold hover:bg-white/90 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>

                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-center text-white/70"
                    >
                      Redirecting to WhatsApp...
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Aditya Suryavanshi</h3>
              <p className="text-white/60 text-sm">Professional web development services</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>Restaurant Websites</li>
                <li>Salon Websites</li>
                <li>Pet Services</li>
                <li>Healthcare</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  adityasuryavanxi@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +91 9315435356
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
            © 2024 Aditya Suryavanshi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Card className="bg-white/5 border-white/10 hover:border-white/30 transition-all h-full">
        <CardContent className="p-6">
          <service.icon className="h-8 w-8 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
          <p className="text-white/60 text-sm">{service.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="group"
    >
      <Card className="bg-white/5 border-white/10 hover:border-white/30 transition-all h-full">
        <CardContent className="p-6">
          <Badge className="mb-4 bg-white/10 border-white/20">{project.category}</Badge>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-white/60 mb-4">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-white/70 transition-colors"
          >
            View Live <ExternalLink className="h-4 w-4" />
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
    >
      <Card className="bg-white/5 border-white/10 h-full">
        <CardContent className="p-6">
          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-white" />
            ))}
          </div>
          <p className="text-white/80 mb-6">{testimonial.content}</p>
          <div>
            <div className="font-semibold">{testimonial.name}</div>
            <div className="text-sm text-white/60">{testimonial.business}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Portfolio;
