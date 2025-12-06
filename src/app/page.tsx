'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
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
  Database, Server, Cpu, HardDrive, Network,
  MessageSquare, Mic, Info, Plus, Sparkles, Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoadingScreen from '@/components/ui/loading-screen';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure scrollbar is always visible after loading
  useEffect(() => {
    if (!isLoading) {
      // Multiple approaches to ensure scrollbar appears
      const ensureScrollbar = () => {
        const html = document.documentElement;
        const body = document.body;
        const next = document.getElementById('__next');
        
        // Force scrollbar visibility
        html.style.overflowY = 'scroll';
        body.style.overflowY = 'scroll';
        if (next) {
          next.style.overflowY = 'scroll';
        }
        
        // Trigger reflows
        void html.offsetHeight;
        void body.offsetHeight;
        if (next) void next.offsetHeight;
      };
      
      // Immediate execution
      ensureScrollbar();
      
      // Multiple delayed attempts to ensure it works
      const timeout1 = setTimeout(ensureScrollbar, 100);
      const timeout2 = setTimeout(ensureScrollbar, 300);
      const timeout3 = setTimeout(ensureScrollbar, 500);
      
      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
      };
    }
  }, [isLoading]);

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
      icon: Heart,
      title: 'Pet Services Websites',
      description: 'Modern pet grooming and care websites with booking and customer onboarding',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Stethoscope,
      title: 'Medical & Healthcare Websites',
      description: 'Professional, trustworthy designs with appointment booking',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Search,
      title: 'SEO-Optimized Websites',
      description: 'Built for visibility with technical SEO and fast loading speeds',
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
      title: 'Ultimutt Pet Grooming',
      category: 'Pet Grooming & Onboarding Website',
      description: 'Modern pet grooming website with online booking and customer onboarding system',
      features: ['Online booking system', 'Customer onboarding', 'Service catalog', 'Pet profiles'],
      technologies: ['React', 'Modern UI components', 'Booking integration'],
      link: 'https://ultimutt.vercel.app/',
      color: 'from-green-400 to-emerald-600'
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
      name: 'Emma Rodriguez',
      business: 'Ultimutt Pet Grooming',
      content: 'The pet grooming website is absolutely perfect! Our clients love the online booking system, and the customer onboarding process has made new client intake seamless. Bookings have increased by 40%!',
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

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <LoadingScreen 
        onComplete={() => setIsLoading(false)}
      />
      
      {!isLoading && (
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
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-slate-300 hover:text-sky-400 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-4 py-3 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full text-center font-semibold hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 hover:scale-105"
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
        <div className="absolute inset-0 pointer-events-none">
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
            className="absolute inset-0 pointer-events-none"
          />
          
          {/* Floating Geometric Shapes - Reduced for performance */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute pointer-events-none"
              style={{
                left: `${20 + i * 20}%`,
                top: `${20 + i * 15}%`,
              }}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${
                i % 2 === 0 ? 'from-sky-500/15 to-purple-500/15' : 'from-purple-500/15 to-orange-500/15'
              } blur-xl`} />
            </motion.div>
          ))}

          {/* Animated Grid Pattern - Simplified */}
          <motion.div
            animate={{
              backgroundPosition: ['0px 0px', '100px 100px', '0px 0px']
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px'
            }}
          />

          {/* Particle System - Reduced for performance */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              animate={{
                x: [Math.random() * 40 - 20, Math.random() * 40 - 20],
                y: [Math.random() * 40 - 20, Math.random() * 40 - 20],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3
              }}
              className="absolute w-1 h-1 bg-sky-400 rounded-full pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* Connecting Lines - Reduced for performance */}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.line
                key={`line-${i}`}
                x1={`${25 + i * 20}%`}
                y1={`${35 + i * 15}%`}
                x2={`${45 + i * 15}%`}
                y2={`${65 + i * 8}%`}
                stroke="url(#gradient)"
                strokeWidth="0.5"
                animate={{
                  opacity: [0.1, 0.5, 0.1]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.7
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
            viewport={{ once: false }}
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
            viewport={{ once: false }}
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
            viewport={{ once: false }}
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
            viewport={{ once: false }}
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
            viewport={{ once: false }}
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
            viewport={{ once: false }}
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

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <PricingCard
              package={{
                name: "Starter Package",
                price: "₹9,999",
                description: "Landing Page Design & Development",
                features: [
                  "1 custom landing page",
                  "Mobile responsive design",
                  "Contact form integration",
                  "Basic on-page SEO optimization",
                  "1-month free support",
                  "Fast delivery (3-5 days)"
                ],
                addons: [
                  {
                    icon: MessageSquare,
                    name: "Basic AI Chatbot (FAQs)",
                    price: "₹15,000",
                    total: "₹24,999",
                    features: [
                      "Custom chatbot trained for your business",
                      "Handles FAQs and customer inquiries",
                      "Integrated into landing page",
                      "Custom branding and welcome message",
                      "Maintenance: ₹5,000/month"
                    ]
                  },
                  {
                    icon: MessageSquare,
                    name: "Premium AI Chatbot (FAQs + Leads)",
                    price: "₹28,000",
                    total: "₹37,999",
                    features: [
                      "All basic features plus:",
                      "Lead collection and management",
                      "Customer data capture",
                      "Advanced conversation flows",
                      "Maintenance: ₹10,000/month"
                    ]
                  }
                ],
                note: "AI Voice Bot not available in Starter Package",
                color: "from-blue-500 to-cyan-500",
                popular: false
              }}
              index={0}
              scrollToSection={scrollToSection}
            />
            <PricingCard
              package={{
                name: "Professional Package",
                price: "₹35,000",
                description: "5-6 Page Business Website",
                features: [
                  "Up to 6 custom pages",
                  "Mobile responsive and SEO-optimized",
                  "Contact & inquiry forms",
                  "WhatsApp integration",
                  "1-month free support",
                  "Fast delivery (7-10 days)"
                ],
                addons: [
                  {
                    icon: MessageSquare,
                    name: "Basic AI Chatbot (FAQs)",
                    price: "₹15,000",
                    total: "₹50,000",
                    features: [
                      "Fully customized for your brand",
                      "Trained on service FAQs and business tone",
                      "Handles customer inquiries",
                      "Maintenance: ₹5,000/month"
                    ]
                  },
                  {
                    icon: MessageSquare,
                    name: "Premium AI Chatbot (FAQs + Leads)",
                    price: "₹28,000",
                    total: "₹63,000",
                    features: [
                      "All basic features plus:",
                      "Lead capture capabilities",
                      "Customer data collection",
                      "Advanced conversation flows",
                      "Maintenance: ₹10,000/month"
                    ]
                  },
                  {
                    icon: Mic,
                    name: "Basic AI Voice Bot (FAQs)",
                    price: "₹25,000",
                    total: "₹60,000",
                    features: [
                      "Voice bot handles customer FAQs",
                      "Speech-based interactions",
                      "Usage cost charged to client",
                      "One-time setup charge",
                      "Maintenance: ₹10,000/month"
                    ]
                  },
                  {
                    icon: Mic,
                    name: "Premium AI Voice Bot (FAQs + Leads + Booking)",
                    price: "₹45,000",
                    total: "₹80,000",
                    features: [
                      "All basic voice features plus:",
                      "Lead collection capabilities",
                      "Appointment booking via voice",
                      "Custom branded voice personality",
                      "Usage cost charged to client",
                      "Maintenance: ₹18,000/month"
                    ]
                  }
                ],
                color: "from-purple-500 to-pink-500",
                popular: true
              }}
              index={1}
              scrollToSection={scrollToSection}
            />
            <PricingCard
              package={{
                name: "Business / Custom Package",
                price: "Custom Quote",
                description: "For larger businesses and advanced projects",
                features: [
                  "Unlimited pages and functionalities",
                  "Automation, AI tools, custom integrations",
                  "CRM integration",
                  "Advanced SEO and performance",
                  "Priority support",
                  "Ongoing maintenance",
                  "Custom timeline"
                ],
                addons: [
                  {
                    icon: MessageSquare,
                    name: "AI Chatbot Solutions",
                    price: "Available",
                    features: ["Basic (₹15,000) and Premium (₹28,000) options", "Maintenance: ₹5,000-10,000/month"]
                  },
                  {
                    icon: Mic,
                    name: "AI Voice Bot Solutions",
                    price: "Available",
                    features: ["Basic (₹25,000) and Premium (₹45,000) options", "Maintenance: ₹10,000-18,000/month", "Custom pricing based on requirements"]
                  }
                ],
                color: "from-orange-500 to-yellow-500",
                popular: false
              }}
              index={2}
              scrollToSection={scrollToSection}
            />
          </div>

          {/* Support Policy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="max-w-4xl mx-auto mb-16"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-8 w-8 text-green-400" />
                  <h3 className="text-2xl font-bold">Included with Every Website</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sky-400 mb-3">Free 1-Month Support Period</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Minor bug fixes</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Small content updates (text, images, links)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Basic technical assistance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Form troubleshooting</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Guidance for managing your site</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-3">After Support Period</h4>
                    <p className="text-slate-300 mb-3">
                      Clients can opt for paid maintenance packages if continuous updates are needed.
                    </p>
                    <p className="text-sm text-slate-400 italic">
                      Support excludes new features, redesigns, or additional pages (requires separate quote).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Client Guidance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-r from-sky-500/10 to-purple-500/10 border border-sky-500/20 rounded-lg p-6">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Info className="h-5 w-5 text-sky-400" />
                <h4 className="font-semibold text-lg">Pricing Information</h4>
              </div>
              <p className="text-slate-300 text-sm">
                All prices are averages based on standard project complexity. Final cost depends on website structure, required integrations, and custom features.
              </p>
            </div>
          </motion.div>

          {/* CTA Below Pricing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="text-center"
          >
            <motion.h3
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 via-purple-400 to-orange-400 bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              Let's Build Your Website — Powered by Smart Automation
            </motion.h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              From modern designs to AI chatbots and voice bots — bring your digital presence to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full font-semibold text-lg shadow-lg hover:shadow-sky-500/25 transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="relative">Get Free Quote</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: 'rgba(14, 165, 233, 1)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-slate-600 rounded-full font-semibold text-lg hover:bg-slate-800 transition-all duration-300"
              >
                Book a Consultation
              </motion.button>
            </div>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* CTA Section 2 */}
      <section className="py-20 relative bg-gradient-to-r from-purple-900 to-slate-900">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
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
            viewport={{ once: false }}
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
                <li>Pet Services Websites</li>
                <li>Medical Websites</li>
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
      )}
    </>
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
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '50px'
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
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '50px'
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
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '50px'
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
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '50px'
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
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '50px'
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
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '50px'
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
                <Label htmlFor="name" className="text-base font-medium text-white">Your Name *</Label>
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
                <Label htmlFor="business" className="text-base font-medium text-white">Business Name *</Label>
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
                <Label htmlFor="phone" className="text-base font-medium text-white">Phone Number *</Label>
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
                <Label htmlFor="email" className="text-base font-medium text-white">Email Address *</Label>
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
                <Label htmlFor="websiteType" className="text-base font-medium text-white">Website Type *</Label>
                <Select value={formData.websiteType} onValueChange={(value) => setFormData({ ...formData, websiteType: value })}>
                  <SelectTrigger className="bg-slate-700/50 border-slate-600 focus:border-sky-500 h-12 text-base">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="restaurant">Restaurant/Cafe</SelectItem>
                    <SelectItem value="salon">Salon/Beauty</SelectItem>
                    <SelectItem value="pet">Pet Services</SelectItem>
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
                <Label htmlFor="budget" className="text-base font-medium text-white">Budget Range</Label>
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
                <Label htmlFor="timeline" className="text-base font-medium text-white">Timeline</Label>
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
              <Label htmlFor="details" className="text-base font-medium text-white">Project Details *</Label>
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
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '50px'
  });
  const [expandedAddon, setExpandedAddon] = useState<number | null>(null);

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
        <motion.div
          animate={{
            background: [
              `linear-gradient(45deg, transparent, ${pkg.color.includes('blue') ? 'rgba(14, 165, 233, 0.3)' : pkg.color.includes('purple') ? 'rgba(168, 85, 247, 0.3)' : 'rgba(249, 115, 22, 0.3)'}, transparent)`,
              `linear-gradient(135deg, transparent, ${pkg.color.includes('blue') ? 'rgba(6, 182, 212, 0.3)' : pkg.color.includes('purple') ? 'rgba(236, 72, 153, 0.3)' : 'rgba(250, 204, 21, 0.3)'}, transparent)`,
              `linear-gradient(225deg, transparent, ${pkg.color.includes('blue') ? 'rgba(14, 165, 233, 0.3)' : pkg.color.includes('purple') ? 'rgba(168, 85, 247, 0.3)' : 'rgba(249, 115, 22, 0.3)'}, transparent)`
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-30"
        />

        <CardContent className="relative p-6">
          <motion.div
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.2 + 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-2 group-hover:text-sky-400 transition-colors">
              {pkg.name}
            </h3>
            <p className="text-slate-400 mb-4 text-sm">{pkg.description}</p>

            <motion.div
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ delay: index * 0.2 + 0.4 }}
              className="mb-6"
            >
              <div className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent text-center`}>
                {pkg.price}
              </div>
            </motion.div>

            <div className="space-y-2 mb-6">
              <h4 className="text-sm font-semibold text-sky-400 mb-3">Base Features</h4>
              <ul className="space-y-2">
                {pkg.features.map((feature: string, i: number) => (
                  <motion.li
                    key={i}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.2 + 0.5 + i * 0.05 }}
                    className="flex items-start space-x-2 text-sm"
                  >
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {pkg.addons && pkg.addons.length > 0 && (
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  <h4 className="text-sm font-semibold text-purple-400">Available Add-ons</h4>
                </div>
                {pkg.addons.map((addon: any, addonIndex: number) => (
                  <div key={addonIndex} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <addon.icon className="h-4 w-4 text-sky-400" />
                        <span className="text-sm font-semibold">{addon.name}</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-3 w-3 text-slate-400 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            {addon.icon === MessageSquare ?
                              "Smart text-based assistant that handles customer questions 24/7" :
                              "Voice-powered assistant that can speak and handle real-time customer queries"}
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <button
                        onClick={() => setExpandedAddon(expandedAddon === addonIndex ? null : addonIndex)}
                        className="text-sky-400 hover:text-sky-300 transition-colors"
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${expandedAddon === addonIndex ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400">Add-on Price:</span>
                      <span className="text-sm font-bold text-orange-400">{addon.price}</span>
                    </div>
                    {addon.total && (
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">Total with add-on:</span>
                        <span className="text-sm font-semibold text-green-400">{addon.total}</span>
                      </div>
                    )}
                    <AnimatePresence>
                      {expandedAddon === addonIndex && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 pt-3 border-t border-slate-600/50">
                            <ul className="space-y-1.5">
                              {addon.features.map((feat: string, fi: number) => (
                                <li key={fi} className="flex items-start space-x-2 text-xs text-slate-300">
                                  <Plus className="h-3 w-3 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                            {addon.upgrade && (
                              <div className="mt-3 p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded border border-purple-500/20">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-xs font-semibold text-purple-400">{addon.upgrade.name}</span>
                                  <span className="text-sm font-bold text-purple-400">{addon.upgrade.price}</span>
                                </div>
                                <div className="text-xs text-slate-400 mb-1">Total: {addon.upgrade.total}</div>
                                <ul className="space-y-1">
                                  {addon.upgrade.features.map((feat: string, ufi: number) => (
                                    <li key={ufi} className="flex items-start space-x-2 text-xs text-slate-300">
                                      <Sparkles className="h-3 w-3 text-purple-400 mt-0.5 flex-shrink-0" />
                                      <span>{feat}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            )}

            {pkg.note && (
              <div className="mb-6 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                <p className="text-xs text-orange-400 flex items-start space-x-2">
                  <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
                  <span>{pkg.note}</span>
                </p>
              </div>
            )}

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