// src/pages/Upsilonchat.tsx

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UpsilonChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const goToServices = () => {
    if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#services");
      setTimeout(() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }), 600);
    }
  };

  const goToContact = () => {
    if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
      setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 600);
    }
  };

  const sendMessage = () => {
    if (inputValue.trim() === "") return;

    // Ajouter le message de l'utilisateur
    setMessages((prev) => [...prev, inputValue]);
    setInputValue("");

    // Réponse automatique de l'assistant après 1 seconde
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        "Merci pour votre message ! Nous vous répondons très vite",
      ]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[680px]">
        {/* Header */}
        <div className="bg-[#471F40] text-white p-6 text-center flex-shrink-0">
          <h1 className="text-2xl font-bold">Assistant Upsilon</h1>
          <p className="text-sm mt-2 opacity-90 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            En ligne • Réponse immédiate
          </p>
        </div>

        {/* Zone des messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300">
          {/* Message de bienvenue */}
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 rounded-3xl px-5 py-4 max-w-xs shadow-sm">
              Salut ! Je suis l'assistant virtuel d'<strong>Upsilon Consulting</strong>.<br />
              Comment puis-je vous aider aujourd'hui ?
            </div>
          </div>

          {/* Messages dynamiques */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`rounded-3xl px-5 py-4 max-w-xs shadow-sm ${
                  index % 2 === 0
                    ? "bg-[#471F40] text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg}
              </div>
            </div>
          ))}
        </div>

        {/* Boutons rapides */}
        <div className="px-8 py-6 flex justify-center gap-5 flex-shrink-0">
          <button
            onClick={goToContact}
            className="bg-[#471F40] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#3a1733] transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Demander un devis
          </button>
          <button
            onClick={goToServices}
            className="bg-[#6B2D5C] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#5a1f4a] transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Nos services
          </button>
        </div>

        {/* Barre d'envoi */}
        <div className="px-6 pb-6 flex-shrink-0">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tapez votre message..."
              className="w-full bg-gray-100 rounded-full py-4 pl-6 pr-16 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-[#6B2D5C]/30 focus:bg-white transition-all duration-300 shadow-inner"
            />
            <button
              onClick={sendMessage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#471F40] text-white rounded-full p-3.5 hover:bg-[#3a1733] transform hover:scale-110 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!inputValue.trim()}
            >
              <svg className="w-6 h-6 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpsilonChat;