// src/pages/Home.tsx

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion"; 


import logoUpslon from "../assets/logovioletupslon.png";
import aboutImage from "../assets/apropos-image.jpg";
import womanPointing from "../assets/pourquoinous-image.png";
import logouUpslon from "../assets/logo-upslon.png";

import whyIcon1 from "../assets/speed-icon.png";
import whyIcon2 from "../assets/engagement-icon.png";
import whyIcon3 from "../assets/expertise-icon.png";
import whyIcon4 from "../assets/formation-icon.png";

import rectIcon1 from "../assets/vector2-icon.png";
import rectIcon2 from "../assets/vector1-icon.png";
import rectIcon3 from "../assets/ordi-icon.png";

import innovationIcon from "../assets/innovation-icon.png";
import collaborationIcon from "../assets/collaboration-icon.png";
import impactIcon from "../assets/impact-icon.png";
import qualityIcon from "../assets/quality-icon.png";

import playIcon from "../assets/play-icon.png";
import iconCircle from "../assets/icon-circle.png";
import mailnoirIcon from "../assets/gmailnoir.png";
import locationnoirIcon from "../assets/locationnoir.png";
import UpArrow from "../assets/up-arrow.png";

import devIcon from "../assets/dev-icon.png";
import conseilIcon from "../assets/conseil-icon.png";
import dataIcon from "../assets/data-icon.png";
import conseilAmoaIcon from "../assets/conseil-amoa-icon.png";
import infraIcon from "../assets/infra-icon.png";
import openSourceIcon from "../assets/open-source-icon.png";
import arrowRight from "../assets/arrow-right.png";




import phoneIcon from "../assets/phone-icon.png";
import mailIcon from "../assets/mail-icon.png";
import phonenoirIcon from "../assets/phonenoir.png";
import locationIcon from "../assets/location-icon.png";
import facebookWhiteIcon from "../assets/facebook-white.png";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok.png";
import sendArrow from "../assets/send-arow.png";
import facebookIcon from "../assets/facebook.png";
import Arrowdown from "../assets/arrow-down-icon.png";
import linkedinIcon from "../assets/linkedin-white.png";
import twiterIcon from "../assets/x-white.png";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";


import tech2 from "../assets/tech2.jpg";
import tech3 from "../assets/tech3.jpg";
import tech4 from "../assets/tech4.jpg";
import tech5 from "../assets/tech5.jpg";


const ServiceCard = ({
  service,
  slug,
}: {
  service: any;
  slug: string;
}) => (
  <div
    className="bg-white rounded-[10px] shadow-sm p-6 w-full max-w-[299px] h-[350px] mx-auto flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
  >
    <div className="flex flex-col items-center gap-6 h-full">
      <div
        className={`w-[60px] h-[60px] rounded-lg flex items-center justify-center transition-all duration-300 
          group-hover:bg-[#471F40] 
          bg-[#F4F2F3]`}
      >
        <img
          src={service.icon}
          alt={service.title}
          className={`w-8 h-8 transition-all duration-300 
            group-hover:filter group-hover:brightness-0 group-hover:invert`}
        />
      </div>

      <h4 className="text-lg font-semibold text-[#471F40] px-4">{service.title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed flex-1 px-4">{service.desc}</p>

      <a
        href={`/services#${slug}`}
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-2 text-[#6B2D5C] font-medium mt-auto hover:gap-3 transition-all"
      >
        En savoir plus
        <img src={arrowRight} alt="Arrow" className="w-4 h-4" />
      </a>
    </div>
  </div>
);

const Home = () => {
 

  useEffect(() => {
    if (window.location.hash === "#contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "auto" });
    }
  }, []);


  
const [activeTab, setActiveTab] = useState("Accueil");

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos de nous", href: "/apropos" },
  { name: "Nos Services", href: "/services" },
  { name: "Clients", href: "/Casclients" },
];

const [hoveredTab, setHoveredTab] = useState(null);


  const partners = [
   
    { name: "Mifos X", logo: tech2 },
    { name: "OpenMRS", logo: tech3 },
    { name: "DataForge", logo: tech4 },
    { name: "SOGETEC", logo: tech5 },
   
  ];

  const services = [
    {
      icon: devIcon,
      title: "Développement & Intégration de Systèmes",
      desc: " Nous dévelopons des Applications web modernes et performantes avec les dernières technologies.",
      bgColor: "#471F40",
      slug: "developpement-integration",
     hoverColor: "#6B2D5C"
      
    },
    {
      icon: conseilIcon,
      title: "Conseil & AMOA Digitale",
      desc: "Nous accompagnons la définition, la conception et le pilotage des projets numériques.",
      slug: "conseil-amoa",
    },
    {
      icon: dataIcon,
      title: "Data Management & Analytics",
      desc: "Nous organisons, structurons et valorisons vos données pour tous types de plateformes et environnements.",
      slug: "data-analytics",
    },
    {
      icon: conseilAmoaIcon,
      title: "Conseil & AMOA Digitale",
      desc: "Nous vous accompagnons dans votre transformation numérique et stratégies marketing agiles et modernes.",
      slug: "conseil-amoa-2",
    },
    {
      icon: infraIcon,
      title: "Infrastructure, Cloud & Infogérance",
      desc: "Nous concevons, déployons et gérons des infrastructures performantes et évolutives, sur site comme dans le Cloud.",
      slug: "infrastructure-cloud",
    },
    {
      icon: openSourceIcon,
      title: "Solutions spécialisées & Open Source",
      desc: "Nous développons et intégrons des solutions spécialisées, en tirant parti de la puissance et de la flexibilité de l’Open Source.",
      slug: "solutions-open-source",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white font-sans">
      <div className="max-w-[1440px] mx-auto">

        {/* HEADER FIXE */}
        <header className="bg-[#471F40] text-white h-[70px] fixed top-0 left-0 right-0 z-50 shadow-lg">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-32 h-full flex justify-between items-center">
            <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <a href="tel:+22901610776" className="flex items-center gap-1.5 hover:underline">
                <img src={phoneIcon} alt="Phone" className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">(+229)01 92 59 43 68</span>
              </a>
              <a href="mailto:contact@upsiloncs.com" className="flex items-center gap-1.5 hover:underline">
                <img src={mailIcon} alt="Mail" className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">contact@upsiloncs.com</span>
              </a>
              <span className="hidden lg:flex items-center gap-2">
                <img src={locationIcon} alt="Location" className="w-6 h-6" />
                 Ilot120-Mission Baptiste Méridionale,Zone Résidentielle,Cotonou 
              </span>
            </div>
            <div className="flex items-center gap-5 sm:gap-7">
              <img src={facebookWhiteIcon} alt="Facebook" className="w-5 h-5 hover:opacity-80 cursor-pointer" />
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5 hover:opacity-80 cursor-pointer" />
              <img src={tiktokIcon} alt="Tiktok" className="w-5 h-5 hover:opacity-80 cursor-pointer" />
            </div>
          </div>
        </header>

        <div className="h-[70px]" />

        {/* NAVBAR */}
       <nav className="flex justify-between items-center px-4 sm:px-8 lg:px-32 py-6 lg:py-8 bg-white">
  <img src={logoUpslon} alt="Upsilon Consulting" className="h-12 lg:h-14" />
  
  <ul 
    className="hidden lg:flex gap-8 xl:gap-10 text-gray-800 font-medium text-base lg:text-lg"
    onMouseLeave={() => setHoveredTab(null)} 
  >
    {navLinks.map((link) => (
      <li 
        key={link.name} 
        className="relative py-2"
        onMouseEnter={() => setHoveredTab(link.name)}
      >
        <a
          href={link.href}
          className="hover:text-[#6B2D5C] transition-colors duration-300"
        >
          {link.name}
        </a>
        
       
        {hoveredTab === link.name && (
          <motion.div
            layoutId="hoverUnderline"
            className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#6B2D5C] rounded-full"
            initial={false}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </li>
    ))}
  </ul>

  <button
    onClick={scrollToContact}
    className="bg-[#6B2D5C] text-white px-6 sm:px-8 py-3 rounded-full hover:bg-[#5a1f4a] transition font-medium text-sm sm:text-base cursor-pointer"
  >
    Contactez-nous
  </button>
</nav>

        {/* HERO */}
        <section className="bg-white">
          <div className="px-4 sm:px-8 lg:px-32 max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center py-12 lg:py-20">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <img src={playIcon} alt="Play" className="w-3 h-3" />
                  <span className="text-[#6B2D5C] font-semibold text-base sm:text-lg">
                    UPCS - Accélérateur de transformation digitale en Afrique
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#471F40] leading-tight mb-6">
                  Notre expertise digitale vous propulse vers le succès.
                </h1>
                <p className="text-base sm:text-lg text-gray-700 mb-10 leading-relaxed max-w-xl">
                  Nous accompagnons les institutions publiques, les bailleurs et les entreprises privées dans la digitalisation de leurs processus critiques, pour plus d’efficacité, de transparence et d’impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <button
                    onClick={scrollToServices}
                    className="bg-[#6B2D5C] text-white px-8 sm:px-10 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#5a1f4a] transition font-semibold text-base sm:text-lg cursor-pointer"
                  >
                    Découvrir nos expertises
                    <img src={Arrowdown} alt="Flèche bas" className="w-5 h-5" />
                  </button>
                  {/* <button
                    onClick={scrollToContact}
                    className="border-2 border-[#6B2D5C] text-[#6B2D5C] px-8 sm:px-10 py-4 rounded-full hover:bg-[#6B2D5C] hover:text-white transition font-semibold text-base sm:text-lg cursor-pointer"
                  >
                    Nous contacter
                  </button> */}
                </div>
              </div>

              <div className="flex gap-6 lg:gap-9 h-full items-center justify-center lg:justify-start lg:translate-x-8 lg:translate-x-20">
                <div className="w-[240px] sm:w-[290px] h-[240px] sm:h-[290px] bg-gray-200 rounded-lg overflow-hidden shadow-lg mt-12 lg:mt-24 hover:shadow-xl transition-shadow">
                  <img src={image1} alt="Projet principal" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col gap-4 flex-1 max-w-[140px] sm:max-w-none">
                  <div className="h-[100px] sm:h-[120px] bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img src={image2} alt="Innovation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="h-[100px] sm:h-[120px] bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img src={image3} alt="Équipe" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="h-[100px] sm:h-[120px] bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img src={image4} alt="Résultat" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bg-[#471F40] p-5 rounded-md">
  <div className="flex justify-between items-center px-4 sm:px-6 lg:px-12">
    {partners.map((p, i) => (
      <div key={i} className="flex justify-center items-center">
        <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full overflow-hidden shadow-md hover:scale-110 transition-all duration-300">
          <img
            src={p.logo}
            alt={p.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ))}

  </div>
</section> */}

        {/* À PROPOS */}
     <section className="mt-32 px-8 lg:px-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div style={{ borderRadius: "18% 52% 70% 30% / 30% 34% 66% 70%", width: "477px", height: "512px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }} className="mx-auto lg:mx-0">
                <img src={aboutImage} alt="Équipe" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-[#473146] flex flex-col items-center justify-center gap-10 z-30 shadow-2xl" style={{ width: "50px", height: "260px" }}>
                <img src={rectIcon1} alt="" className="w-5 h-5" />
                <img src={rectIcon2} alt="" className="w-5 h-5" />
                <img src={rectIcon3} alt="" className="w-5 h-5" />
              </div>
              <div className="absolute top-64 left-1/2 lg:left-80 transform -translate-x-1/2 lg:translate-x-0">
                <div className="relative">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-[#471F40] rounded-full -z-10" />
                  <div className="relative bg-white rounded-full w-42 h-42 flex flex-col items-center justify-start pt-8 shadow-lg z-10 overflow-hidden">
                    <div className="z-20"><img src={iconCircle} alt="" className="w-5 h-5" /></div>
                    <span className="text-3xl font-bold text-[#471F40] mt-2">+ 10 ans</span>
                    <span className="text-sm text-[#471F40]">d'expertise</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-lg mx-auto lg:mx-0 space-y-6 text-center lg:text-left ">
              <div className="flex items-center gap-3 bg-[#E3DDE2] px-4 py-2 rounded-full w-fit mx-auto lg:mx-0">
                <img src={playIcon} alt="Play" className="w-3 h-3" />
                <span className="text-sm text-gray-700 font-medium">À propos de nous</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#471F40] mb-6">Votre partenaire pour innover et réussir</h2>
              <p className="text-gray-700">
                Upsilon Consulting (UPCS) est un cabinet de conseil et d’ingénierie digitale spécialisé dans la conception, l’intégration et le pilotage de plateformes numériques à fort impact. Notre mission est d’accompagner la transformation des organisations en Afrique, en mettant la technologie au service du développement économique, social et institutionnel.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3"><img src={innovationIcon} alt="" className="w-6 h-6" /><span className="font-medium">Innovation</span></div>
                <div className="flex items-center gap-3"><img src={collaborationIcon} alt="" className="w-6 h-6" /><span className="font-medium">Collaboration</span></div>
                <div className="flex items-center gap-3"><img src={impactIcon} alt="" className="w-6 h-6" /><span className="font-medium">Impact durable</span></div>
                <div className="flex items-center gap-3"><img src={qualityIcon} alt="" className="w-6 h-6" /><span className="font-medium">Qualité</span></div>
              </div>
              <a href="/apropos" className="inline-block bg-[#471F40] text-white px-6 py-3 rounded-full hover:bg-[#3a1733] transition font-medium mx-auto lg:mx-0">
                En savoir plus
              </a>
            </div>
          </div>
        </section>

        {/* NOS SERVICES */}
        <section id="services" className="mt-20 lg:mt-32 px-4 sm:px-8 lg:px-32" style={{ backgroundColor: "#F4F2F3" }}>
          <div className="max-w-[1187px] mx-auto pt-16 pb-20 lg:pt-20 lg:pb-32">
            <div className="flex items-center gap-2 bg-[#E3DDE2] px-4 py-2 rounded-full w-fit mb-6 mx-auto lg:mx-0">
              <img src={playIcon} alt="Services" className="w-3 h-3" />
              <span className="text-sm text-gray-700 font-medium">Nos services</span>
            </div>
            <div className="text-center mb-4">
              <h3 className="text-2xl font-semibold text-[#471F40]">Solutions digitales complètes</h3>
            </div>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-center">
              Nos expertises couvrent l’ensemble des métiers du numérique, afin d’accompagner nos clients dans la conception, le déploiement et la réussite de leurs projets digitaux.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto ">
              {/* Colonne 1 */}
              <div className="space-y-8">
                {services.slice(0, 1).concat(services.slice(3, 4)).map((service, i) => (
                  <ServiceCard key={i} service={service} slug={service.slug} />
                ))}
              </div>
            
              <div className="space-y-8">
                {services.slice(1, 2).concat(services.slice(4, 5)).map((service, i) => (
                  <ServiceCard key={i} service={service} slug={service.slug} />
                ))}
              </div>
             
              <div className="space-y-8">
                {services.slice(2, 3).concat(services.slice(5, 6)).map((service, i) => (
                  <ServiceCard key={i} service={service} slug={service.slug} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* POURQUOI NOUS CHOISIR */}
        <section className="bg-[#473146] py-16 lg:py-32">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
              <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
                <div className="flex items-center gap-2 bg-[#E3DDE2] px-4 py-2 rounded-full w-fit mx-auto lg:mx-0">
                  <img src={playIcon} alt="Play" className="w-3 h-3" />
                  <span className="text-sm text-gray-700 font-medium">Pourquoi nous ?</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Choisir le bon partenaire digital, c’est déjà avancer vers la réussite.
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Chez nous, nous allions innovation, expertise et proximité pour faire de chaque projet une réussite durable. Des projets nationaux menés à bien (douane, emploi, santé, finance), partenariats stratégiques avec des acteurs publics et privés. Impact socio-économique direct : insertion de milliers de jeunes, modernisation des flux portuaires, digitalisation du secteur santé.
                </p>
                {/* <button
                  onClick={scrollToContact}
                  className="bg-white text-[#473146] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition cursor-pointer mx-auto lg:mx-0"
                >
                  Contactez-nous
                </button> */}
              </div>
              <div className="lg:col-span-7 flex justify-center lg:justify-end">
                <div className="bg-white rounded-[10px] shadow-lg p-6 sm:p-8 w-full max-w-[439px]">
                  <div className="flex gap-6">
                    <div className="flex flex-col gap-9">
                      <div className="w-[70px] h-[70px] bg-[#471F40] rounded-full flex items-center justify-center">
                        <img src={whyIcon1} alt="Rapidité" className="w-8 h-8" />
                      </div>
                      <div className="w-[70px] h-[70px] bg-[#471F40] rounded-full flex items-center justify-center">
                        <img src={whyIcon2} alt="Engagement" className="w-8 h-8" />
                      </div>
                      <div className="w-[70px] h-[70px] bg-[#471F40] rounded-full flex items-center justify-center">
                        <img src={whyIcon3} alt="Expertise" className="w-8 h-8" />
                      </div>
                      <div className="w-[70px] h-[70px] bg-[#471F40] rounded-full flex items-center justify-center">
                        <img src={whyIcon4} alt="Accompagnement" className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-9 pt-1">
                      <div><h4 className="font-semibold text-[#471F40] text-lg">Rapidité et efficacité</h4><p className="text-sm text-gray-600 mt-1">Des solutions concrètes, adaptées et livrées dans les délais.</p></div>
                      <div><h4 className="font-semibold text-[#471F40] text-lg">Engagement et transparence</h4><p className="text-sm text-gray-600 mt-1">Une collaboration basée sur la confiance et des résultats mesurables.</p></div>
                      <div><h4 className="font-semibold text-[#471F40] text-lg">Expertise et innovation</h4><p className="text-sm text-gray-600 mt-1">Une équipe qui s’adapte à vos besoins pour des résultats concrets.</p></div>
                      <div><h4 className="font-semibold text-[#471F40] text-lg">Accompagnement sur mesure</h4><p className="text-sm text-gray-600 mt-1">Formation et coaching personnalisés pour une appropriation durable des outils.</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEMME POINTANT + CTA */}
        <div className="relative bg-[#473146]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-32">
            <div className="border-t border-[#5a2d6b] relative">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-2/3 w-[280px] sm:w-[340px] lg:w-[380px] h-[420px] sm:h-[480px] lg:h-[520px] z-30">
                <img src={womanPointing} alt="Femme qui pointe vers le haut" className="w-full h-full object-cover object-bottom" />
              </div>
            </div>
          </div>
          <section className="bg-[#471F40] py-16 lg:py-20">
            <div className="max-w-[1187px] mx-auto text-center space-y-6 px-4">
              <h3 className="text-3xl font-bold text-white">Prêt à transformer votre business ?</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Obtenez un audit gratuit de votre présence digitale et découvrez comment nous pouvons booster votre croissance.
              </p>
              <button
                onClick={scrollToContact}
                className="bg-white text-[#471F40] px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition text-lg cursor-pointer"
              >
                Contactez-nous
              </button>
            </div>
          </section>
        </div>

        {/* SECTION CONTACT */}
        <section id="contact" className="bg-white py-16 lg:py-20 px-4 sm:px-8 lg:px-32 relative">
          <div className="max-w-[1187px] mx-auto">
            <div className="flex items-center gap-2 bg-[#E3DDE2] px-4 py-2 rounded-full w-fit mb-8 mx-auto lg:mx-0">
              <img src={playIcon} alt="Contact" className="w-3 h-3" />
              <span className="text-sm text-[#471F40] font-medium">Contactez-nous</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#471F40] text-center mb-3">
              Démarrons votre projet ensemble
            </h2>

            <div className="text-center mb-12">
              <p className="text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Vous avez un projet en tête ? Contactez-nous pour un devis gratuit et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
              <div className="relative bg-white/90 backdrop-blur-sm p-8 shadow-sm border border-gray-200 rounded-2xl overflow-hidden">

              
                {/* Formulaire  */}
                <form
         onSubmit={(e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);

 
  const successDiv = document.getElementById("success-overlay");
  if (successDiv) {
    successDiv.classList.remove("opacity-0", "pointer-events-none");
    successDiv.classList.add("opacity-100");
  }

  // ✅ récupérer données 
  const nom = formData.get("nom") as string;
  const email = formData.get("email") as string;
  const entreprise = formData.get("entreprise") as string;
  const message = formData.get("message") as string;

  console.log("nom:", nom);
  console.log("email:", email);
  console.log("entreprise:", entreprise);
  console.log("message:", message);

  form.reset();

  emailjs
    .sendForm(
      "service_rrulryc",
      "template_94nts5n",
      form,
      "WJ0XvfXZIAlVuj2b6"
    )
    .then(
      () => {
        console.log("Email envoyé !");
      },
      (error) => {
        console.log("Erreur :", error);
      }
    );
  setTimeout(() => {
    if (successDiv) {
      successDiv.classList.add("opacity-0", "pointer-events-none");
      successDiv.classList.remove("opacity-100");
    }
  }, 2000); 
}}
                  className="space-y-5 relative z-10"
                >
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#471F40] mb-1">Parlez-nous de votre projet</h3>
                    <p className="text-sm text-gray-600">Remplissez ce formulaire et nous vous recontacterons sous 24h.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet <span className="text-red-500">*</span></label>
                      <input type="text" name="nom" placeholder="Votre nom" required className="w-full px-4 py-3 bg-[#F4F2F3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B2D5C] transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                      <input type="email" name="email" placeholder="email@gmail.com" required className="w-full px-4 py-3 bg-[#F4F2F3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B2D5C] transition" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom d'entreprise</label>
                    <input type="text" name="entreprise" placeholder="Optionnel" className="w-full px-4 py-3 bg-[#F4F2F3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B2D5C] transition" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                    <textarea rows={4} name="message" placeholder="Décrivez votre projet..." required className="w-full px-4 py-3 bg-[#F4F2F3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B2D5C] resize-none transition"></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 bg-[#471F40] text-white font-medium px-8 py-3 rounded-full hover:bg-[#3a1733] transition shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                    >
                      Envoyer le message
                      <img src={sendArrow} alt="Envoyer" className="w-5 h-5" />
                    </button>
                  </div>
                </form>

                {/* Overlay succès */}
                <div
                  id="success-overlay"
                  className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl flex flex-col items-center justify-center gap-5 opacity-0 pointer-events-none transition-all duration-700 z-20"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-800">Message envoyé avec succès !</p>
                    <p className="text-green-700 mt-2">Nous vous répondrons sous 24h</p>
                  </div>
                </div>
              </div>

              {/* Cartes de contact */}
              <div className="space-y-6">
                {[
                  { icon: mailnoirIcon, label: "Email", value: "contact@upsiloncs.com", href: "mailto:contact@upsiloncs.com" },
                  { icon: phonenoirIcon, label: "Téléphone", value: "(+229) 01 61 01 76 76", href: "tel:+2290161017676" },
                  { icon: locationnoirIcon, label: "Localisation", value: "SOGETEC, 1er étage", href: null },
                ].map((item, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-sm p-6 shadow-sm border border-gray-100 rounded-xl flex items-center gap-4 hover:shadow-md transition">
                    <div className="w-12 h-12 bg-[#E3DDE2] rounded-lg flex items-center justify-center">
                      <img src={item.icon} alt={item.label} className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#471F40] hover:underline font-medium text-base">{item.value}</a>
                      ) : (
                        <p className="text-[#471F40] font-medium text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#473146] text-white">
          <div className="py-16 lg:py-20">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-32">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                  <img src={logouUpslon} alt="Upsilon Consulting" className="h-14 mb-6" />
                  <p className="text-gray-300 leading-relaxed max-w-md">
                    Votre partenaire de confiance. Nous créons des solutions innovantes qui propulsent votre entreprise vers le succès.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold text-xl mb-6">Liens</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li><a href="/" className="hover:text-white transition">Accueil</a></li>
                    <li><a href="/apropos" className="hover:text-white transition">À propos</a></li>
                    <li><a href="/services" className="hover:text-white transition">Services</a></li>
                     <li><a href="/casclients" className="hover:text-white transition">Clients</a></li>
                  </ul>
                </div>

                <div className="flex flex-col items-center text-center relative">
                  <h3 className="font-bold text-xl mb-6">Contact</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li><a href="mailto:contact@upsiloncs.com" className="hover:text-white transition">contact@upsiloncs.com</a></li>
                    <li><a href="tel:+22901610776" className="hover:text-white transition">(+229) 01 92 59 43 68</a></li>
                    <li>Ilot120-Mission Baptiste Méridionale,Zone Résidentielle,Cotonou </li>
                  </ul>

                  <a href="#top" className="absolute -right-6 sm:-right-10 top-1/2 -translate-y-1/2 md:-right-16 lg:-right-20 group z-10" aria-label="Retour en haut de page">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#471F40] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-[#473146] group-hover:scale-110">
                      <img src={UpArrow} alt="Retour en haut" className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 mt-12 pt-8 text-gray-400 text-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
                  <div className="flex gap-8">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 hover:opacity-80 cursor-pointer" />
                    <img src={facebookIcon} alt="Facebook" className="w-6 h-6 hover:opacity-80 cursor-pointer" />
                    <img src={twiterIcon} alt="X" className="w-6 h-6 hover:opacity-80 cursor-pointer" />
                  </div>
                  <p className="text-center mt-4 md:mt-0">Produit par Upsilon Consulting</p>
                  <p className="text-center">© 2025 Upsilon Consulting. Tous droits réservés.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;