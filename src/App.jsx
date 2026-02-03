import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SafeIcon from './components/SafeIcon';

// SafeIcon wrapper for inline usage
const Icon = ({ name, size = 24, className = '' }) => (
  <SafeIcon name={name} size={size} className={className} />
);

// Reusable scroll animation wrapper
const FadeInUp = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// HERO Section
const HeroSection = () => {
  const scrollToEssence = () => {
    document.getElementById('essence').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-950/30 via-black to-black" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-hot-pink rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[12vw] md:text-[8vw] font-black tracking-tighter leading-none animate-neon-pulse text-white mb-4"
          style={{
            textShadow: '0 0 5px #FF69B4, 0 0 10px #FF69B4, 0 0 20px #FF69B4, 0 0 40px #FF1493',
            WebkitTextStroke: '2px #FF69B4',
          }}
        >
          KATYA<br />GOLUBENKO
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-2"
        >
          <p className="text-hot-pink text-lg md:text-2xl font-bold tracking-widest uppercase">
            VIPER OF OBOLON
          </p>
          <div className="flex items-center justify-center gap-3 text-gray-400 text-sm md:text-base">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-hot-pink" />
            <span className="font-mono tracking-wider">PRAGUE SNUS AMBASSADOR</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-hot-pink" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToEssence}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 touch-target"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-hot-pink blur-xl opacity-50 animate-pulse" />
          <Icon name="sparkles" size={32} className="text-hot-pink relative z-10" />
        </div>
        <span className="text-xs text-hot-pink/80 font-mono tracking-widest uppercase animate-float">
          Scroll
        </span>
      </motion.button>
    </section>
  );
};

// THE ESSENCE Section
const EssenceSection = () => {
  const phrases = [
    { text: "Leather Pants Power", align: "left" },
    { text: "Возбуждающая родинка на лбу", align: "center" },
    { text: "Самый красивый в мире пупок", align: "right" },
  ];

  return (
    <section id="essence" className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-b from-fuchsia-900/40 via-black to-black">
      <div className="container mx-auto max-w-4xl">
        <FadeInUp>
          <h2 className="text-4xl md:text-6xl font-black text-hot-pink mb-16 text-center tracking-tight">
            THE ESSENCE
          </h2>
        </FadeInUp>

        <div className="space-y-16 md:space-y-24">
          {phrases.map((phrase, index) => (
            <FadeInUp key={index} delay={index * 0.2}>
              <div className={`flex ${phrase.align === 'left' ? 'justify-start' : phrase.align === 'right' ? 'justify-end' : 'justify-center'}`}>
                <p 
                  className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-2xl"
                  style={{
                    textShadow: '0 0 20px rgba(255, 105, 180, 0.5)',
                    WebkitTextStroke: '1px rgba(255, 105, 180, 0.3)',
                  }}
                >
                  {phrase.text}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-4 opacity-20">
          <Icon name="star" size={48} className="text-hot-pink" />
        </div>
        <div className="absolute bottom-1/4 right-4 opacity-20">
          <Icon name="diamond" size={48} className="text-hot-pink" />
        </div>
      </div>
    </section>
  );
};

// PLAYLIST Section
const PlaylistSection = () => {
  const artists = [
    { name: "FreshFact ака Ромчик", vibe: "VIBE: Oblivion" },
    { name: "9Mice", vibe: "VIBE: Underground" },
    { name: "Lildrughill", vibe: "VIBE: Chill" },
    { name: "Timati", vibe: "VIBE: Classic" },
    { name: "Playboy Carti", vibe: "VIBE: Rage" },
  ];

  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <FadeInUp>
          <h2 className="text-4xl md:text-6xl font-black text-hot-pink mb-4 text-center tracking-tight">
            THE SOUND
          </h2>
          <p className="text-center text-gray-400 mb-12 font-mono text-sm tracking-widest">
            PLAYLIST_2024.EXE
          </p>
        </FadeInUp>

        <div className="space-y-6">
          {artists.map((artist, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <div 
                className="relative group cursor-pointer"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(255, 105, 180, 0.3))',
                }}
              >
                {/* Ticket background with jagged edges effect */}
                <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 border-2 border-hot-pink/50 rounded-lg overflow-hidden ticket-edge-right">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  
                  <div className="relative flex items-center justify-between p-4 md:p-6">
                    <div className="flex items-center gap-4">
                      {/* Pixel-style speaker icon */}
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-hot-pink/20 rounded flex items-center justify-center border border-hot-pink/30">
                        <Icon name="speaker" size={20} className="text-hot-pink" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight group-hover:text-hot-pink transition-colors">
                          {artist.name}
                        </h3>
                        <p className="text-xs text-gray-500 font-mono mt-1">{artist.vibe}</p>
                      </div>
                    </div>
                    
                    {/* Ticket stub indicator */}
                    <div className="hidden md:flex items-center gap-2 text-hot-pink/60">
                      <span className="text-xs font-mono">ADMIT ONE</span>
                      <Icon name="ticket" size={20} />
                    </div>
                  </div>
                  
                  {/* Perforated line effect */}
                  <div className="absolute top-0 bottom-0 right-20 border-l-2 border-dashed border-hot-pink/30 hidden md:block" />
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

// VIBE CHAPTERS Section
const VibeChaptersSection = () => {
  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden">
      <div className="container mx-auto max-w-5xl space-y-20">
        
        {/* OMAN - Sand waves */}
        <FadeInUp>
          <div className="relative min-h-[60vh] flex items-center justify-center rounded-2xl overflow-hidden sand-bg animate-sand-wave">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
            <div className="relative z-10 text-center p-8">
              <h3 className="text-[15vw] md:text-[10vw] font-black text-white tracking-tighter leading-none mb-4"
                  style={{
                    textShadow: '0 0 30px rgba(255, 105, 180, 0.8)',
                    WebkitTextStroke: '3px #FF69B4',
                  }}>
                OMAN
              </h3>
              <p className="text-xl md:text-2xl text-hot-pink font-bold tracking-widest uppercase">
                Luxury Escape
              </p>
              <p className="text-sm text-gray-300 font-mono mt-2 tracking-wider">
                Dunes & Dreams
              </p>
            </div>
          </div>
        </FadeInUp>

        {/* TECHNO - Glitch effect */}
        <FadeInUp>
          <div className="relative min-h-[50vh] flex items-center justify-center bg-black border-y-2 border-hot-pink/30 py-12">
            <div className="text-center">
              <h3 
                className="text-[12vw] md:text-[8vw] font-black text-white tracking-tighter glitch-text font-mono mb-4"
                data-text="TECHNO"
                style={{
                  textShadow: '2px 0 #00ff00, -2px 0 #ff00ff',
                  animation: 'glitch 1s linear infinite',
                }}
              >
                TECHNO
              </h3>
              <div className="space-y-1">
                <p className="text-lg md:text-xl text-hot-pink font-bold tracking-widest">
                  Raves 24/7
                </p>
                <p className="text-sm md:text-base text-gray-400 font-mono">
                  Harder. Faster. <span className="text-hot-pink">Pinker.</span>
                </p>
              </div>
            </div>
            
            {/* Matrix rain effect simulation */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-hot-pink text-xs font-mono"
                  style={{
                    left: `${i * 10}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                >
                  {String.fromCharCode(0x30A0 + Math.random() * 96)}
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* BANYA - Steam blur */}
        <FadeInUp>
          <div className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden steam-blur">
            <div className="absolute inset-0 bg-gradient-to-t from-hot-pink/10 to-transparent" />
            
            <div className="relative z-10 text-center p-8">
              <h3 
                className="text-[12vw] md:text-[8vw] font-black text-white tracking-tighter mb-4"
                style={{
                  filter: 'blur(0.5px)',
                  textShadow: '0 0 40px rgba(255, 255, 255, 0.5)',
                }}
              >
                BANYA
              </h3>
              <div className="space-y-2 text-gray-300">
                <p className="text-lg md:text-xl font-bold tracking-widest">
                  Non-stop steam
                </p>
                <p className="text-sm md:text-base font-mono text-hot-pink/80">
                  Detox for Vipers
                </p>
              </div>
            </div>

            {/* Steam particles */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-32 h-32 bg-white/5 rounded-full blur-3xl"
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: `${10 + (i % 3) * 20}%`,
                  animation: `steam-rise ${4 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </FadeInUp>

      </div>
    </section>
  );
};

// THE ARCHIVE Section
const ArchiveSection = () => {
  const media = [
    { id: 1, caption: "VIPER MODE: ON", angle: -3 },
    { id: 2, caption: "OBOLON NIGHTS", angle: 2 },
    { id: 3, caption: "PINK DREAMS", angle: -2 },
    { id: 4, caption: "SNAKE CHARMER", angle: 3 },
  ];

  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <h2 className="text-4xl md:text-6xl font-black text-hot-pink mb-4 text-center tracking-tight">
            THE ARCHIVE
          </h2>
          <p className="text-center text-gray-400 mb-12 font-mono text-sm">
            // VISUAL_MEMORIES_LOADED
          </p>
        </FadeInUp>

        {/* Horizontal scroll container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto hide-scrollbar snap-x-mandatory pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4">
            {media.map((item, index) => (
              <FadeInUp key={item.id} delay={index * 0.1} className="snap-center shrink-0">
                <div 
                  className="polaroid w-64 md:w-auto cursor-pointer group"
                  style={{ transform: `rotate(${item.angle}deg)` }}
                >
                  {/* Image placeholder with pink border */}
                  <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-black border-4 border-hot-pink overflow-hidden">
                    {/* Placeholder pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#FF69B4_1px,_transparent_1px)] bg-[length:20px_20px]" />
                    </div>
                    
                    {/* Play icon for video indication on some items */}
                    {index % 2 === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-hot-pink/80 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                          <Icon name="play" size={24} className="text-white ml-1" />
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  {/* Caption with marker style */}
                  <div className="pt-3 text-center">
                    <p className="font-mono text-sm text-gray-800 font-bold transform -rotate-1 inline-block bg-yellow-200 px-2 py-1">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>

        {/* Scroll hint for mobile */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex items-center gap-2 text-hot-pink/60 text-xs font-mono">
            <Icon name="arrow-left" size={16} />
            <span>SWIPE</span>
            <Icon name="arrow-right" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Marquee component for footer
const Marquee = ({ text }) => (
  <div className="overflow-hidden bg-hot-pink py-3">
    <div className="flex whitespace-nowrap animate-marquee">
      {[...Array(4)].map((_, i) => (
        <span key={i} className="text-black font-black text-sm tracking-widest mx-8 flex items-center gap-4">
          {text} <Icon name="star" size={16} />
        </span>
      ))}
    </div>
  </div>
);

// FOOTER Section
const FooterSection = () => {
  const socials = [
    { name: 'instagram', label: 'IG', href: '#' },
    { name: 'music', label: 'TT', href: '#' }, // TikTok alternative icon
    { name: 'send', label: 'TG', href: '#' },  // Telegram alternative icon
  ];

  return (
    <footer className="relative bg-black pb-8 telegram-safe-bottom">
      <Marquee text="HIT ME UP • HIT ME UP • HIT ME UP •" />
      
      <div className="container mx-auto max-w-4xl px-4 pt-12">
        <FadeInUp>
          {/* Main CTA Button */}
          <button className="w-full group relative overflow-hidden bg-hot-pink hover:bg-neon-pink text-black font-black text-3xl md:text-5xl py-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] touch-target mb-12 shadow-[0_0_40px_rgba(255,105,180,0.4)]">
            <span className="relative z-10 flex items-center justify-center gap-4">
              HIT ME UP
              <Icon name="zap" size={32} className="group-hover:rotate-12 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </FadeInUp>

        {/* Social Icons */}
        <FadeInUp delay={0.2}>
          <div className="flex justify-center gap-8 mb-12">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-16 h-16 rounded-full border-2 border-hot-pink/50 flex items-center justify-center text-hot-pink hover:bg-hot-pink hover:text-black transition-all duration-300 touch-target group"
              >
                <Icon name={social.name} size={28} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </FadeInUp>

        {/* Footer text */}
        <div className="text-center space-y-2">
          <p className="text-gray-600 text-xs font-mono">
            © 2024 KATYA GOLUBENKO
          </p>
          <p className="text-hot-pink/40 text-xs font-mono">
            OBOLON VIPER EDITION
          </p>
        </div>
      </div>

      {/* Fixed decorative element */}
      <div className="fixed bottom-4 right-4 pointer-events-none opacity-50 z-50 hidden md:block">
        <Icon name="snail" size={32} className="text-hot-pink/30" />
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      <EssenceSection />
      <PlaylistSection />
      <VibeChaptersSection />
      <ArchiveSection />
      <FooterSection />
    </div>
  );
}

export default App;