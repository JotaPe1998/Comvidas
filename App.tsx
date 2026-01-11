import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Heart, 
  Users, 
  Sun, 
  Sparkles,
  ArrowRight,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import Countdown from './components/Countdown';

const App: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#E7EDF3] text-[#333333] overflow-x-hidden">
      {/* Navbar / Top Bar */}
      <header className="bg-[#FDECEC] h-16 border-b border-[#D408431a] flex items-center px-6 sticky top-0 z-50">
        <img 
          src="logo.png" 
          alt="Espaço Comvidas Logo" 
          className="h-10 md:h-12 w-auto object-contain"
        />
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-[#FDECEC] fabric-texture">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-[#D40843] leading-tight mb-10">
            Descubra como sua ancestralidade molda seu presente e abre caminhos para o futuro.
          </h1>
          <button 
            onClick={scrollToPricing}
            className="bg-[#D40843] hover:bg-[#b00636] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto group"
          >
            Garanta sua vaga agora
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-patchwork opacity-20 -rotate-12 translate-x-20 -translate-y-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-patchwork opacity-20 rotate-45 -translate-x-20 translate-y-20"></div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#D40843] mb-8">Sobre o Workshop</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Calendar className="text-[#D40843] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Data</h4>
                    <p>31 de Janeiro de 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Clock className="text-[#D40843] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Horário</h4>
                    <p>09h00 às 13h30</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <MapPin className="text-[#D40843] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Local</h4>
                    <p>Centro Cultural João XXIII – Rua Bambina, 115, Botafogo, Rio de Janeiro</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl relative group">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#D40843] rounded-full flex items-center justify-center text-white shadow-lg z-20">
                <Users className="w-6 h-6" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 border-4 border-[#FDECEC]">
                <img 
                  src="facilitadores.png" 
                  alt="Isaias e Maria Leonor Araujo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Seus Facilitadores</h3>
              <div className="text-center space-y-1">
                <p className="text-xl font-semibold text-[#D40843]">Isaias Bezerra de Araujo</p>
                <p className="text-xl font-semibold text-[#D40843]">& Maria Leonor Ferreira de Araujo</p>
              </div>
              <p className="text-center mt-4 text-sm text-gray-500 italic">
                Especialistas em dinâmicas sistêmicas e cura familiar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quilt Metaphor Section */}
      <section className="py-24 px-6 bg-white fabric-texture relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-8">
            <span className="text-6xl block leading-none">🧵</span>
          </div>
          <h2 className="text-4xl font-bold text-[#D40843] mb-12">Se a vida fosse comparada a uma colcha de retalhos...</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#E7EDF3] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-lg italic font-serif leading-relaxed mb-4">
                "Qual o tipo de pano seriam os retalhos da sua vida? De onde vieram?"
              </p>
              <p className="text-lg italic font-serif leading-relaxed">
                "Quais os tecidos que estão presentes em sua história?"
              </p>
            </div>
            <div className="bg-[#FDECEC] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-lg italic font-serif leading-relaxed mb-4">
                "Seus projetos são formados por que tipo de tecido?"
              </p>
              <p className="text-lg italic font-serif leading-relaxed text-[#D40843] font-bold">
                A constelação familiar pode integrar os diversos retalhos de sua história na composição de seus projetos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#D40843] mb-4">Benefícios Transformadores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Prepare-se para uma jornada de introspecção, cura e reequilíbrio emocional.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard 
              icon={<Heart className="w-8 h-8 text-[#D40843]" />}
              title="Reconexão Profunda"
              text="Reconecte-se com suas raízes e compreenda as dinâmicas ocultas da sua família."
            />
            <BenefitCard 
              icon={<Users className="w-8 h-8 text-[#D40843]" />}
              title="Integração de História"
              text="Integre partes da sua história para fortalecer seus projetos e propósitos atuais."
            />
            <BenefitCard 
              icon={<Sun className="w-8 h-8 text-[#D40843]" />}
              title="Libertação de Padrões"
              text="Libertar-se de padrões repetitivos que limitam sua prosperidade e felicidade."
            />
            <BenefitCard 
              icon={<ShieldCheck className="w-8 h-8 text-[#D40843]" />}
              title="Acolhimento Real"
              text="Viva uma experiência única de acolhimento em um ambiente seguro e transformador."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white fabric-texture">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#D40843] mb-16">Escolha sua forma de participar</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Constelado Option */}
            <div className="border-4 border-[#D40843] rounded-3xl p-8 bg-white shadow-2xl relative overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 bg-[#D40843] text-white px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-widest">Mais Procurado</div>
              <h3 className="text-2xl font-bold mb-4">Para ser Constelado(a)</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                O foco da sessão será a sua questão específica. Trabalharemos os seus retalhos para criar harmonia em seu sistema.
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-[#D40843]">R$ 599,90</span>
                <p className="text-xs text-gray-400 mt-1">Vagas limitadíssimas por evento</p>
              </div>
              <button className="w-full bg-[#D40843] hover:bg-[#b00636] text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                Quero ser constelado <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Support Option */}
            <div className="border-2 border-gray-200 rounded-3xl p-8 bg-[#E7EDF3] shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Apoio em Grupo</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Participe como representante ou observador, vivenciando o campo sistêmico e colhendo benefícios da experiência coletiva.
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-[#333333]">R$ 79,90</span>
                <p className="text-xs text-gray-500 mt-1">Oportunidade ideal para conhecer o trabalho</p>
              </div>
              <button className="w-full bg-white text-[#333333] border-2 border-[#D40843] hover:bg-[#D40843] hover:text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                Participar como apoio <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center bg-[#FDECEC] relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#D40843] mb-6">
            “Garanta sua vaga agora – lugares limitados!”
          </h2>
          <p className="text-xl mb-12">Dê o primeiro passo para costurar uma nova história.</p>
          
          <div className="mb-12 bg-white/50 p-8 rounded-3xl backdrop-blur-sm border border-white">
            <Countdown />
          </div>

          <button 
            onClick={scrollToPricing}
            className="bg-[#D40843] hover:bg-[#b00636] text-white px-12 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto"
          >
            Reservar meu Lugar <Sparkles className="w-6 h-6" />
          </button>
        </div>
        
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-patchwork"></div>
      </section>

      {/* Footer / Enclosure */}
      <footer className="py-20 px-6 bg-[#E7EDF3]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-[#D40843] mb-6 italic">
            “Mais do que um workshop, uma experiência mágica que ficará bordada para sempre na sua memória.”
          </h2>
          <div className="flex justify-center gap-8 mb-12">
            <div className="w-12 h-px bg-[#D40843] self-center"></div>
            <div className="text-sm uppercase tracking-widest text-gray-500">2026 • Constelação Familiar RJ</div>
            <div className="w-12 h-px bg-[#D40843] self-center"></div>
          </div>
          <p className="text-gray-400 text-xs">
            © 2026 Workshop de Constelação Familiar. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, text }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-[#D4084333] transition-all hover:shadow-xl group">
    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
  </div>
);

export default App;