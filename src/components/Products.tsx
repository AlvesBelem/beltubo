import { motion } from 'motion/react';
import { Layers, Waves, Pipette as Pipe, Settings, Lightbulb, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Products() {
  const categories = [
    {
      title: 'Tubos e Conexões',
      icon: <Pipe className="w-8 h-8" />,
      desc: 'Linha completa Tigre para água fria, quente e esgoto.',
      color: 'blue'
    },
    {
      title: 'Metais Sanitários',
      icon: <Waves className="w-8 h-8" />,
      desc: 'Torneiras, chuveiros e acessórios Deca com design moderno.',
      color: 'orange'
    },
    {
      title: 'Caixas d\'Água',
      icon: <Layers className="w-8 h-8" />,
      desc: 'Reservatórios de alta resistência e vedação completa.',
      color: 'blue'
    },
    {
      title: 'Reparos e Válvulas',
      icon: <Settings className="w-8 h-8" />,
      desc: 'Soluções para manutenção e vazamentos em minutos.',
      color: 'orange'
    },
    {
      title: 'Drenagem e Calhas',
      icon: <Lightbulb className="w-8 h-8" />,
      desc: 'Sistemas inteligentes para gestão de águas pluviais.',
      color: 'blue'
    },
    {
      title: 'Equipamentos',
      icon: <ShieldCheck className="w-8 h-8" />,
      desc: 'Bombas e pressurizadores de alta performance.',
      color: 'orange'
    },
  ];

  return (
    <section id="produtos" className="py-24 bg-[#0A0A0B] relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-6 uppercase">
              SOLUÇÕES <span className="text-blue-500">INTELIGENTES</span>
            </h2>
            <p className="text-muted-foreground text-lg italic">
              Trabalhamos apenas com marcas líderes para garantir que sua obra não tenha problemas no futuro. 
              Tecnologia e durabilidade em cada conexão.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="text-right">
                <p className="text-2xl font-black text-white">+5.000</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Produtos em estoque</p>
             </div>
             <div className="w-[1px] h-12 bg-white/10"></div>
             <div className="text-right">
                <p className="text-2xl font-black text-white">4.3★</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Avaliação Google</p>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-blue-500/50 transition-all duration-500 group overflow-hidden h-full">
                <CardContent className="p-10 relative">
                  <div className={`mb-8 p-4 rounded-2xl inline-block transition-colors duration-500 ${
                    cat.color === 'blue' ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white' : 'bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white'
                  }`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500 uppercase italic tracking-tighter">
                    {cat.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-white transition-colors duration-500 leading-relaxed italic">
                    {cat.desc}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    {cat.icon}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
