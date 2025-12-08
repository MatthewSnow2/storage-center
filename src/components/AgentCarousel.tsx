"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Calendar, CreditCard, Headphones, Target } from "lucide-react";

interface Agent {
  id: number;
  name: string;
  capability: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

const agents: Agent[] = [
  {
    id: 1,
    name: "Reservation Agent",
    capability: "24/7 Unit Booking",
    description:
      "Handles inbound calls from customers looking to rent storage units. Checks real-time availability, explains unit sizes and pricing, and completes reservations without human intervention. Never miss a lead, even at 2 AM.",
    icon: Calendar,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    name: "Payment Agent",
    capability: "Automated Collections",
    description:
      "Proactively contacts customers with overdue payments via phone or SMS. Processes payments securely over the phone, sets up payment plans, and reduces delinquency rates while freeing your staff from uncomfortable collection calls.",
    icon: CreditCard,
    gradient: "from-cyan-500 to-teal-400",
  },
  {
    id: 3,
    name: "Support Agent",
    capability: "Instant Customer Service",
    description:
      "Answers common questions about gate codes, office hours, unit access, and facility policies. Handles lock-out assistance, transfer requests, and move-out scheduling. Available around the clock to keep customers happy.",
    icon: Headphones,
    gradient: "from-teal-500 to-emerald-400",
  },
  {
    id: 4,
    name: "Lead Qualifier",
    capability: "Smart Lead Capture",
    description:
      "Engages website visitors and phone inquiries to understand their storage needs. Qualifies leads by gathering unit size requirements, move-in dates, and budget. Routes hot leads to your team with complete context.",
    icon: Target,
    gradient: "from-emerald-500 to-cyan-400",
  },
];

interface AgentCarouselProps {
  autoplay?: boolean;
  autoplayInterval?: number;
}

export function AgentCarousel({
  autoplay = true,
  autoplayInterval = 5000,
}: AgentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % agents.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + agents.length) % agents.length);
  }, []);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentAgent = agents[currentIndex];

  const getSlideIndex = (offset: number) => {
    return (currentIndex + offset + agents.length) % agents.length;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 15 : -15,
    }),
  };

  const wordVariants = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  };

  const words = useMemo(
    () => currentAgent.description.split(" "),
    [currentAgent.description]
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Agent Cards - 3D Carousel */}
        <div className="relative h-80 perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Previous Card */}
            <div
              className="absolute w-48 h-64 transition-all duration-500 ease-out cursor-pointer"
              style={{
                transform:
                  "translateX(-80px) scale(0.85) rotateY(15deg)",
                opacity: 0.5,
                zIndex: 1,
              }}
              onClick={prevSlide}
            >
              <AgentCard agent={agents[getSlideIndex(-1)]} />
            </div>

            {/* Current Card */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="w-56 h-72 z-10"
              >
                <AgentCard agent={currentAgent} isActive />
              </motion.div>
            </AnimatePresence>

            {/* Next Card */}
            <div
              className="absolute w-48 h-64 transition-all duration-500 ease-out cursor-pointer"
              style={{
                transform:
                  "translateX(80px) scale(0.85) rotateY(-15deg)",
                opacity: 0.5,
                zIndex: 1,
              }}
              onClick={nextSlide}
            >
              <AgentCard agent={agents[getSlideIndex(1)]} />
            </div>
          </div>
        </div>

        {/* Agent Details */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAgent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-bold text-white mb-2">
                {currentAgent.name}
              </h3>
              <p className="text-lg text-cyan-400 font-medium mb-4">
                {currentAgent.capability}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Animated Description */}
          <div className="min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentAgent.id}
                className="text-slate-400 text-lg leading-relaxed"
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {words.map((word, index) => (
                  <motion.span
                    key={`${currentAgent.id}-${index}`}
                    variants={wordVariants}
                    transition={{
                      duration: 0.22,
                      delay: index * 0.025,
                    }}
                    className="inline-block mr-1"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full glass hover:glow-cyan transition-all duration-300"
              aria-label="Previous agent"
            >
              <FaArrowLeft className="w-4 h-4 text-cyan-400" />
            </button>
            <div className="flex gap-2">
              {agents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-cyan-400 w-6"
                      : "bg-slate-600 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to agent ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full glass hover:glow-cyan transition-all duration-300"
              aria-label="Next agent"
            >
              <FaArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AgentCardProps {
  agent: Agent;
  isActive?: boolean;
}

function AgentCard({ agent, isActive }: AgentCardProps) {
  const IconComponent = agent.icon;

  return (
    <div
      className={`w-full h-full rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ${
        isActive ? "glass glow-cyan" : "glass-subtle"
      }`}
    >
      <div
        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center mb-4`}
      >
        <IconComponent className="w-8 h-8 text-white" />
      </div>
      <h4 className="font-semibold text-white text-lg mb-1">{agent.name}</h4>
      <p className="text-sm text-cyan-400">{agent.capability}</p>
    </div>
  );
}
