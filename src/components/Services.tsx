import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Sparkles, Coffee, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Scissors,
      title: "Premium Haircuts",
      description: "Expert haircuts and styling tailored to your personality and lifestyle.",
      price: "From ₹600"
    },
    {
      icon: Sparkles,
      title: "Beard Grooming",
      description: "Precision beard trimming, shaping, and maintenance for a sharp, clean look.",
      price: "From ₹400"
    },
    {
      icon: Coffee,
      title: "Hot Towel Shave",
      description: "Relaxing traditional wet shave with premium products and techniques.",
      price: "From ₹500"
    },
    {
      icon: Package,
      title: "Grooming Packages",
      description: "Complete grooming services including haircut, beard trim, and facial treatment.",
      price: "From ₹1200"
    }
  ];

  return (
    <section id="services" ref={ref} className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium grooming services designed to make every gentleman look sharp and feel confident.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl bg-card shadow-soft hover:shadow-glow transition-smooth border border-border"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">
                      {service.price}
                    </span>
                   
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
