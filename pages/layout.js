import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Import loadSlim for slim version of tsparticles
import Intro from "../components/Common/Intro";
import Nav from "../components/Common/Nav/Nav";
import Footer from "../components/Common/Footer";
import { FaBars, FaMousePointer } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import Head from "next/head";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);
  const [init, setInit] = useState(false);

  // Initialize particles.js engine only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load slim version of particles.js
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Configure particles.js options
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000", // Dark background for contrast
        },
        opacity: 1,
      },
      fpsLimit: 60, // Maintain smooth animation
      interactivity: {
        events: {
          onClick: {
            enable: true, // Enable click to toggle particles
            mode: "push", // Clicking adds more particles (like "live" cells)
          },
          onHover: {
            enable: true, // Enable hover interactions for dynamic feedback
            mode: "repulse", // Hover repels particles, simulating a "push-back" effect
          },
        },
      },
      particles: {
        color: {
          value: "#00FF00", // Green particles for "alive" cells
        },
        links: {
          enable: false, // Disabling links between particles (cells are isolated)
        },
        move: {
          direction: "none",
          enable: false, // No movement, particles stay in place like a grid
          random: false,
          speed: 0,
          straight: false,
        },
        number: {
          value: 300, // Increase particle count for denser grid effect
          density: {
            enable: true,
            area: 800, // Ensures particles are spread across the area
          },
        },
        opacity: {
          value: 1, // Full opacity for the particles
          anim: {
            enable: true,
            speed: 0.5, // Slow fading effect for the particles
            opacity_min: 0.1, // Minimum opacity to simulate cells fading in and out
          },
        },
        shape: {
          type: "edge", // Circle shape to resemble cells
        },
        size: {
          value: 4, // Slightly larger particles for a more prominent effect
          anim: {
            enable: true,
            speed: 1, // Slow animation for particle size change
            size_min: 1, // Minimum size of particle
          },
        },
      },
      detectRetina: true, // Ensure particles look sharp on high-res screens
    }),
    []
  );

  if (init) {
    return (
      <div className="h-screen lg:p-[0.8rem] flex flex-col select-none font-circular">
        <Head>
          <title>Portfolio MN</title>
        </Head>

        {/* Particles Background */}
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute top-0 left-0 w-full h-full z-0"
        />

        {/* Mobile Navbar */}
        <div className="lg:hidden">
          <div className="text-LightGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative">
            <div
              className="icon flex items-center gap-x-2"
              onClick={() => setIntro(!intro)}
            >
              <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
                <SlOptionsVertical />
              </span>
              <div className="text-Snow absolute -right-1 -bottom-1">
                <FaMousePointer />
              </div>
            </div>
            <div
              className="icon flex items-center gap-x-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
                <FaBars />
              </span>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex relative h-full justify-between gap-x-3 flex-1">
          {/* Left Sidebar */}
          <div
            className={`w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-DeepNightBlack shadow-2xl z-50 lg:flex flex-col lg:relative ${
              intro ? "flex absolute" : "hidden"
            }`}
          >
            <Intro isOpen={intro} setIsOpen={setIntro} />
          </div>
          {/* Overlay */}
          {intro && (
            <div
              onClick={() => setIntro(false)}
              className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[2px] z-40"
            ></div>
          )}
          {/* Middle Section - Main Content with Sticky Footer */}
          <div className="w-full h-auto lg:w-9/12 shadow-2xl relative overflow-auto overflow-x-hidden no-scrollbar flex flex-col min-h-screen rounded-xl bg-gradient-to-b from-EveningBlack to-black/20">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          {/* Right Sidebar */}
          <div className="hidden lg:block absolute lg:w-20 lg:relative bg-DeepNightBlack shadow-2xl rounded-xl overflow-hidden">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="bg-MidNightBlack/20 text-Green hidden lg:flex items-center h-16 justify-center text-2xl"
            >
              <span className="icon border-2 border-Green p-2 rounded-xl">
                <FaBars />
              </span>
            </div>
          </div>
          {/* Navigation */}
          <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    );
  }

  return <></>; // Render nothing if particles are not initialized
}
