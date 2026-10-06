// src/pages/Apropos.tsx

import { useState, useEffect } from "react";

import phoneIcon from "../assets/phone-icon.png";
import emailIcon from "../assets/mail-icon.png";
import locationIcon from "../assets/location-icon.png";
import facebookWhiteIcon from "../assets/facebook-white.png";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok.png";
import logoUpslon from "../assets/logovioletupslon.png";
import logouUpslon from "../assets/logo-upslon.png";
import casClientsHero from "../assets/Apropos.png";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import equipe from "../assets/equipe.jpg";
import missionImage from "../assets/vision.jpg";
import arrowRightWhite from "../assets/arrow-right-white.png";
import linkedinIcon from "../assets/linkedin-white.png";
import twiterIcon from "../assets/x-white.png";
import facebookIcon from "../assets/facebook.png";
import cercleViolet from "../assets/cercleviolet.png";
import playBlanc from "../assets/boutonplay.png";


const scrollToHomeContact = () => {
  const isHome = window.location.pathname === "/" || window.location.pathname === "/index.html";

  if (isHome) {
   
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "auto" });  
    }
  } else {
   
    window.location.href = "/#contact";
  }
};

const Apropos = () => {
  const container = "w-full max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32";
  const [scrolled, setScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
let timeout: any;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    if (window.location.hash === "#contact") {
      
      if (!["/", "/index.html"].includes(window.location.pathname)) {
        window.location.href = "/#contact";
      }
    }
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 100);

    setHideNavbar(false);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setHideNavbar(true);
    }, 2000);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    clearTimeout(timeout);
  };
}, []);

  return (
    <div className="bg-white font-sans">

      {/* TOP BAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center bg-[#471F40] text-white shadow-lg transition-all duration-500 cursor-pointer ${
          scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100 cursor-pointer"
        }`}
      >
        <div className={container}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6 lg:gap-10 text-sm lg:text-base">
              <a href="tel:+22901610776" className="flex items-center gap-3 hover:underline transition">
                <img src={phoneIcon} alt="Téléphone" className="w-6 h-6 lg:w-7 lg:h-7" />
                (+229) 01 92 59 43 68
              </a>
              <a href="mailto:contact@upsiloncs.com" className="hidden lg:flex items-center gap-3 hover:underline transition">
                <img src={emailIcon} alt="Email" className="w-6 h-6 lg:w-7 lg:h-7" />
                contact@upsiloncs.com
              </a>
              <span className="hidden xl:flex items-center gap-3">
                <img src={locationIcon} alt="Localisation" className="w-6 h-6 lg:w-7 lg:h-7" />
                  Ilot120-Mission Baptiste Méridionale,Zone Résidentielle,Cotonou 
              </span>
            </div>
            <div className="flex gap-6 lg:gap-8">
              <img src={facebookWhiteIcon} alt="Facebook" className="w-6 h-6 hover:opacity-80 cursor-pointer transition" />
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6 hover:opacity-80 cursor-pointer transition" />
              <img src={tiktokIcon} alt="TikTok" className="w-6 h-6 hover:opacity-80 cursor-pointer transition" />
            </div>
          </div>
        </div>
      </header>

      {/* NAVBAR */}
     <nav
  className={`left-0 right-0 z-40 transition-all duration-500 ${
    scrolled
      ? `fixed top-0 bg-white shadow-xl border-b border-gray-100 ${
          hideNavbar ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`
      : "absolute top-[70px] bg-transparent"
  }`}
>
        <div className={`${container} mx-auto flex justify-between items-center px-6 lg:px-12 py-6`}>
          <a href="/">
            <img
              src={scrolled ? logoUpslon : logouUpslon}
              alt="Upsilon Consulting"
              className="h-12 lg:h-14 transition-all duration-500"
            />
          </a>

          <ul
            className={`hidden lg:flex gap-10 font-medium text-lg transition-all duration-500 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <li><a href="/" className="hover:text-[#6B2D5C] transition">Accueil</a></li>
            <li>
              <a href="/apropos" className={scrolled ? "text-[#6B2D5C] font-bold" : "text-white font-bold"}>
                À propos de nous
              </a>
            </li>
            <li><a href="/services" className="hover:text-[#6B2D5C] transition">Nos Services</a></li>
            <li><a href="/Casclients" className="hover:text-[#6B2D5C] transition">Clients</a></li>
          </ul>
          <button
            onClick={scrollToHomeContact}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-500 ${
              scrolled
                ? "bg-[#6B2D5C] text-white hover:bg-[#5a1f4a]"
                : "bg-white/20 backdrop-blur-md text-white border border-white/40 hover:bg-white hover:text-[#6B2D5C] cursor-pointer"
            }`}
          >
            Contactez-nous
          </button>
        </div>
      </nav>

    
      <div className={`transition-all duration-500 ${scrolled ? "h-0" : "h-[70px]"}`} />

      {/* HERO */}
      <section
        className="relative h-96 md:h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${casClientsHero})` }}
      >
        <div className="absolute inset-0 bg-[#6B2D5C]/90"></div>
        <div className="relative h-full flex items-center justify-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center max-w-6xl leading-tight">
            À propos de nous
          </h1>
        </div>
      </section>

      {/* À PROPOS DE NOUS */}
      <section className="py-24 lg:py-32">
        <div className={container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="hidden lg:block relative h-[520px]">
              <div className="absolute rounded-2xl overflow-hidden shadow-2xl" style={{ top: '0', left: '0', width: '280px', height: '400px' }}>
                <img src={team1} alt="Équipe Upsilon" className="w-full h-full object-cover" />
              </div>
              <div className="absolute rounded-2xl overflow-hidden shadow-2xl" style={{ top: '60px', left: '300px', width: '280px', height: '180px' }}>
                <img src={team2} alt="Réunion" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bg-white shadow-2xl flex items-center justify-end pr-6 rounded-2xl" style={{ top: '220px', left: '100px', width: '350px', height: '130px' }}>
                <div className="relative w-28 h-28 cursor-pointer group">
                  <img src={cercleViolet} alt="" className="w-full h-full" />
                  <img src={playBlanc} alt="Play" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 transition-transform group-hover:scale-110 duration-300" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#6B2D5C] mb-6">À propos de nous</h2>
              <h3 className="text-2xl lg:text-3xl font-semibold mb-8 text-[#471F40]">Nous croyons en la puissance des idées</h3>
              <p className="text-lg lg:text-xl text-gray-700 mb-12 leading-relaxed">
                Chez Upsilon Consulting, nous croyons que chaque idée mérite de devenir une réalité.
                Notre mission est d’accompagner les entreprises et institutions dans leur transformation digitale,
                en mettant la technologie au service de leurs ambitions.
              </p>
              <button
                onClick={scrollToHomeContact}
                className="inline-flex items-center gap-4 bg-[#6B2D5C] text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#5a264d] transition-all shadow-lg cursor-pointer"
              >
                Contactez-nous
                <img src={arrowRightWhite} alt="" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE VISION */}
      <section className="bg-[#471F40] py-20 lg:py-24">
        <div className={container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-white -mt-32">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-none">Notre Vision</h2>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                Accélérer la transformation digitale en Afrique en développant des solutions technologiques qui modernisent les institutions, renforcent les entreprises et favorisent l’inclusion économique et numérique.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-3xl overflow-hidden shadow-2xl w-full max-w-[400px] lg:max-w-[600px]">
                <img src={missionImage} alt="Notre vision" className="w-full max-w-[1300px] h-[380px] lg:h-[420px] object-cover block" />
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* NOTRE ÉQUIPE */}
      <section className="py-24 bg-gray-50">
        <div className={container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-20">
        
            <div className="hidden lg:block max-w-md mx-auto lg:pr-2 w-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl ">
                <img 
                  src={equipe} 
                  alt="L'équipe Upsilon Consulting en action" 
                  className="w-full max-w-[1800px] h-[520px] lg:h-[510px] object-cover block"
                />
              </div>
            </div>

              
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#6B2D5C] mb-4">Notre Équipe</h2>
              
              <div className="space-y-6">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed ">
                  Chez Upsilon Consulting, notre équipe réunit des experts en ingénierie numérique, en architecture des systèmes et en transformation digitale, engagés à concevoir des solutions technologiques à fort impact.
                </p>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed ">
                  Nous combinons expertise technique, compréhension des enjeux métiers et connaissance des réalités africaines pour accompagner les institutions et les entreprises dans leurs projets de modernisation et d’innovation.
                </p>
                <p className="text-lg lg:text-xl text-[#471F40] leading-relaxed font-medium ">
                  Animée par une culture d’excellence, de collaboration et d’innovation, notre équipe œuvre chaque jour à développer des solutions numériques performantes, durables et adaptées aux défis du continent.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            
            {/* MANAGEMENT */}
            <div className="bg-white p-10 rounded-2xl shadow-md border-t-4 border-[#6B2D5C] hover:shadow-xl transition-shadow   duration-300 ease-out 
               hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ">
              <h4 className="text-xl font-bold text-[#471F40] mb-1">Chef de Projet & PO</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Ils sont le pont entre vos besoins et nos experts. Ils assurent le respect des délais, du budget et de la qualité finale du produit (Product Ownership).
              </p>
            </div>

            {/* DESIGN */}
            <div className="bg-white p-10 rounded-2xl shadow-md border-t-4 border-[#6B2D5C] hover:shadow-xl transition-shadow  duration-300 ease-out 
                hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ">
              <h4 className="text-xl font-bold text-[#471F40] mb-1"> Designers UX/UI</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Spécialistes de l'ergonomie, ils conçoivent des interfaces intuitives et esthétiques qui captivent vos utilisateurs dès le premier regard.
              </p>
            </div>

            {/* FRONT-END */}
            <div className="bg-white p-10 rounded-2xl shadow-md border-t-4 border-[#6B2D5C] hover:shadow-xl transition-shadow  duration-300 ease-out 
                hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ">
              <h4 className="text-xl font-bold text-[#471F40] mb-1">Développeurs Front-End</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Ils donnent vie aux maquettes. Experts en React et intégration, ils créent des sites rapides, fluides et parfaitement adaptés aux mobiles.
              </p>
            </div>

            {/* BACK-END */}
            <div className="bg-white p-10 rounded-2xl shadow-md border-t-4 border-[#6B2D5C] hover:shadow-xl transition-shadow  duration-300 ease-out 
                hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ">
              <h4 className="text-xl font-bold text-[#471F40] mb-1">Développeurs Back-End</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Les architectes de l'ombre. Ils développent les moteurs de vos applications, gèrent les bases de données et assurent la sécurité des systèmes.
              </p>
            </div>

            {/* Cybersécurité */}
            <div className="bg-white p-10 rounded-2xl shadow-md border-t-4 border-[#6B2D5C] hover:shadow-xl transition-shadow  duration-300 ease-out 
                 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ">
              <h4 className="text-xl font-bold text-[#471F40] mb-1">Analyste en Cybersécurité</h4>
              <p className="text-gray-600 text-base leading-relaxed">
               Ils testent la vulnérabilité des systèmes et garantissent la protection des données, en identitifiant les failles de sécurité, en mettant en place des mesures de prévention et en assurant une surveillance continue pour détecter et contrer les cyberattaques.
              </p>
            </div>
      
            {/* Developpement DevOps*/}
            <div className="bg-white p-10 rounded-2xl shadow-md border-t-4 border-[#6B2D5C] hover:shadow-xl transition-shadow  duration-300 ease-out 
                hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ">
              <h4 className="text-xl font-bold text-[#471F40] mb-1 ">Developpeur DevOps</h4>
              <p className="text-gray-600 text-base leading-relaxed ">
               Les DevOps créent, testent, déploient et maintiennent des applications en automatisant les processus et en assurant une collaboration entre développement et exploitation.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="h-6 lg:h-4"></div>

      {/* FOOTER */}
      <footer className="bg-[#473146] text-white">
        <div className="py-20">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <img src={logouUpslon} alt="Upsilon Consulting" className="h-14 mb-4" />
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Votre partenaire de confiance. Nous créons des solutions innovantes qui propulsent votre entreprise vers le succès.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold text-xl mb-6">Liens</h3>
                <ul className="space-y-4 text-gray-300 mb-6">
                  <li><a href="/" className="hover:text-white transition">Accueil</a></li>
                  <li><a href="/apropos" className="hover:text-white transition">À propos</a></li>
                  <li><a href="/services" className="hover:text-white transition">Services</a></li>
                    <li><a href="/casclients" className="hover:text-white transition">Clients</a></li>
                
                </ul>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="font-bold text-xl mb-6">Contact</h3>
                <ul className="space-y-4 text-gray-300">
                  <li><a href="mailto:contact@upsiloncs.com" className="hover:text-white transition">contact@upsiloncs.com</a></li>
                  <li><a href="tel:+22901610776" className="hover:text-white transition">(+229) 01 92 59 43 68</a></li>
                  <li>Ilot120-Mission Baptiste Méridionale,Zone Résidentielle,Cotonou </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 mt-16 pt-10 text-gray-400 text-center">
              <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
                <div className="flex gap-8">
                  <img src={linkedinIcon} alt="" className="w-6 h-6 hover:opacity-80 cursor-pointer" />
                  <img src={facebookIcon} alt="" className="w-6 h-6 hover:opacity-80 cursor-pointer" />
                  <img src={twiterIcon} alt="" className="w-6 h-6 hover:opacity-80 cursor-pointer" />
                </div>
                <p className="text-center mt-4 md:ml-40">Produit par Upsilon Consulting</p>
                <p className="text-center">© 2025 Upsilon Consulting. Tous droits réservés.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Apropos;