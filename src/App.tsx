import { useState, useEffect } from 'react';
import { Trash2, Home, Package, Truck, Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Home,
      title: 'Kellerentrümpelung',
      description: 'Professionelle Entrümpelung Ihres Kellers mit Entsorgung aller Gegenstände'
    },
    {
      icon: Package,
      title: 'Garagenentrümpelung',
      description: 'Komplette Räumung und fachgerechte Entsorgung von Garageninhalt'
    },
    {
      icon: Truck,
      title: 'Haushaltsauflösung',
      description: 'Zuverlässige Auflösung und Entrümpelung kompletter Haushalte'
    }
  ];

  const locations = [
    'Mülheim an der Ruhr',
    'Essen',
    'Oberhausen',
    'Duisburg',
    'Bottrop',
    'Umgebung'
  ];

  const benefits = [
    'Faire und transparente Preise',
    'Schnelle Terminvergabe',
    'Erfahrenes Team',
    'Fachgerechte Entsorgung',
    'Flexible Zeiten',
    'Kostenlose Besichtigung'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Trash2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  space-heroes NRW
                </h1>
                <p className={`text-sm transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}>
                  Ihr Entrümplungs-Experte
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['home', 'leistungen', 'standorte', 'kontakt'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-emerald-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  } ${activeSection === section ? 'text-emerald-500' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('kontakt')}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Jetzt anfragen
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg animate-fadeIn">
            <div className="px-4 py-6 space-y-4">
              {['home', 'leistungen', 'standorte', 'kontakt'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ihr Raum.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Unsere Mission.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Professionelle Entrümpelung von Garagen, Kellern und Haushalten im Ruhrgebiet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('kontakt')}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                Kostenlose Beratung
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('leistungen')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                Unsere Leistungen
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {[
              { icon: Clock, text: 'Schnell & Zuverlässig' },
              { icon: CheckCircle, text: 'Faire Preise' },
              { icon: Truck, text: 'Komplettservice' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <item.icon className="h-10 w-10 text-yellow-300 mx-auto mb-4" />
                <p className="text-white font-semibold text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Von der Garage bis zum kompletten Haushalt – wir schaffen Platz für Neues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-white animate-fadeInUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Warum space-heroes NRW?</h3>
                <p className="text-lg text-emerald-50 mb-6">
                  Wir bieten Ihnen einen Rundum-Service, der keine Wünsche offen lässt.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="text-emerald-50">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="standorte" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Unsere Standorte
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wir sind für Sie im gesamten Ruhrgebiet tätig
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <MapPin className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">{location}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center animate-fadeInUp">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Nicht dabei?</span> Kein Problem! Kontaktieren Sie uns für andere Standorte im Ruhrgebiet.
            </p>
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Kontaktieren Sie uns
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Platz für Neues schaffen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Phone,
                title: 'Telefon',
                content: '+49 123 456 7890',
                link: 'tel:+491234567890'
              },
              {
                icon: Mail,
                title: 'E-Mail',
                content: 'info@space-heroes-nrw.de',
                link: 'mailto:info@space-heroes-nrw.de'
              },
              {
                icon: Clock,
                title: 'Erreichbarkeit',
                content: 'Mo-Sa: 8:00 - 18:00 Uhr',
                link: null
              }
            ].map((contact, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                {contact.link ? (
                  <a
                    href={contact.link}
                    className="text-emerald-300 hover:text-emerald-200 transition-colors"
                  >
                    {contact.content}
                  </a>
                ) : (
                  <p className="text-gray-300">{contact.content}</p>
                )}
              </div>
            ))}
          </div>

          
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg">
                  <Trash2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-white font-bold text-lg">space-heroes NRW</span>
              </div>
              <p className="text-sm">
                Ihr professioneller Partner für Entrümpelung im Ruhrgebiet
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2 text-sm">
                <li>Kellerentrümpelung</li>
                <li>Garagenentrümpelung</li>
                <li>Haushaltsauflösung</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm">
                <li>+49 123 456 7890</li>
                <li>info@space-heroes-nrw.de</li>
                <li>Mo-Sa: 8:00 - 18:00 Uhr</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 space-heroes NRW. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
