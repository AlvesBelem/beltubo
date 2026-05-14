import { Instagram, Phone, MapPin, Droplet } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-black italic tracking-tighter text-blue-500">BELTUBO</span>
            </div>
            <p className="text-muted-foreground italic max-w-sm mb-8">
              A maior especialista em materiais hidráulicos de Belém. 
              Trabalhando com as marcas mais renomadas como Tigre e Deca para garantir o sucesso da sua obra.
            </p>
            <div className="flex gap-4">
               <a href="https://www.instagram.com/beltubo/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-blue-500 transition-colors">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="https://wa.me/5591988091401" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-green-600 transition-colors">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.415-8.414" />
                 </svg>
               </a>
            </div>
          </div>

          <div>
             <h4 className="text-sm font-black uppercase tracking-widest mb-6">Navegação</h4>
             <ul className="space-y-4 text-muted-foreground">
                <li><a href="#" className="hover:text-white transition-colors italic">Início</a></li>
                <li><a href="#produtos" className="hover:text-white transition-colors italic">Produtos</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors italic">Sobre Nós</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors italic">Localização</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-sm font-black uppercase tracking-widest mb-6">Contato</h4>
             <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                   <Phone className="w-4 h-4 text-blue-500" />
                   <span className="italic">(91) 3244-1401</span>
                </li>
                <li className="flex items-start gap-4">
                   <a 
                    href="https://www.google.com/maps/place/Beltubo/@-1.4190662,-48.4664474,17z/data=!3m1!5s0x92a48bef2b06779b:0x937290a4a6e15ee7!4m15!1m8!3m7!1s0x92a48bef2a415fc3:0x8ec19ef1f7a8bff4!2sBeltubo!8m2!3d-1.4191005!4d-48.4664271!10e5!16s%2Fg%2F1thtf69y!3m5!1s0x92a48bef2a415fc3:0x8ec19ef1f7a8bff4!8m2!3d-1.4191005!4d-48.4664271!16s%2Fg%2F1thtf69y?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:text-white transition-colors"
                   >
                      <MapPin className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                      <span className="italic">Av. Pedro Miranda, 2566 <br />Belém - PA</span>
                   </a>
                </li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase font-black tracking-widest italic opacity-50">
          <p>© {currentYear} BELTUBO MATERIAIS HIDRÁULICOS. TODOS OS DIREITOS RESERVADOS.</p>
          <p>DESENVOLVIDO COM FOCO EM QUALIDADE.</p>
        </div>
      </div>
    </footer>
  );
}
