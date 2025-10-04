import { Instagram, Facebook, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Glowory Studio</h3>
            <p className="text-background/80 mb-4">
              Where beauty meets excellence. Your journey to radiance begins here.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-background/80 hover:text-background transition-smooth">Services</a></li>
              <li><a href="#gallery" className="text-background/80 hover:text-background transition-smooth">Gallery</a></li>
              <li><a href="#testimonials" className="text-background/80 hover:text-background transition-smooth">Testimonials</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-background transition-smooth">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <p className="text-background/80 mb-4">
           +91 98765 43210
            </p>
             <p className="text-background/80 mb-4">
          glowory@gmail.com
            </p>
           
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p className="flex items-center justify-center gap-2">
            Made with spabrix by Glowory Studio © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
