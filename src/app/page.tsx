import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GradientButton } from "@/components/ui/GradientButton";
import { AgentCarousel } from "@/components/AgentCarousel";
import { ContactForm } from "@/components/ContactForm";
import {
  Phone,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Globe,
  Lock,
  Headphones,
  RefreshCw,
  Mail,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Never Miss a Call",
    description:
      "Our AI agents answer every call instantly, converting more leads into paying customers.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Serve customers around the clock without overtime costs or staffing headaches.",
  },
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    description:
      "Capture leads after hours and reduce vacancy rates with instant booking capabilities.",
  },
  {
    icon: Shield,
    title: "Reduce Delinquency",
    description:
      "Automated payment reminders and collection calls improve your bottom line.",
  },
];

const additionalFeatures = [
  {
    icon: Zap,
    title: "Instant Response",
    description:
      "Sub-3-second response times ensure customers never wait on hold.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track call volumes, conversion rates, and customer satisfaction in real-time.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Serve diverse customer bases with support for multiple languages.",
  },
  {
    icon: Lock,
    title: "PCI Compliant",
    description:
      "Secure payment processing that meets industry security standards.",
  },
  {
    icon: Headphones,
    title: "Seamless Handoff",
    description:
      "Smart escalation to human agents when complex situations arise.",
  },
  {
    icon: RefreshCw,
    title: "CRM Integration",
    description:
      "Connects with your existing management software for unified operations.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Features Preview Section */}
      <section id="features" className="py-24 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Self-Storage Companies Choose Us
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Purpose-built AI solutions that understand the unique challenges of
              the self-storage industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <GlassPanel
                key={index}
                variant="subtle"
                className="p-6 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 group-hover:glow-cyan transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* AI Voice Agents Section */}
      <section id="agents" className="py-24 relative scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">Our AI </span>
              <span className="gradient-text">Voice Agents</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Purpose-built AI agents that handle the unique challenges of
              self-storage customer service, reservations, and collections.
            </p>
          </div>
          <AgentCarousel autoplay autoplayInterval={6000} />
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Built with the reliability and security that self-storage
              businesses demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <GlassPanel
                key={index}
                variant="subtle"
                className="p-6 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 group-hover:glow-cyan transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">Get </span>
              <span className="gradient-text">Started Today</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Schedule a demo to see how our AI voice agents can transform your
              self-storage business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-slate-400 mb-8">
                Have questions? Our team is here to help you understand how AI
                can revolutionize your self-storage operations.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a
                      href="mailto:contact@storagecenter.ai"
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      contact@storagecenter.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a
                      href="tel:+15551234567"
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Office</h4>
                    <p className="text-slate-400">
                      123 Innovation Drive
                      <br />
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-12 p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                <h4 className="text-white font-medium mb-2">
                  Quick Response Guaranteed
                </h4>
                <p className="text-sm text-slate-400">
                  We typically respond to demo requests within 24 hours. For
                  urgent inquiries, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
