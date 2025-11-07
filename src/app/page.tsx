'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Menu, X, ChevronDown, ExternalLink, Star, 
  Code, Palette, Rocket, Bug, Lightbulb, Search, 
  ShoppingBag, Scissors, Stethoscope, Utensils,
  CheckCircle, ArrowRight, Mail, Phone, MapPin,
  Github, Linkedin, Twitter, Globe, Zap, Shield,
  Clock, Award, TrendingUp, Users, Target,
  Smartphone, Tablet, Monitor, Wifi, Cloud,
  Database, Server, Cpu, HardDrive, Network
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
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    websiteType: '',
    budget: '',
    timeline: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'Process' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    {
      icon: Utensils,
      title: 'Restaurant & Cafe Websites',
      description: 'Beautiful, appetizing designs with online ordering and reservation systems',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Scissors,
      title: 'Salon & Beauty Websites',
      description: 'Elegant designs with booking systems and service showcases',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: Stethoscope,
      title: 'Medical & Healthcare Websites',
      description: 'Professional, trustworthy designs with appointment booking',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration and inventory management',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Search,
      title: 'SEO-Optimized Websites',
      description: 'Built for visibility with technical SEO and fast loading speeds',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Code,
      title: 'Custom Web Applications',
      description: 'Tailored solutions for unique business requirements',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const projects = [
    {
      title: 'Aadaram Cafe',
      category: 'Restaurant Website',
      description: 'Modern cafe website with menu showcase, location info, and contact system',
      features: ['Menu display', 'Location integration', 'Responsive layout', 'Modern UI'],
      technologies: ['React', 'Tailwind CSS', 'Responsive Design'],
      link: 'https://aadaramcafe.vercel.app/',
      color: 'from-orange-400 to-amber-600'
    },
    {
      title: 'Aesthetic Clinic',
      category: 'Medical/Healthcare Website',
      description: 'Professional medical clinic website with service information and appointment booking',
      features: ['Service showcase', 'Appointment system', 'Professional design', 'Trust-building'],
      technologies: ['React', 'Modern UI components'],
      link: 'https://aestheticlinic.vercel.app/',
      color: 'from-blue-400 to-cyan-600'
    },
    {
      title: 'Gritty Gaming Cafe',
      category: 'Gaming Cafe Website',
      description: 'Dynamic gaming cafe website with bold design and booking system',
      features: ['Gaming setup display', 'Booking system', 'Energetic design', 'Community features'],
      technologies: ['React', 'Interactive components'],
      link: 'https://grittygamingcafe.vercel.app/',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Twelve7 Salon',
      category: 'Salon & Beauty Website',
      description: 'Elegant salon website with service listings and appointment booking',
      features: ['Service catalog', 'Booking system', 'Gallery showcase', 'Elegant UI'],
      technologies: ['React', 'Booking integration'],
      link: 'https://tweleve7salonsample.vercel.app/',
      color: 'from-pink-400 to-rose-600'
    },
    {
      title: 'InkThrive SEO',
      category: 'SEO & Digital Marketing Website',
      description: 'Professional SEO agency website showcasing services and expertise',
      features: ['Service breakdown', 'Case studies', 'Lead generation', 'Professional branding'],
      technologies: ['React', 'SEO-optimized structure'],
      link: 'https://inkthriveseo.vercel.app/',
      color: 'from-green-400 to-teal-600'
    }
  ];

  const processSteps = [
    {
      icon: Lightbulb,
      title: 'Discovery & Planning',
      description: 'We discuss your business goals, target audience, and requirements'
    },
    {
      icon: Palette,
      title: 'Design & Mockup',
      description: 'I create visual mockups for your approval before development'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Building your website with clean code and best practices'
    },
    {
      icon: Bug,
      title: 'Testing & Refinement',
      description: 'Thorough testing across devices and browsers'
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'Website goes live with ongoing support and maintenance'
    }
  ];

  const testimonials = [
    {
      name: 'Ravi Sharma',
      business: 'Aadaram Cafe Owner',
      content: 'Working with our developer was a game-changer for our cafe. The website is beautiful, fast, and our online orders have tripled! Highly recommended.',
      rating: 5
    },
    {
      name: 'Dr. Priya Mehta',
      business: 'Aesthetic Clinic',
      content: 'Professional, responsive, and delivered exactly what we needed. The booking system has made appointment management so much easier.',
      rating: 5
    },
    {
      name: 'Arjun Singh',
      business: 'Gritty Gaming Cafe',
      content: 'The website perfectly captures our gaming cafe\'s vibe. Our bookings increased significantly within the first week of launch!',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      business: 'Twelve7 Salon',
      content: 'Elegant design that perfectly represents our brand. The booking system has streamlined our operations completely.',
      rating: 5
    }
  ];

  const technologies = [
    { name: 'HTML5 & CSS3', icon: Code },
    { name: 'JavaScript ES6+', icon: Code },
    { name: 'React.js', icon: Code },
    { name: 'Next.js', icon: Code },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Node.js', icon: Server },
    { name: 'MongoDB', icon: Database },
    { name: 'Git & GitHub', icon: Code },
    { name: 'Vercel', icon: Cloud },
    { name: 'Responsive Design', icon: Smartphone },
    { name: 'SEO Optimization', icon: Search },
    { name: 'Performance', icon: Zap }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Hi! I'm interested in getting a website developed.

*My Details:*
Name: ${formData.name}
Business: ${formData.business}
Phone: ${formData.phone}
Email: ${formData.email}

*Project Details:*
Website Type: ${formData.websiteType}
Budget Range: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

*Requirements:*
${formData.details}

Looking forward to discussing this project with you!`;

    const whatsappURL = `https://wa.me/919315435356?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setFormData({
        name: '',
        business: '',
        phone: '',
        email: '',
        websiteType: '',
        budget: '',
        timeline: '',
        details: ''
      });
    }, 1500);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded-lg opacity-30 blur-sm"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                Aditya Suryavanshi
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-colors hover:text-sky-400 ${
                    activeSection === item.id ? 'text-sky-400' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-400"
                    />
                  )}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300"
              >
                Get Quote
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-800/95 backdrop-blur-md"
            >
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-slate-300 hover:text-sky-400 hover:bg-slate-700 rounded-md transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-3 py-2 bg-gradient-to-r from-sky-500 to-purple-500 rounded-md text-center font-semibold"
                >
                  Get Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          
          {/* Animated Gradient Mesh */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 20%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />
          
          {/* Floating Geometric Shapes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                x: [0, 20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + i * 8}%`,
              }}
            >
              <div className={`w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-r ${
                i % 4 === 0 ? 'from-sky-500/20 to-purple-500/20' :
                i % 4 === 1 ? 'from-purple-500/20 to-orange-500/20' :
                i % 4 === 2 ? 'from-orange-500/20 to-green-500/20' :
                'from-green-500/20 to-sky-500/20'
              } blur-xl`} />
            </motion.div>
          ))}

          {/* Animated Grid Pattern */}
          <motion.div
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />

          {/* Particle System */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              animate={{
                x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5
              }}
              className="absolute w-1 h-1 bg-sky-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            {[...Array(5)].map((_, i) => (
              <motion.line
                key={`line-${i}`}
                x1={`${20 + i * 15}%`}
                y1={`${30 + i * 10}%`}
                x2={`${40 + i * 10}%`}
                y2={`${60 + i * 5}%`}
                stroke="url(#gradient)"
                strokeWidth="1"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  pathLength: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Transform Your Business
            </span>
            <br />
            <span className="text-slate-50">with Stunning Websites</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 px-4"
          >
            Professional Web Development Services | Fast Delivery | Conversion-Focused Design
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-16 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('portfolio')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-sky-500/25 transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-600 rounded-full font-semibold text-base sm:text-lg hover:bg-slate-800 hover:border-sky-400 transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-8 px-4"
          >
            {[
              { number: '15+', label: 'Successful Projects' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '3-Day', label: 'Average Delivery' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-sky-400">{stat.number}</div>
                <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-6 w-6 text-slate-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <SectionWrapper>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="space-y-6 text-lg text-slate-300">
              {[
                "I'm a professional web developer specializing in creating stunning, high-performance websites that help businesses establish their digital presence and drive real results.",
                "With expertise in modern web technologies and a deep understanding of user experience design, I transform ideas into powerful digital solutions that not only look beautiful but also convert visitors into customers.",
                "My approach combines technical excellence with creative design thinking, ensuring every website I build is not just functional but also memorable and effective.",
                "I work closely with clients to understand their unique needs and deliver tailored solutions that exceed expectations, always focusing on fast delivery and ongoing support."
              ].map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {technologies.slice(0, 8).map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 p-3 bg-slate-800/50 rounded-lg border border-slate-700"
                >
                  <tech.icon className="h-5 w-5 text-sky-400" />
                  <span className="text-sm text-slate-300">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative bg-slate-800/30">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Services I Offer
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Professional web development solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Recent Projects
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Work that delivers real results for clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* CTA Section 1 */}
      <section className="py-20 relative bg-gradient-to-r from-slate-800 to-slate-900">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business Online?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join 15+ satisfied clients who've grown their business with a stunning website
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full font-semibold text-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              Get Your Free Quote
            </motion.button>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 relative bg-slate-800/30">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                How I Build Your Website
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              A transparent process from concept to launch
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <ProcessTimeline steps={processSteps} />
          </div>
        </SectionWrapper>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              What my clients say about working with me
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Technologies Section */}
      <section className="py-20 relative bg-slate-800/30">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Technologies & Skills
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Modern tools and technologies I use to build amazing websites
            </p>
          </motion.div>

          <TechGrid technologies={technologies} />
        </SectionWrapper>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative bg-slate-800/30">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Pricing Packages
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Choose the perfect package for your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              package={{
                name: "Starter Package",
                price: "₹6,000",
                oldPrice: "₹10,000",
                description: "Perfect for small businesses and startups",
                features: [
                  "Single page website",
                  "Mobile responsive design",
                  "Contact form integration",
                  "Basic SEO optimization",
                  "1 month support",
                  "Fast delivery (3-5 days)"
                ],
                color: "from-slate-600 to-slate-700",
                popular: false
              }}
              index={0}
              scrollToSection={scrollToSection}
            />
            <PricingCard
              package={{
                name: "Professional Package",
                price: "₹15,000",
                oldPrice: "₹25,000",
                description: "Ideal for growing businesses",
                features: [
                  "Up to 5 page website",
                  "Mobile responsive design",
                  "Contact form integration",
                  "WhatsApp integration",
                  "Basic SEO optimization",
                  "3 months support",
                  "Fast delivery (7-10 days)"
                ],
                color: "from-sky-500 to-purple-500",
                popular: true
              }}
              index={1}
              scrollToSection={scrollToSection}
            />
            <PricingCard
              package={{
                name: "Business Package",
                price: "Custom Quote",
                description: "For large businesses with complex needs",
                features: [
                  "Unlimited pages",
                  "All advanced features included",
                  "Custom functionality",
                  "E-commerce integration",
                  "Advanced SEO strategy",
                  "Priority support",
                  "Ongoing maintenance",
                  "Custom timeline"
                ],
                color: "from-purple-600 to-pink-600",
                popular: false
              }}
              index={2}
              scrollToSection={scrollToSection}
            />
          </div>
        </SectionWrapper>
      </section>

      {/* CTA Section 2 */}
      <section className="py-20 relative bg-gradient-to-r from-purple-900 to-slate-900">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Your dream website is just one conversation away
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Start Your Project Now
            </motion.button>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">
                Let's Build Your Website
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Start your project today with a free consultation
            </p>
          </motion.div>

          <ContactForm 
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            showSuccess={showSuccess}
          />
        </SectionWrapper>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded-lg opacity-30 blur-sm"></div>
                </div>
                <span className="text-xl font-bold">Aditya Suryavanshi</span>
              </div>
              <p className="text-slate-400 text-sm">
                Crafting digital experiences that drive results
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-sky-400">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-sky-400">Services</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-sky-400">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-sky-400">Contact</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Restaurant Websites</li>
                <li>Salon Websites</li>
                <li>Medical Websites</li>
                <li>E-commerce Sites</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>adityasuryavanxi@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 9315435356</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>India</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-800" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>© 2024 Aditya Suryavanshi. All rights reserved.</p>
            <p>Built with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1
  });

  const flipDirection = index % 3 === 0 ? 'Y' : index % 3 === 1 ? 'X' : 'Y';

  return (
    <motion.div
      ref={ref}
      animate={inView ? { 
        rotateX: flipDirection === 'X' ? 0 : 0, 
        rotateY: flipDirection === 'Y' ? 0 : 0, 
        opacity: 1 
      } : { 
        rotateX: flipDirection === 'X' ? 90 : 0, 
        rotateY: flipDirection === 'Y' ? 90 : 0, 
        opacity: 0 
      }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      <Card className="h-full bg-slate-800/50 border-slate-700 hover:border-sky-500/50 transition-all duration-300 overflow-hidden">
        <CardContent className="p-6">
          <motion.div
            animate={inView ? { scale: [1, 1.2, 1], rotate: [0, 360, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="mb-4"
          >
            <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
              <service.icon className="h-8 w-8 text-white" />
            </div>
          </motion.div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-sky-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-slate-400">
            {service.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      animate={inView ? { 
        scale: 1, 
        rotate: 0, 
        opacity: 1 
      } : { 
        scale: 0.3, 
        rotate: -45, 
        opacity: 0 
      }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <Card className="h-full bg-slate-800/50 border-slate-700 hover:border-sky-500/50 transition-all duration-300 overflow-hidden">
        <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
          <motion.div
            animate={inView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="h-16 w-16 text-white/50" />
            </div>
          </motion.div>
          <Badge className="absolute top-4 left-4 bg-white/10 text-white border-white/20">
            {project.category}
          </Badge>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string, i: number) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>View Live Site</span>
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProcessTimeline = ({ steps }: { steps: any[] }) => {
  const [ref, inView] = useInView({
    threshold: 0.1
  });

  return (
    <div ref={ref} className="relative">
      {/* Timeline Line */}
      <motion.div
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1 }}
        className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 to-purple-500 origin-top"
      />

      {steps.map((step, index) => (
        <motion.div
          key={index}
          animate={inView ? { 
            opacity: 1, 
            x: 0 
          } : { 
            opacity: 0, 
            x: index % 2 === 0 ? -50 : 50 
          }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative flex items-start mb-12"
        >
          <motion.div
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
            className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10"
          >
            {index + 1}
          </motion.div>
          <div className="ml-8 flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <step.icon className="h-6 w-6 text-sky-400" />
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </div>
            <p className="text-slate-400">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      animate={inView ? { 
        rotateY: 0, 
        opacity: 1 
      } : { 
        rotateY: 90, 
        opacity: 0 
      }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <Card className="h-full bg-slate-800/50 border-slate-700 hover:border-sky-500/50 transition-all duration-300">
        <CardContent className="p-6">
          <motion.div
            animate={inView ? { width: '100%' } : { width: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
            className="flex mb-4"
          >
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.15 + 0.3 + i * 0.1 }}
              >
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
              </motion.div>
            ))}
          </motion.div>
          <p className="text-slate-300 mb-6 italic">
            "{testimonial.content}"
          </p>
          <div className="flex items-center space-x-3">
            <motion.div
              animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 360 }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
              className="w-12 h-12 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold"
            >
              {testimonial.name.charAt(0)}
            </motion.div>
            <div>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-slate-400">{testimonial.business}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TechGrid = ({ technologies }: { technologies: any[] }) => {
  const [ref, inView] = useInView({
    threshold: 0.1
  });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          animate={inView ? {
            scale: 1,
            rotate: 0,
            x: 0,
            y: 0
          } : {
            scale: 0,
            rotate: 0,
            x: Math.cos((index / technologies.length) * Math.PI * 2) * 100,
            y: Math.sin((index / technologies.length) * Math.PI * 2) * 100
          }}
          transition={{ 
            duration: 0.8,
            delay: index * 0.05,
            type: "spring"
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 }
          }}
          className="relative group"
        >
          <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-sky-500/50 transition-all duration-300 text-center">
            <motion.div
              animate={{
                filter: [
                  'hue-rotate(0deg)',
                  'hue-rotate(180deg)',
                  'hue-rotate(360deg)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.1
              }}
              className="mb-3"
            >
              <tech.icon className="h-8 w-8 mx-auto text-sky-400" />
            </motion.div>
            <p className="text-sm text-slate-300 group-hover:text-sky-400 transition-colors">
              {tech.name}
            </p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const ContactForm = ({ 
  formData, 
  setFormData, 
  handleSubmit, 
  isSubmitting, 
  showSuccess 
}: {
  formData: any;
  setFormData: any;
  handleSubmit: any;
  isSubmitting: boolean;
  showSuccess: boolean;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)' 
      } : { 
        opacity: 0, 
        y: 50, 
        filter: 'blur(10px)' 
      }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
              >
                <Label htmlFor="name" className="text-base font-medium">Your Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-slate-700/50 border-slate-600 focus:border-sky-500 h-12 text-base"
                  placeholder="Enter your full name"
                />
              </motion.div>

              <motion.div
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.15 }}
                className="space-y-2"
              >
                <Label htmlFor="business" className="text-base font-medium">Business Name *</Label>
                <Input
                  id="business"
                  type="text"
                  required
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="bg-slate-700/50 border-slate-600 focus:border-sky-500 h-12 text-base"
                  placeholder="Enter your business name"
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <Label htmlFor="phone" className="text-base font-medium">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-slate-700/50 border-slate-600 focus:border-sky-500 h-12 text-base"
                  placeholder="10-digit number"
                />
              </motion.div>

              <motion.div
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.25 }}
                className="space-y-2"
              >
                <Label htmlFor="email" className="text-base font-medium">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-slate-700/50 border-slate-600 focus:border-sky-500 h-12 text-base"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <Label htmlFor="websiteType" className="text-base font-medium">Website Type *</Label>
                <Select value={formData.websiteType} onValueChange={(value) => setFormData({ ...formData, websiteType: value })}>
                  <SelectTrigger className="bg-slate-700/50 border-slate-600 focus:border-sky-500 h-12 text-base">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="restaurant">Restaurant/Cafe</SelectItem>
                    <SelectItem value="salon">Salon/Beauty</SelectItem>
                    <SelectItem value="medical">Medical/Healthcare</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="business">Business/Corporate</SelectItem>
                    <SelectItem value="portfolio">Portfolio</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.35 }}
                className="space-y-2"
              >
                <Label htmlFor="budget" className="text-base font-medium">Budget Range</Label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                  <SelectTrigger className="bg-slate-700/50 border-slate-600 focus:border-sky-500 h-12 text-base">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-6k">Under ₹6,000</SelectItem>
                    <SelectItem value="6k-15k">₹6,000-₹15,000</SelectItem>
                    <SelectItem value="15k-30k">₹15,000-₹30,000</SelectItem>
                    <SelectItem value="30k+">₹30,000+</SelectItem>
                    <SelectItem value="not-sure">Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <Label htmlFor="timeline" className="text-base font-medium">Timeline</Label>
                <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                  <SelectTrigger className="bg-slate-700/50 border-slate-600 focus:border-sky-500 h-12 text-base">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                    <SelectItem value="1-month">Within 1 month</SelectItem>
                    <SelectItem value="2-3-months">Within 2-3 months</SelectItem>
                    <SelectItem value="exploring">Just exploring</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
            </div>

            <motion.div
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.45 }}
              className="space-y-2"
            >
              <Label htmlFor="details" className="text-base font-medium">Project Details *</Label>
              <Textarea
                id="details"
                required
                rows={5}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Tell me about your business and what you need for your website..."
                className="bg-slate-700/50 border-slate-600 focus:border-sky-500 text-base resize-none"
              />
            </motion.div>

            <motion.div
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5 }}
              className="text-center pt-4"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={isSubmitting ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                transition={{ duration: 0.3 }}
                className="px-10 py-4 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full font-semibold text-lg shadow-lg hover:shadow-sky-500/25 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </span>
                ) : (
                  'Send Inquiry'
                )}
              </motion.button>

              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-6 text-green-400 font-semibold text-lg"
                  >
                    Redirecting to WhatsApp...
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const PricingCard = ({ package: pkg, index, scrollToSection }: { package: any; index: number; scrollToSection: (sectionId: string) => void }) => {
  const [ref, inView] = useInView({
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      animate={inView ? { 
        opacity: 1, 
        rotateY: 0,
        rotateX: 0,
        z: 0
      } : { 
        opacity: 0, 
        rotateY: 45,
        rotateX: 15,
        z: -100
      }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ 
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="relative group"
    >
      {pkg.popular && (
        <motion.div
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: index * 0.2 + 0.5 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
        >
          <Badge className="bg-gradient-to-r from-sky-500 to-purple-500 text-white px-4 py-1">
            Most Popular
          </Badge>
        </motion.div>
      )}
      
      <Card className={`h-full relative overflow-hidden ${
        pkg.popular 
          ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-sky-500/50 shadow-2xl shadow-sky-500/20' 
          : 'bg-slate-800/50 border-slate-700 hover:border-sky-500/50'
      } transition-all duration-300`}>
        {/* Animated gradient border */}
        <motion.div
          animate={{
            background: [
              `linear-gradient(45deg, transparent, ${pkg.popular ? 'rgba(14, 165, 233, 0.5)' : 'rgba(168, 85, 247, 0.3)'}, transparent)`,
              `linear-gradient(135deg, transparent, ${pkg.popular ? 'rgba(168, 85, 247, 0.5)' : 'rgba(249, 115, 22, 0.3)'}, transparent)`,
              `linear-gradient(225deg, transparent, ${pkg.popular ? 'rgba(249, 115, 22, 0.5)' : 'rgba(14, 165, 233, 0.3)'}, transparent)`,
              `linear-gradient(315deg, transparent, ${pkg.popular ? 'rgba(14, 165, 233, 0.5)' : 'rgba(168, 85, 247, 0.3)'}, transparent)`
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-30"
        />
        
        <CardContent className="relative p-8">
          <motion.div
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.2 + 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-2 group-hover:text-sky-400 transition-colors">
              {pkg.name}
            </h3>
            <p className="text-slate-400 mb-6">{pkg.description}</p>
            
            <motion.div
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ delay: index * 0.2 + 0.4 }}
              className="mb-6"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                  {pkg.price}
                </div>
                {pkg.oldPrice && (
                  <div className="text-xl text-slate-500 line-through">
                    {pkg.oldPrice}
                  </div>
                )}
              </div>
              {pkg.oldPrice && (
                <div className="mt-2 inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                  Save {parseInt(pkg.oldPrice.replace(/[^0-9]/g, '')) - parseInt(pkg.price.replace(/[^0-9]/g, '')) > 0
                    ? `₹${parseInt(pkg.oldPrice.replace(/[^0-9]/g, '')) - parseInt(pkg.price.replace(/[^0-9]/g, ''))}`
                    : ''}
                </div>
              )}
            </motion.div>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature: string, i: number) => (
                <motion.li
                  key={i}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <motion.div
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 + i * 0.1, type: "spring" }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  </motion.div>
                  <span className="text-slate-300">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-r from-sky-500 to-purple-500 text-white shadow-lg hover:shadow-sky-500/25'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
              }`}
            >
              Get Started
            </motion.button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Portfolio;