import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Instagram, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Localização', href: '#contato' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <span className="text-2xl font-black tracking-tighter text-blue-900 dark:text-blue-400 italic">BELTUBO</span>
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-orange-500 transition-colors uppercase tracking-widest text-muted-foreground hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="rounded-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all">
            <Phone className="w-4 h-4 mr-2" />
            (91) 3244-1401
          </Button>
          <Button 
            size="sm" 
            className="rounded-full bg-blue-900 hover:bg-blue-800 text-white shadow-lg shadow-blue-500/20"
            onClick={() => window.open('https://wa.me/5591988091401', '_blank')}
          >
            WhatsApp
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-bold hover:text-orange-500"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col gap-4 mt-8">
                   <Button variant="outline" className="w-full border-orange-500 text-orange-500">
                    <Phone className="w-4 h-4 mr-2" />
                    (91) 3244-1401
                  </Button>
                  <Button 
                    className="w-full bg-blue-900"
                    onClick={() => window.open('https://wa.me/5591988091401', '_blank')}
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
