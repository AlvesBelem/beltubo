import { motion } from 'motion/react';
import { Droplet, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0B]">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-template-columns: 1.2fr 0.8fr gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20 mb-6 px-4 py-1 text-sm font-semibold uppercase tracking-widest">
              Referência em Belém
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              QUALIDADE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">HIDRÁULICA</span><br />
              DE ELITE.
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Soluções completas para sua obra com as melhores marcas do mercado. 
              Especialistas em tubos, conexões e economia real de água para sua casa ou empresa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-7 text-lg group">
                Conhecer Produtos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/10 hover:bg-white/5 rounded-full px-8 py-7 text-lg text-white"
                onClick={() => window.open('https://wa.me/5591988091401', '_blank')}
              >
                Falar com Especialista
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/5 pt-8">
              {[
                { label: 'Tigre & Deca', sub: 'Marcas Premium' },
                { label: 'Entrega Rápida', sub: 'Toda Belém' },
                { label: 'Economia', sub: 'Linha Poupa Água' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-white font-bold text-lg">{item.label}</span>
                  <span className="text-muted-foreground text-sm uppercase tracking-tighter">{item.sub}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Featured Product Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-[40px] p-8 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-3xl -mr-10 -mt-10"></div>
              
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-blue-500/20 rounded-2xl">
                  <Droplet className="w-8 h-8 text-blue-400" />
                </div>
                <Badge variant="outline" className="text-blue-400 border-blue-400">Destaque do Mês</Badge>
              </div>

              <div className="space-y-6">
                <h3 className="text-4xl font-black text-white italic tracking-tighter">POUPA ÁGUA</h3>
                <p className="text-lg text-muted-foreground">
                  "Quer economizar na sua conta de água? Nós temos a solução definitiva."
                </p>
                <div className="space-y-3">
                   {['Instalação em minutos', 'Economia imediata', 'Alta durabilidade'].map(text => (
                     <div key={text} className="flex items-center gap-3 text-white">
                       <CheckCircle2 className="w-5 h-5 text-blue-500" />
                       <span className="font-medium">{text}</span>
                     </div>
                   ))}
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/5 rounded-3xl border border-white/5">
                 <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">A partir de</p>
                      <p className="text-2xl font-black text-white">R$ 49,90</p>
                    </div>
                    <Button variant="ghost" className="text-blue-400 font-bold hover:text-blue-300">
                      Ver detalhes
                    </Button>
                 </div>
              </div>
            </div>

            {/* Floating labels */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -right-6 bg-orange-500 text-white font-black py-4 px-6 rounded-2xl transform rotate-12 shadow-xl"
            >
              SALVE ATÉ 50%
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
