// src/pages/Casclients.tsx

import { useState, useEffect } from "react";

// Images projets
import psieImage from "../assets/psie.jpg";
import mmteImage from "../assets/mmtertts.jpg";
import amoImage from "../assets/amoexx.jpg";
import saphirImage from "../assets/saphirr.jpg";
import Heroclient from "../assets/heroclients.jpg";
import sominexImage from "../assets/sominex.jpg";

// Logos
import logoUpslon from "../assets/logovioletupslon.png";
import logouUpslon from "../assets/logo-upslon.png";

// Icônes
import phoneIcon from "../assets/phone-icon.png";
import mailIcon from "../assets/mail-icon.png";
import locationIcon from "../assets/location-icon.png";
import facebookWhiteIcon from "../assets/facebook-white.png";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok.png";
import linkedinIcon from "../assets/linkedin-white.png";
import twiterIcon from "../assets/x-white.png";
import facebookIcon from "../assets/facebook.png";

const goToHomeContact = () => {
  if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/#contact";
  }
};

const Casclients = () => {
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

  const cases = [
    {
      title: "PSIE",
      description: "Développement d’une plateforme nationale d’accompagnement à l’emploi des jeunes:",
      features: [
        "Profilage, offres d’emploi, parcours d’accompagnement",
        "Suivi des stages, formations, contrats",
        "Portails jeunes, entreprises, opérateurs",
      ],
      impact: "+10 000 jeunes accompagnés, simplification des traitements, meilleure gouvernance.",
      image: psieImage,
    },
    {
      title: "MMTE",
      description: "Nous accompagnons les autorités douanières, portuaires et logistiques dans la digitalisation du suivi des marchandises sous régime douanier:",
      features: [
        "Suivi automatisé des marchandises",
        "Interconnexion avec CustomsWeb, GUCE, opérateurs de quai",
        "Calcul des délais de séjour",
        "Reporting & indicateurs",
      ],
      impact: "+70 % de traçabilité, réduction des erreurs, transparence accrue.",
      image: mmteImage,
    },
    {
      title: "AMO Expertise",
      description: "Développement d’une solution intégrée couvrant:",
      features: [
        "Gestion RH chantier",
        "Paie",
        "Suivi via QR code et notation des performances",
      ],
      impact: "Modernisation accélérée, réduction des tâches manuelles, pilotage optimisé.",
      image: amoImage,
    },
    {
      title: "SAPHIR Asset Management",
      description: "Modernisation du système d’information de gestion d’actifs financiers, avec conformité BCEAO/UEMOA",
      features: [],
      impact: "Modernisation accélérée, réduction des tâches manuelles, pilotage optimisé.",
      image: saphirImage,
    },
      {
      title: "SOMINEX",
      description: "Infogérance et modernisation du système d'information pour la gestion des opérations et supports aux utilisateurs",
      features: [],
      impact: "Optimisation, Surveillance, Veille technologique.",
      image: sominexImage,
    },
  ];

  return (
    <div className="bg-white font-sans">

    
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center bg-[#471F40] text-white shadow-lg transition-all duration-500 ${
          scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
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
                <img src={mailIcon} alt="Email" className="w-6 h-6 lg:w-7 lg:h-7" />
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
            <li><a href="/apropos" className="hover:text-[#6B2D5C] transition">À propos de nous</a></li>
            <li><a href="/services" className="hover:text-[#6B2D5C] transition">Nos Services</a></li>
            <li>
              <a href="/Casclients" className={scrolled ? "text-[#6B2D5C] font-bold" : "text-white font-bold"}>
                Clients
              </a>
            </li>
          </ul>

          <button
            onClick={goToHomeContact}
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
        style={{ backgroundImage: `url(${Heroclient})` }}
      >
        <div className="absolute inset-0 bg-[#6B2D5C]/90"></div>
        <div className="relative h-full flex items-center justify-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center max-w-6xl leading-tight">
            Nos cas clients
          </h1>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-16">
        <div className="max-w-[1187px] mx-auto px-8 lg:px-32">
          <p className="text-center text-gray-700 text-lg leading-relaxed" style={{ maxWidth: "900px", lineHeight: "1.6", fontWeight: 500, margin: "0 auto" }}>
            Ils nous ont fait confiance pour concrétiser leurs projets, et nous sommes fiers de les accompagner dans leur <br className="hidden lg:block" />
            réussite.
          </p>
        </div>
      </section>

      {/* CAS CLIENTS */}
      <section className="py-16 lg:py-14">
        <div className="max-w-[1187px] mx-auto px-8 lg:px-32 space-y-32">
          {cases.map((c, index) => (
            <div key={index} className="relative md:flex md:items-start md:gap-12">
            
              <div className="w-full md:w-[395px] h-[299px] overflow-hidden flex-shrink-0 rounded-xl">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-contain border-0 outline-none block"
                />
              </div>

              <div className="mt-6 md:mt-0 md:flex-1 ">
                <h3 className="text-2xl font-bold text-[#6B2D5C]">{c.title}</h3>
                <p className="text-gray-700 mt-2">{c.description}</p>
                {c.features.length > 0 && (
                  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                    {c.features.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                )}
                <p className="text-gray-700 font-medium mt-2">
                  <strong>Impact :</strong> {c.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

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

export default Casclients;