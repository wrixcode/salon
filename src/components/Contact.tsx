"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [showMessage, setShowMessage] = useState(false);

  const contactInfo = [
    { icon: MapPin, title: "Visit Us", content: "MG Road, Ernakulam, Kochi, Kerala 682016" },
    { icon: Phone, title: "Call Us", content: "+91 98765 43210" },
    { icon: Mail, title: "Email Us", content: "glowory@gmail.com" },
    { icon: Clock, title: "Hours", content: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM" },
  ];

  // 📨 Handle Web3Forms submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      formRef.current.reset(); // clear form
      setShowMessage(true); // show success message

      // hide after 5 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    } catch (err) {
      // ignore errors for now
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-4 subtle-gradient">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the Glowory Studio difference? Book your appointment today
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 w-full"
            >
              {/* Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="YOUR_WEB3FORMS_ACCESS_KEY"
              />

              <Input name="name" placeholder="Your Name" required className="h-12 rounded-xl w-full" />
              <Input type="email" name="email" placeholder="Your Email" required className="h-12 rounded-xl w-full" />
              <Input type="tel" name="phone" placeholder="Your Phone" className="h-12 rounded-xl w-full" />
              <Textarea name="message" placeholder="Your Message" required className="min-h-32 rounded-xl w-full" />

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
              </Button>

              {/* ✅ Temporary Success Message */}
              {showMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 font-medium mt-2"
                >
                  ✅ Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-sm text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
