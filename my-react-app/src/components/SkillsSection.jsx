import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaCss3, FaBootstrap } from "react-icons/fa";
import { SiDjango, SiPostgresql,SiSelenium, SiMysql, SiTailwindcss, SiFastapi } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500 text-4xl sm:text-3xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500 text-4xl sm:text-3xl" /> },
  { name: "Django", icon: <SiDjango className="text-green-600 text-4xl sm:text-3xl" /> },
  { name: "Selenium", icon: <SiSelenium className="text-green-400 text-4xl sm:text-3xl" /> }, // Added Selenium
  { name: "CSS", icon: <FaCss3 className="text-blue-600 text-4xl sm:text-3xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-4xl sm:text-3xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400 text-4xl sm:text-3xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 text-4xl sm:text-3xl" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-4xl sm:text-3xl" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-green-500 text-4xl sm:text-3xl" /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-6 px-4 sm:px-2">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-xl font-bold text-center text-white"
      >
        My Skills
      </motion.h2>

      {/* Skills Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 }, // Sequential animation
          },
        }}
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-2 justify-center"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="bg-gray-700 rounded-lg shadow-md px-4 py-3 flex flex-col items-center space-y-2 relative"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(255,255,255,0)",
                  "0px 0px 12px rgba(35, 128, 210, 0.05)",
                  "0px 0px 0px rgba(255,255,255,0)",
                ],
                scale: [1, 1.2, 1], // Slow zoom in and out
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                delay: index * 0.3, // Slower staggered effect
              }}
            >
              {skill.icon}
            </motion.div>
            <span className="text-gray-100 font-medium text-sm sm:text-lg">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
