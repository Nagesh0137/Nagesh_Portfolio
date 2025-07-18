"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Server,
  Globe,
  Award,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Menu,
  X,
  Send,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "certifications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, [mounted]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      // Simulate API call - replace with your actual email service
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the email using a service like EmailJS, Resend, or your own API
      console.log("Contact form data:", data);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. I'll get back to you soon.",
      });

      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Redux",
      "Bootstrap",
      "JSON",
      "Ajax",
      "jQuery",
    ],
    backend: [
      "PHP",
      "CodeIgniter",
      "Laravel",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
    ],
    tools: [
      "GitHub",
      "WordPress",
      "SEO",
      "AI",
      "Vercel",
      "Hostinger",
      "Postman",
      "Docker",
      "AWS",
    ],
  };

  const projects = [
    {
      title: "Jeevan Sobati Matrimony",
      description:
        "A comprehensive matrimony platform designed to connect individuals seeking life partners. Features include advanced profile matching algorithms, secure messaging system, and integrated payment gateway for premium services. Built with modern technologies to ensure scalability and user experience.",
      tech: ["Node.js", "MongoDB", "React", "Phone Pe Gateway"],
      link: "https://www.jeevansobati.com/",
      type: "Web Application",
      image: "/images/jeevansobati.png",
    },
    {
      title: "Cab Booking Admin Panel",
      description:
        "A robust admin dashboard for managing cab booking operations, including driver management, ride tracking, fare calculation, and customer support. Features real-time GPS tracking, automated dispatch system, and comprehensive analytics for business insights.",
      tech: ["CodeIgniter", "MySQL", "Google Maps API", "Razorpay Gateway"],
      link: "#",
      type: "Web Application",
      image: "/images/cab.png",
    },
    {
      title: "MAKEUCA Online Course Website",
      description:
        "An e-learning platform offering comprehensive online courses with interactive content delivery. Features include course management, progress tracking, quiz systems, certificate generation, and integrated chatbot for student support. Secure payment processing for course enrollments.",
      tech: ["PHP", "MySQL", "CodeIgniter", "Chatbot", "Payment Gateway"],
      link: "https://makeuca.com/",
      type: "Web Application",
      image: "/images/makuca.png",
    },
    {
      title: "Construction Company Website",
      description:
        "A professional corporate website showcasing construction services, completed projects, and company expertise. Features include dynamic project galleries, service portfolios, client testimonials, and contact management system. Optimized for lead generation and brand visibility.",
      tech: ["React", "JavaScript", "CSS", "Node.js"],
      link: "https://nagesh0137.github.io/The-Construction-Company/",
      type: "Business Website",
      image: "/images/construction.jpg",
    },
    {
      title: "News Portal",
      description:
        "A dynamic news aggregation platform delivering real-time updates across multiple categories including politics, technology, lifestyle, and sports. Features include categorized news sections, search functionality, bookmarking system, and responsive design for all devices.",
      tech: ["React", "Node.js", "React Router", "Express.js"],
      link: "https://nagesh0137.github.io/News-Portal-React/",
      type: "Web Portal",
      image: "/images/newsportal.png",
    },
    {
      title: "Personal Portfolio",
      description:
        "A modern, responsive portfolio website showcasing professional projects, technical skills, and career achievements. Features smooth animations, interactive design elements, contact forms, and optimized performance. Built with modern frameworks for enhanced user experience.",
      tech: ["Next.js", "CSS", "Bootstrap", "Tailwind CSS"],
      link: "#",
      type: "Portfolio",
      image: "/images/portfolio.png",
    },
  ];

  const certifications = [
    "Oracle Cloud Infrastructure Generative AI Certified Professional (Oracle)",
    "Communication Skills and Introduction to Soft Skills (TCS iON)",
    "Front-end Developer (React), JavaScript, CSS (HackerRank)",
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Progress Bar */}
      {mounted && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform-gpu z-50"
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        />
      )}

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              NS
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Education",
                "Contact",
              ].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-gray-200 overflow-hidden"
            >
              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Education",
                "Contact",
              ].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-lg"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Nagesh Sonawane
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-2xl md:text-3xl text-gray-600 mb-6"
              >
                Full Stack Developer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-lg text-gray-500 mb-8 leading-relaxed"
              >
                Passionate about creating dynamic, responsive web applications
                with 1+ years of experience in modern technologies. Transforming
                ideas into digital reality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
              >
                <motion.div {...scaleOnHover}>
                  <Button
                    onClick={() => scrollToSection("projects")}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    View My Work
                  </Button>
                </motion.div>
                <motion.div {...scaleOnHover}>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="flex space-x-6 justify-center lg:justify-start"
              >
                {[
                  { icon: Github, href: "https://github.com/Nagesh0137" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/nagesh-sonawane/",
                  },
                  { icon: Mail, href: "mailto:nageshsonawane870@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto") ? "_self" : "_blank"
                    }
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - 3D Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <motion.div {...floatingAnimation} className="relative z-10">
                <div className="relative">
                  {/* Main Hero Image */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                  >
                    <img
                      src="/images/NageshPhoto.jpeg"
                      alt="Nagesh Sonawane - Full Stack Developer"
                      className="w-full h-auto rounded-2xl"
                    />

                    {/* Floating Tech Icons */}
                    <motion.div
                      animate={{
                        y: [-10, 10, -10],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg"
                    >
                      <Code className="w-6 h-6 text-blue-600" />
                    </motion.div>

                    <motion.div
                      animate={{
                        y: [10, -10, 10],
                        rotate: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
                    >
                      <Server className="w-6 h-6 text-indigo-600" />
                    </motion.div>

                    <motion.div
                      animate={{
                        y: [-5, 15, -5],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg"
                    >
                      <Globe className="w-6 h-6 text-purple-600" />
                    </motion.div>
                  </motion.div>

                  {/* Background Decorative Elements */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 30,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute -top-8 -right-8 w-24 h-24 border-4 border-blue-300/30 rounded-full"
                  />

                  <motion.div
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 25,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-indigo-300/30 rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-center mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              <ChevronDown size={32} className="mx-auto text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center overflow-hidden"
              >
                <img
                  src="/images/project-1.png"
                  alt="About Nagesh Sonawane"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3
                variants={fadeInRight}
                className="text-2xl font-semibold mb-6 text-gray-800"
              >
                Full Stack Developer
              </motion.h3>
              <motion.p
                variants={fadeInRight}
                className="text-gray-600 mb-6 leading-relaxed"
              >
                Full Stack Developer with 1+ years of experience in designing
                dynamic, responsive web applications and interactive features.
                Proficient in front-end and back-end technologies, with a strong
                focus on problem-solving, teamwork, leadership, and
                adaptability.
              </motion.p>
              <motion.p
                variants={fadeInRight}
                className="text-gray-600 mb-8 leading-relaxed"
              >
                Passionate about learning modern tools like Next.js and Python
                to solve complex problems. Currently pursuing MCA while working
                full-time, demonstrating commitment to continuous learning and
                professional growth.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: MapPin, text: "Pune, Maharashtra" },
                  { icon: Phone, text: "+91 8888430137" },
                  { icon: Mail, text: "nageshsonawane870@gmail.com" },
                  { icon: Briefcase, text: "1+ Years Experience" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2"
                  >
                    <item.icon size={20} className="text-blue-600" />
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Frontend",
                icon: Code,
                skills: skills.frontend,
                color: "blue",
              },
              {
                title: "Backend & Database",
                icon: Server,
                skills: skills.backend,
                color: "indigo",
              },
              {
                title: "Tools & Others",
                icon: Globe,
                skills: skills.tools,
                color: "purple",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon
                        className={`w-12 h-12 mx-auto mb-4 text-${category.color}-600`}
                      />
                    </motion.div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      variants={staggerContainer}
                      className="flex flex-wrap gap-2"
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className={`bg-${category.color}-100 text-${category.color}-800 hover:bg-${category.color}-200`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-gray-800">
                      Full Stack Developer
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 font-medium">
                      A2Z IT HUB Pvt Ltd, Ahmednagar
                    </CardDescription>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <Badge className="bg-green-100 text-green-800">
                      Feb 2024 - Present
                    </Badge>
                  </motion.div>
                </div>
              </CardHeader>
              <CardContent>
                <motion.ul
                  variants={staggerContainer}
                  className="space-y-3 text-gray-600"
                >
                  {[
                    "Developed and maintained PHP-based web applications, including Account Management Systems, Cab & Auto Booking Admin and Matrimony Project, using Laravel/CodeIgniter, MySQL, and JavaScript/React.",
                    "Improved application performance by optimizing SQL queries and implementing best practices in code quality and database management.",
                    "Created and integrated RESTful APIs to support Mobile Application and web applications, enabling smooth data flow and seamless frontend-backend communication.",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInLeft}
                      whileHover={{ x: 10 }}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all h-full overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-blue-600/20 flex items-center justify-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="bg-white rounded-full p-3 shadow-lg"
                      >
                        <ExternalLink size={24} className="text-blue-600" />
                      </motion.div>
                    </motion.div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Badge variant="outline" className="text-xs">
                          {project.type}
                        </Badge>
                      </motion.div>
                    </div>
                    <CardTitle className="text-xl text-gray-800">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <motion.div
                      variants={staggerContainer}
                      className="flex flex-wrap gap-2"
                    >
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 text-gray-700"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                degree: "Master of Computer Applications (MCA)",
                school: "Ajeeky D Y Patil School of MCA, Lohegaon",
                period: "Jul 2024 - 2026",
                status: "Pursuing",
                color: "blue",
              },
              {
                degree: "Bachelor of Computer Applications (BCA)",
                school:
                  "New Arts, Commerce and Science College, Ahmednagar (SPPU)",
                period: "Aug 2021 - May 2024",
                status: "CGPA: 8.13",
                color: "green",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-0 shadow-lg h-full">
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <GraduationCap
                        className={`w-12 h-12 text-${
                          edu.color === "blue" ? "blue" : "indigo"
                        }-600 mb-4`}
                      />
                    </motion.div>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription>{edu.school}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{edu.period}</span>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <Badge
                          className={`bg-${edu.color}-100 text-${edu.color}-800`}
                        >
                          {edu.status}
                        </Badge>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Award className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                    </motion.div>
                    <span className="text-gray-700">{cert} </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting
              projects. Let's connect!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.h3
                variants={fadeInLeft}
                className="text-2xl font-semibold mb-6"
              >
                Contact Information
              </motion.h3>

              {[
                {
                  icon: Phone,
                  title: "Phone",
                  info: "+91 8888430137",
                  color: "blue",
                },
                {
                  icon: Mail,
                  title: "Email",
                  info: "nageshsonawane870@gmail.com",
                  color: "indigo",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  info: "Pune, Maharashtra",
                  color: "purple",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  variants={fadeInLeft}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="flex items-center space-x-4 p-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <contact.icon
                          className={`w-8 h-8 text-${contact.color}-600 flex-shrink-0`}
                        />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {contact.title}
                        </h4>
                        <p className="text-gray-600">{contact.info}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <motion.div variants={fadeInLeft} className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com/Nagesh0137" },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/nagesh-sonawane/",
                    },
                    { icon: Mail, href: "mailto:nageshsonawane870@gmail.com" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={
                        social.href.startsWith("mailto") ? "_self" : "_blank"
                      }
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
                    >
                      <social.icon
                        size={20}
                        className="text-gray-700 hover:text-blue-600"
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        className="mt-1"
                        placeholder="What's this about?"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="mt-1"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send size={16} />
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400"
          >
            © {new Date().getFullYear()} Nagesh Sonawane. All rights reserved
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}
