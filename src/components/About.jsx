import { motion } from "framer-motion";
import { Profile } from "../data/portfolio";
import { Download, MapPin, Mail, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section py-20 text-white" style={{ backgroundColor: "#0a192f" }}>
      <div className="container mx-auto px-6 grid md:grid-cols-[2fr_1fr] gap-12 items-center">
        
        {/* Left: Professional Summary */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900 p-8 rounded-2xl shadow-lg hover:shadow-brand-500/30 transition-shadow duration-300"
        >
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            I am a <span className="font-semibold">Computer Science undergraduate at VIT AP University</span> 
            with a strong interest in <span className="text-brand-400">Software Development, Full-Stack Engineering, and Data Analysis</span>.  
            I enjoy building clean, scalable applications and exploring the intersection of <span className="font-semibold">technology and problem-solving</span>.  
            With hands-on experience through internships, training, and projects, I aim to deliver solutions that are both functional and impactful.  
          </p>

          <div className="flex gap-4">
            <a
              href={`${import.meta.env.BASE_URL}RESUME.pdf`} // place resume.pdf in public/
              download="RESUME.pdf"
              className="btn flex items-center gap-2"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right: Quick Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900 p-8 rounded-2xl shadow-lg hover:shadow-brand-500/30 transition-shadow duration-300 space-y-4 self-center"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Quick Info</h3>
          <div className="space-y-3 text-zinc-300">
            <p className="flex items-center gap-2">
              <MapPin size={18} className="text-brand-400" /> {Profile.location}
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-brand-400" /> {Profile.email}
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} className="text-brand-400" /> {Profile.phone}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}



