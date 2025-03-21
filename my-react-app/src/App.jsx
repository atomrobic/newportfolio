import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Mail } from "lucide-react";
import { FaLinkedin, FaGithub,FaFileDownload } from "react-icons/fa";
import "./index.css"; // Import the CSS file
import { Card,CardContent} from "./components/card";
import boyAnimation from "./assets/boy-coding.json"; // Add your Lottie file
import Lottie from "react-lottie-player"; // ✅ Correct Import
import SkillsSection from "./components/SkillsSection";
import akhilAppuImage from './assets/video/akhil appu.jpg';
import ContactSection from "./components/ContactSection";
import videoSrc from './assets/video/myvideos.mp4';


<img src={akhilAppuImage} alt="Akhil Appu" />;
const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => { 
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY + 100; // Add offset for better detection
  
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
   
  const projects = [
    {
      id: 1,
      title: "Food Ordering App",
      description: "A full-stack application for ordering food online with payment integration.",
      tags: ["React", "Django", "Python", ],
      link: "https://github.com/atomrobic/", // Project link
    },
    {
      id: 2,
      title: "Personal Blog Platform",
      description: "A custom blog platform with content management system.",
      tags: ["React", "Django", "Tailwind CSS"],
      link: "https://github.com/atomrobic/", // Project link

    },
    {
      id: 3,
      title: "Movie Database Site",
      description: "A movie browsing application with user reviews and recommendations.",
      tags: ["React", "Python", "API Integration"],
      link: "https://github.com/atomrobic/OTT-PLATFORM", // Project link

    },
    {
      id: 4,
      title: "Hospital Management System",
      description: "An administrative tool for managing hospital resources and patients.",
      tags: ["Django", "React", "Database Design"],
      link: "https://github.com/your-username/food-ordering-app", // Project link

    },
    {
      id: 5,
      title: "Career Portal",
      description: "Job listing and application platform for employers and job seekers.",
      tags: ["React", "Django", "Authentication"],
      link: "https://github.com/atomrobic/", // Project link

    },
    {
      id: 6,
      title: "E-Learning",
      description: "student enroll the course and view the chapter",
      tags: ["React", "Django", "Authentication(jwt)"],
      link: "https://github.com/atomrobic/", // Project link

    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full bg-gray-800 shadow-md z-50 transition-all duration-300 ${
          activeSection !== "home" ? "bg-opacity-100 py-2" : "bg-opacity-70 py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <span
  className={`font-bold transition-all duration-300 font-lobster ${
    activeSection === "home" ? "text-xl" : "text-base"
  }`}
>
  Akhil.A
</span>


            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "projects", "contact"].map((section) => (
               <a
               key={section}
               href={`#${section}`}
               className={`${
                 activeSection === section
                   ? "text-blue-300 mix-blend-difference font-medium"
                   : "text-gray-300 hover:text-blue-400"
               } transition-colors`}
             >
               {section.charAt(0).toUpperCase() + section.slice(1)}
             </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-blue-400"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-800 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["home", "about", "projects", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`${
                    activeSection === section
                      ? "bg-gray-700 text-blue-400"
                      : "text-gray-300"
                  } block px-3 py-2 rounded-md text-base font-medium`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

{/* Hero Section */}
<section
  id="home"
  className="min-h-screen pt-20 flex flex-col items-center justify-center text-white px-1 md:px-10 lg:px-10 xl:px-30 relative overflow-hidden"
>
  {/* Background Image from Unsplash */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    }}
  >
    {/* Light Effect */}
    <motion.div
      className="absolute inset-0 bg-white/20 rounded-full pointer-events-none"
      style={{ width: "200px", height: "200px", mixBlendMode: "overlay" }}
      animate={{ x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - 100; // Center the light effect
        const y = e.clientY - rect.top - 100;
        e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
      }}
    />
  </div>

  {/* Dark Overlay to Improve Readability */}
  <div className="absolute inset-0 bg-black bg-opacity-70"></div>

  {/* Profile Card */}
 
   {/* Profile Card */}
<motion.div
  initial={{ opacity: 0, x: 300 }} // Start off-screen to the right
  whileInView={{ opacity: 1, x: 0 }} // Slide in from the right
  viewport={{ once: true }} // Trigger animation only once
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl mx-auto p-8 bg-gray-800 bg-opacity-80 rounded-2xl shadow-2xl"
>
  {/* Profile Image (Left-Aligned) */}
  {/* Profile Image (Left-Aligned) */}
  <motion.div
  className="relative flex justify-center items-center"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  {/* Profile Image */}
  <motion.img
   src={akhilAppuImage}  alt="Profile"
    className="w-48 h-48 border-4 border-blue-100 object-cover shadow-lg backdrop-blur-lg rounded-full transition-all duration-300 hover:border-blue-400 relative z-10"
    style={{
      boxShadow: "0 0 15px 5px rgba(12, 13, 13, 0.5)", // Light blue blur effect
    }}
    initial={{ x: -30, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    whileHover={{
      scale: 1.05,
    }}
  />

  {/* Glowing Circle Animation */}
 {/* Glowing Circle Animation */}


</motion.div>

  {/* Text Content (Centered) */}
  <div className="md:w-2/3 flex flex-col justify-center items-center text-center">
    {/* Title */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-3xl md:text-4xl font-bold mb-4 text-yellow-300"
    >
      Hi, I'm <span className="text-white">Akhil</span>
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-lg md:text-xl mb-6 text-gray-300"
    >
      Full Stack Developer | Python | Django | React
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <motion.a
        href="#projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        View My Work
        <ArrowRight size={16} className="ml-2" />
      </motion.a>
      <motion.a
        href="#contact"
        className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Contact Me
      </motion.a>
    </motion.div>

    {/* Social Icons */}
    {/* Social Media Icons and Resume Button */}
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex space-x-6 mt-6 justify-center"
      >
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/akhil-a-7186052b5/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110"
        >
          <FaLinkedin size={32} />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/atomrobic"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:text-black transition-transform transform hover:scale-110"
        >
          <FaGithub size={32} />
        </a>

      
      </motion.div>

      {/* Skills Section */}
      <div className="mt-4">
        <SkillsSection />
      </div>
    </div>
</motion.div>
</section>
<section
  id="about"
  className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-15 lg:px-5 py-12 text-white bg-gray-900"
>
  <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
  <Card className="flex-1  bg-gray-800 rounded-lg shadow-lg text-center">
      <CardContent className="flex flex-col items-center">
        <div className="w-full h-80 bg-black rounded-lg flex items-center justify-center overflow-hidden">
          <video
            className="w-full h-full rounded-lg object-fill"
            autoPlay
            muted
            loop
            controls
            poster="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </CardContent>
      <p className="text-center">my projects view</p>
    </Card>

    {/* About Content */}
    <Card className="flex-1 p-6 bg-gray-800 rounded-lg shadow-lg">

    <div className="lottie-container">
    <Lottie
      loop
      animationData={boyAnimation}
      play
      className="lottie-animation"
    />
  </div>
      <CardContent>
        <h2 className="text-4xl font-extrabold font-serif text-gray-400 mb-4 text-center">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          Hi, I'm <span className="font-bold text-white">Akhil</span>, a passionate 
          <span className="text-blue-400"> full-stack developer</span> specializing in 
          <span className="text-green-400"> React</span> and <span className="text-yellow-400">python&Django</span>. 
          I love building interactive and dynamic web applications.
          
        </p>
      </CardContent>
    </Card>

  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-2 text-center text-white"
          >
            My Projects
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-center mb-12"
          >
            Here are some of the projects I've worked on
          </motion.p>

          {/* Projects Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Project Header */}
                <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-gray-100 text-sm rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
  <button className="text-blue-400 font-medium hover:text-blue-300 transition-colors flex items-center">
    View Details <ArrowRight size={16} className="ml-1" />
  </button>
</a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section
  id="qualification"
  className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-12 text-white bg-gray-900 relative overflow-hidden"
>
  {/* Background Gradient */}
  <div
    className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 opacity-50"
  ></div>

  {/* Floating Decorative Elements */}
  <motion.div
    className="absolute top-1/3 left-1/3 w-12 h-12 bg-blue-500 rounded-full opacity-50 blur-xl"
    animate={{ x: [0, 150, 0], y: [0, -100, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
  ></motion.div>

  <motion.div
    className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-purple-500 rounded-full opacity-30 blur-xl"
    animate={{ x: [0, -150, 0], y: [0, 100, 0] }}
    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
  ></motion.div>

  <motion.div
    className="absolute top-1/4 right-1/4 w-10 h-10 bg-green-500 rounded-full opacity-40 blur-lg"
    animate={{ scale: [1, 1.5, 1], rotate: [0, 360, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  ></motion.div>

  <motion.div
    className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-yellow-500 rounded-full opacity-60 blur-md"
    animate={{ x: [-100, 100, -100], y: [100, -100, 100] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  ></motion.div>

  {/* Content Container */}
  <div className="relative z-10 w-full max-w-4xl text-center">
    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-6"
    >
      My Qualifications
    </motion.h2>

    {/* Paragraphs */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg text-gray-300 leading-relaxed"
    >
      I am a <span className="font-bold text-white">Full-Stack Developer</span> with expertise in 
      <span className="text-green-400"> Python</span>, <span className="text-yellow-400">Django</span>, and 
      <span className="text-blue-400"> React</span>. My journey in web development started with a deep interest 
      in technology, and I have continuously refined my skills in both front-end and back-end development.
      
     
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-lg text-gray-300 leading-relaxed mt-4"
    >
      I completed my internship at <span className="font-bold text-white">Mashupstack</span>, where I worked 
      on real-world web development projects, enhancing my expertise in building scalable applications. 
      Currently, I am a <span className="font-bold text-white">Freelance Developer</span>, helping businesses 
      bring their ideas to life with efficient and dynamic web solutions.

        {/* View Resume Button */}
        <a
  href="/public/AKHIL_cv.pdf" // Ensure this is the correct path to your resume
  download="AKHIL_cv.pdf" // Triggers file download instead of opening it
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-blue-400 to-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:from-blue-400 hover:to-blue-500 transition-all duration-300 flex items-center space-x-2"
>
  <FaFileDownload size={22} className="animate-bounce" /> {/* Resume download icon */}
  <span className="font-semibold">Download Resume</span>
</a>

    </motion.p>
  </div>
</section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-12 text-center text-white"
          >
            Get In Touch
          </motion.h2>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-700 rounded-xl shadow-lg p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                {/* Email */}
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-3" size={20} />
                  <span>akhil@example.com</span> 
                </div>
                
                {/* LinkedIn */}
                <div className="flex items-center">
                  <FaLinkedin className="text-blue-600 mr-3" size={20} />
                  <a 
                    href="https://www.linkedin.com/in/akhil-dev" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    linkedin.com/in/akhil-dev
                  </a>
                </div>

                {/* GitHub */}
                <div className="flex items-center">
                  <FaGithub className="text-gray-300 mr-3" size={20} />
                  <a 
                    href="https://github.com/akhil-dev" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    github.com/akhil-dev
                  </a>
                </div>
              </div>
            </div>
              {/* Contact Form */}
              <div className="md:w-1/2">
                <ContactSection/>

              </div> 
            
            </div>
          </motion.div>
        </div>
        
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© {new Date().getFullYear()} Akhil | Full Stack Developer</p>
          <p className="text-gray-400 text-sm">Designed and built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;