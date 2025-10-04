import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {Scissors, Award, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });


const features = [
  {
    icon: Scissors, // existing icon
    title: "Professional Haircuts",
    description: "From classic styles to modern trends, we craft the perfect cut for every gentleman."
  },
  {
    icon: Award, // use award for premium beard & shave service
    title: "Beard & Shave",
    description: "Precision beard styling and luxury shaves designed to enhance your look."
  },
  {
    icon: Users, // use users icon to represent comfort & personal attention
    title: "Relaxing Experience",
    description: "Unwind in a modern salon atmosphere with expert care and comfort."
  }
];


  return (
    <section id="about" ref={ref} className="py-24 px-4 subtle-gradient">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Story
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        At Glowory Studio, we believe grooming is more than just a haircut — it’s a lifestyle. Our expert stylists specialize in modern and classic men’s grooming, offering premium services that help you look sharp and feel confident. Step into a relaxing space where style meets precision. </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-glow transition-smooth"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
