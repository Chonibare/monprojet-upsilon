import { useState, useEffect } from "react";

// Images
import serviceHero from "../assets/servicehero.png";
import telephone from "../assets/telephone.png";

// Logos
import logoUpslon from "../assets/logovioletupslon.png";
import logouUpslon from "../assets/logo-upslon.png";

// Icônes
import phoneIcon from "../assets/phone-icon.png";
import emailIcon from "../assets/mail-icon.png";
import locationIcon from "../assets/location-icon.png";
import facebookwhiteIcon from "../assets/facebook-white.png";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok.png";
import linkedinIcon from "../assets/linkedin-white.png";
import twiterIcon from "../assets/x-white.png";
import facebookIcon from "../assets/facebook.png";
import arrowRight from "../assets/arrow-right.png";
import arrowRightWhite from "../assets/arrow-right-white.png";

// Images services
import devImage from "../assets/devin.jpg";
import dataImage from "../assets/dataa.jpg";
import conseilImage from "../assets/Amoa.jpg";
import infraImage from "../assets/infra.jpg";
import openSourceImage from "../assets/soluopen.jpg";
import innovationImage from "../assets/innotrans.jpg";

const goToHomeContact = () => {
  if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/#contact";
  }
};

const servicesData = [
  {
    slug: "conseil-amoa",
    name: "Conseil & AMOA Digitale",
    title: "Conseil & AMOA Digitale",
    desc: "Accompagner la définition, la conception et le pilotage des projets numériques.",
    points: [
      "Assistance à maîtrise d'ouvrage (rédaction de cahiers de charges, cadrage, spécifications)",
      "Gouvernance de projet & gestion du cycle de vie",
      "Conduite du changement et formation des utilisateurs"
    ],
    image: conseilImage
  },
  {
    slug: "data-analytics",
    name: "Data Management & Analytics",
    title: "Data Management & Analytics",
    desc: "Valoriser les données pour l'aide à la décision.",
    points: [
      "Conception et gestion de bases de données (PostgreSQL, MySQL)",
      "ETL/Data pipeline (DBT, Apache NiFi)",
      "Tableaux de bord & reporting (Power BI, Superset, Metabase)",
      "Gouvernance & qualité des données (catalogue, normalisation, sécurité)"
    ],
    image: dataImage
  },
  {
    slug: "developpement-integration",
    name: "Développement & Intégration de Systèmes",
    title: "Développement & Intégration de Systèmes",
    desc: "Construire et intégrer des solutions logicielles robustes et évolutives.",
    points: [
      "Développement sur mesure (Laravel, React, Node.js, API REST/GraphQL)",
      "Intégration avec systèmes existants (GLCE, Customs Web, systèmes bancaires, ERP)",
      "Microservices & interopérabilité (architecture modulaire)"
    ],
    image: devImage
  },
  {
    slug: "infrastructure-cloud",
    name: "Infrastructure, Cloud & Infogérance",
    title: "Infrastructure, Cloud & Infogérance",
    desc: "Assurer la disponibilité, la sécurité et les performances des environnements numériques.",
    points: [
      "Hébergement cloud et hybride (Kubernetes, Docker, MinIO)",
      "Supervision & monitoring (observabilité, alerting)",
      "Infogérance IT (gestion serveurs, parc informatique, réseaux)",
      "Sécurité & continuité (backups, PCA/PRA, cybersécurité)"
    ],
    image: infraImage
  },
  {
    slug: "solutions-open-source",
    name: "Solutions spécialisées & Open Source",
    title: "Solutions spécialisées & Open Source",
    desc: "Intégrer des plateformes ouvertes et adaptées aux contextes africains.",
    points: [
      "OpenMRS / e-santé",
      "Mifos / microfinance digitale",
      "Personnalisation & support technique"
    ],
    image: openSourceImage
  },
  {
    slug: "transformation-digitale",
    name: "Innovation & Transformation digitale",
    title: "Innovation & Transformation digitale",
    desc: "Mettre la technologie au service de la modernisation et de l'impact.",
    points: [
      "Stratégie digitale & modernisation SI",
      "Automatisation des processus métiers (BPMN, RPA)",
      "Intelligence artificielle appliquée (analyse documentaire, génération automatique de rapports/tests)",
      "Conception UX/UI (maquettes Figma, expérience utilisateur)"
    ],
    image: innovationImage
  }
];

const Services = () => {
  const container = "w-full max-w-[1440px] mx-auto px-6 lg:px-2 xl:px-20 2xl:px-32 ";
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(servicesData[2]); 
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
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const service = servicesData.find(s => s.slug === hash);
        if (service) setActiveService(service);
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (window.location.hash && !window.location.hash.includes("contact")) {
      setTimeout(() => {
        window.scrollTo({ top: 500, behavior: "smooth" });
      }, 150);
    }
  }, [activeService]);

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
          scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100 "
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
              <img src={facebookwhiteIcon} alt="Facebook" className="w-6 h-6 hover:opacity-80 cursor-pointer transition" />
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
            <li>
              <a href="/services" className={scrolled ? "text-[#6B2D5C] font-bold" : "text-white font-bold"}>
               Nos Services
              </a>
            </li>
            <li><a href="/Casclients" className="hover:text-[#6B2D5C] transition">Clients</a></li>
          </ul>

          <button
            onClick={goToHomeContact}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-500 ${
              scrolled
                ? "bg-[#6B2D5C] text-white hover:bg-[#5a1f4a] cursor-pointer"
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
        className="relative h-[400px] md:h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${serviceHero})` }}
      >
        <div className="absolute inset-0 bg-[#471F40]/80"></div>
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Service détail
          </h1>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="py-16 lg:py-24">
        <div className={container}>
          <div className="grid grid-cols-1 lg:grid-cols-[347px_1fr] gap-10">

           
            <div className="space-y-5">
              {servicesData.map((service) => (
                <button
                  key={service.slug}
                  onClick={() => {
                    setActiveService(service);
                    window.history.pushState(null, "", `#${service.slug}`);
                  }}
                  className={`w-full flex items-center justify-between px-6 py-5 rounded-xl transition-all text-left font-medium text-lg shadow-sm cursor-pointer min-h-[70px] ${
                    activeService.slug === service.slug
                      ? "bg-[#473146] text-white shadow-xl"
                      : "bg-gray-100 text-[#471F40] hover:bg-gray-200"
                  }`}
                >
                  <span>{service.name}</span>
                  <img
                    src={arrowRight}
                    alt="arrow"
                    className={`w-5 h-5 transition-all ${
                      activeService.slug === service.slug ? "brightness-0 invert" : ""
                    }`}
                  />
                </button>
              ))}

              {/* BLOC CONTACT */}
             
              <button
                onClick={goToHomeContact}
                className="inline-flex items-center gap-4 bg-[#473146] text-white px-14 py-5 rounded-full font-bold text-lg hover:bg-[#5a264d] transition-all hover:shadow-2xl cursor-pointer"
              >
                Contactez-nous
                <img src={arrowRightWhite} alt="arrow" className="w-7 h-7" />
              </button>
            </div>

            {/* CONTENU DROITE */}
            <div key={activeService.slug} className="space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100  -mt-6">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#471F40] leading-tight -mt-6">
                {activeService.title}
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed ">
                {activeService.desc}
              </p>

              <ul className=" text-gray-700 -mt-4 ">
                {activeService.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-1 ">
                    <span className="text-[#473146]  text-xl  -mt-1">-</span>
                    <span className="text-base leading-relaxed  -mt-1">{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 italic -mt-6 ">
                Notre objectif : transformer votre présence en ligne en un véritable levier de croissance.
              </p>

             
        </div>
 
          </div>
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
                  <li>  Ilot120-Mission Baptiste Méridionale,Zone Résidentielle,Cotonou </li>
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

export default Services;
