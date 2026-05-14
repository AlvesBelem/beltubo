import { motion } from 'motion/react';
import { Shield, Target, Users, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Anos de História', val: '25+', icon: <Award className="w-6 h-6" /> },
    { label: 'Produtos Catálogo', val: '5k+', icon: <Shield className="w-6 h-6" /> },
    { label: 'Clientes Felizes', val: '10k+', icon: <Users className="w-6 h-6" /> },
  ];

  return (
    <section id="sobre" className="py-24 bg-[#0A0A0B] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] bg-gradient-to-tr from-blue-600/20 to-orange-500/20 border border-white/10 relative overflow-hidden group">
               {/* Abstract placeholder for store photo aesthetic */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-40 group-hover:opacity-60 scale-110 group-hover:scale-100"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent"></div>
               
               <div className="absolute bottom-10 left-10 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl max-w-xs">
                  <p className="text-white font-black italic text-2xl tracking-tighter leading-none mb-2">TRADIÇÃO EM BELÉM</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-widest">Desde o início focados na excelência hidráulica.</p>
               </div>
            </div>
            
            {/* Floating accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase mb-8">
              MAIS QUE UMA LOJA, <br />
              <span className="text-blue-500 text-6xl md:text-8xl">PARCEIROS.</span>
            </h2>
            <p className="text-xl text-muted-foreground italic leading-relaxed mb-10">
              A Beltubo nasceu com o propósito de suprir a carência de materiais hidráulicos de alta qualidade em Belém. 
              Hoje, somos referência técnica, ajudando de pequenos reparos residenciais a grandes obras verticais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
               {stats.map((s, i) => (
                 <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/[0.08] transition-colors">
                    <div className="text-blue-500 mb-4">{s.icon}</div>
                    <p className="text-3xl font-black text-white italic">{s.val}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest leading-tight mt-1">{s.label}</p>
                 </div>
               ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white font-medium">
                 <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                 <p className="italic">Revendedor Autorizado Tigre e Deca</p>
              </div>
              <div className="flex items-center gap-4 text-white font-medium">
                 <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                 <p className="italic">Consultoria Técnica Especializada</p>
              </div>
              <div className="flex items-center gap-4 text-white font-medium">
                 <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                 <p className="italic">Logística Própria para Entrega Rápida</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
