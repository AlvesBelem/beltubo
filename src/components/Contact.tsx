import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const isOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    
    // Simple logic: Mon-Fri 8-18, Sat 8-12
    if (day >= 1 && day <= 5) {
      return hour >= 8 && hour < 18;
    }
    if (day === 6) {
      return hour >= 8 && hour < 12;
    }
    return false;
  };

  return (
    <section id="contato" className="py-24 bg-[#0A0A0B]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase mb-6">
              ESTAMOS <br />
              <span className="text-blue-500">PERTINHO</span> DE VOCÊ.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 italic">
              Visite nossa loja na Pedro Miranda ou entre em contato agora mesmo para um orçamento rápido.
            </p>

            <div className="space-y-8 mb-12">
              <a 
                href="https://www.google.com/maps/place/Beltubo/@-1.4190662,-48.4664474,17z/data=!3m1!5s0x92a48bef2b06779b:0x937290a4a6e15ee7!4m15!1m8!3m7!1s0x92a48bef2a415fc3:0x8ec19ef1f7a8bff4!2sBeltubo!8m2!3d-1.4191005!4d-48.4664271!10e5!16s%2Fg%2F1thtf69y!3m5!1s0x92a48bef2a415fc3:0x8ec19ef1f7a8bff4!8m2!3d-1.4191005!4d-48.4664271!16s%2Fg%2F1thtf69y?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-6 group"
              >
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Endereço</p>
                  <p className="text-white text-lg font-medium group-hover:text-blue-400 transition-colors">Av. Pedro Miranda, 2566 - Pedreira, Belém - PA</p>
                </div>
              </a>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Telefone</p>
                  <p className="text-white text-lg font-medium">(91) 3244-1401</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Horário de funcionamento</p>
                  <div className="flex items-center gap-3">
                    <p className="text-white text-lg font-medium">Seg a Sex: 08:00 - 18:00</p>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      isOpen() ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                    }`}>
                      {isOpen() ? 'Aberto Agora' : 'Fechado Agora'}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">Sábados: 08:00 - 12:00</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button 
                className="h-16 px-10 rounded-2xl bg-orange-500 hover:bg-orange-600 font-bold text-lg group"
                onClick={() => window.open('https://www.instagram.com/beltubo/', '_blank')}
              >
                <Instagram className="mr-2 w-5 h-5" />
                Instagram
              </Button>
              <Button 
                className="h-16 px-10 rounded-2xl bg-green-600 hover:bg-green-700 font-bold text-lg group"
                onClick={() => window.open('https://wa.me/5591988091401', '_blank')}
              >
                <Send className="mr-2 w-5 h-5" />
                Chamar no WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
             <div className="relative h-full min-h-[400px] rounded-[40px] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <iframe 
                  src="https://maps.google.com/maps?q=Beltubo%20Av.%20Pedro%20Miranda,%202566%20Bel%C3%A9m&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
                <a 
                  href="https://www.google.com/maps/place/Beltubo/@-1.4190662,-48.4664474,17z/data=!3m1!5s0x92a48bef2b06779b:0x937290a4a6e15ee7!4m15!1m8!3m7!1s0x92a48bef2a415fc3:0x8ec19ef1f7a8bff4!2sBeltubo!8m2!3d-1.4191005!4d-48.4664271!10e5!16s%2Fg%2F1thtf69y!3m5!1s0x92a48bef2a415fc3:0x8ec19ef1f7a8bff4!8m2!3d-1.4191005!4d-48.4664271!16s%2Fg%2F1thtf69y?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-6 left-6 p-4 bg-white text-black font-black rounded-2xl shadow-xl transform -rotate-3 uppercase tracking-tighter hover:scale-105 transition-transform"
                >
                   LOCALIZE-SE NO MAPA
                </a>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
