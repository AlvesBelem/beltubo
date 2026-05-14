import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
  const reviews = [
    {
      name: "Ageu Barros",
      role: "Cliente",
      text: "Gosto d comprar nessa loja pq realmente tem qualidade os materiais. Fiz uma compra de quase 10 mil reais e a entrega foi excelente.",
      rating: 5,
      date: "3 meses atrás"
    },
    {
      name: "Jorge Almeida",
      role: "Local Guide",
      text: "O atendimento é o diferencial, o Sr. Danilo faz a diferença, sou cliente e sugiro para todos que precisam de tubos e conexões.",
      rating: 5,
      date: "3 meses atrás"
    },
    {
      name: "Eric Marques",
      role: "Local Guide",
      text: "Loja de material de instalação hidráulica muito boa!!! Atendimento também bom!! É muito bem localizado!!",
      rating: 5,
      date: "7 anos atrás"
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0B] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase mb-4">
            QUEM CONFIA, <span className="text-orange-500">INDICA.</span>
          </h2>
          <p className="text-muted-foreground text-lg uppercase tracking-widest">A voz dos nossos clientes no Google</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/[0.03] border-white/5 relative overflow-hidden h-full">
                <CardContent className="p-8">
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-lg text-white mb-8 italic leading-relaxed">
                    "{rev.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-blue-400">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-bold">{rev.name}</p>
                      <p className="text-xs text-muted-foreground uppercase opacity-70">{rev.role} • {rev.date}</p>
                    </div>
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
