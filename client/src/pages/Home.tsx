/**
 * Design note: This page follows the Vantage AI neo-noir corporate modernist direction with asymmetrical composition, dark premium surfaces, restrained teal signal accents, and concise, outcome-led business copy.
 */
import {
  ArrowRight,
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390780381/AxpbRTAYzfqwi4W97ueTHu/vantage-hero-premium-jvxhw8FpqsizKnLPm4TAYQ.webp";
const automationImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390780381/AxpbRTAYzfqwi4W97ueTHu/vantage-services-automation-HS29c67GSkf9Dbf5GzKwZS.webp";
const diligenceImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390780381/AxpbRTAYzfqwi4W97ueTHu/vantage-due-diligence-intelligence-Cx2C3WogyFUFfMka9KdzWX.webp";
const contactImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390780381/AxpbRTAYzfqwi4W97ueTHu/vantage-contact-grid-F6LaLaFm97qAgiaSbHEjBP.webp";

const services = [
  {
    title: "AI Automation",
    description:
      "We replace repetitive admin, disconnected handoffs, and slow manual workflows with systems that keep work moving without constant follow-up.",
  },
  {
    title: "Dealflow Intelligence",
    description:
      "We help owners and investors surface stronger opportunities sooner by organising signals, screening prospects, and keeping decisions focused.",
  },
  {
    title: "Due Diligence Agents",
    description:
      "We build agents that review documents, trace relationships, and highlight what matters so teams can move faster with clearer judgment.",
  },
] as const;

const valueProps = [
  "We build, host, and manage the system. Your team simply uses it.",
  "Every workflow is tailored to how your business actually runs.",
  "We speak in business outcomes, not technical theatre.",
  "You get a practical rollout with ongoing support, not a handover and goodbye.",
] as const;

const steps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We map the work that slows your team down, identify the highest-leverage automation opportunities, and define the right starting point.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "We design and implement the workflow, connect the right tools, and shape the experience around your team rather than forcing a template.",
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "We launch, monitor, and refine the system in production so it keeps delivering value as your operations evolve.",
  },
] as const;

const contactDetails = [
  {
    label: "Email 1",
    value: "[placeholder]",
    icon: Mail,
  },
  {
    label: "Email 2",
    value: "[placeholder]",
    icon: Mail,
  },
  {
    label: "Phone 1",
    value: "[placeholder]",
    icon: Phone,
  },
  {
    label: "Phone 2",
    value: "[placeholder]",
    icon: Phone,
  },
] as const;

const socialLinks = [
  {
    label: "Instagram",
    value: "[link placeholder]",
    icon: Instagram,
  },
  {
    label: "Facebook",
    value: "[link placeholder]",
    icon: Facebook,
  },
] as const;

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div
        className="vantage-grid-logo rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(93,202,165,0.12)]"
        aria-hidden="true"
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      <div>
        <p className="font-display text-lg font-extrabold tracking-[-0.04em] text-white">
          Vantage AI
        </p>
        <p className="text-xs uppercase tracking-[0.28em] text-white/48">
          Automation Agency
        </p>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-5">
      <span className="vantage-kicker">{eyebrow}</span>
      <div className="space-y-4">
        <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="vantage-shell min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#08131dcc]/95 backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <a href="#hero" aria-label="Go to top of page">
            <LogoMark />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 lg:flex">
            <a className="transition hover:text-white" href="#services">
              What We Do
            </a>
            <a className="transition hover:text-white" href="#why-vantage">
              Why Vantage AI
            </a>
            <a className="transition hover:text-white" href="#how-it-works">
              How It Works
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <a className="vantage-button-primary text-sm" href="#contact">
            Book a Free Discovery Call
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="section-anchor vantage-section overflow-hidden pb-10 pt-8 sm:pt-14 lg:pt-16">
          <div className="container grid items-end gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
            <Reveal className="space-y-8 lg:space-y-10">
              <div className="space-y-6">
                <span className="vantage-kicker">Eastern Suburbs, Sydney</span>
                <div className="space-y-5">
                  <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.94] text-white sm:text-6xl lg:text-[5.35rem]">
                    Stay Ahead With Intelligent Automation
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                    Vantage AI helps businesses automate operations, sharpen decisions,
                    and move faster with systems that are built to run in the background
                    and deliver real value in the foreground.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a className="vantage-button-primary" href="#contact">
                  Book a Free Discovery Call
                  <ArrowRight className="size-4" />
                </a>
                <a className="vantage-button-secondary" href="#services">
                  See What We Do
                  <ChevronRight className="size-4" />
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    label: "Built for",
                    value: "Owners & investors",
                  },
                  {
                    label: "Approach",
                    value: "Build, host, manage",
                  },
                  {
                    label: "Focus",
                    value: "Clear operational lift",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="vantage-stat-line vantage-panel rounded-[1.6rem] p-5 pl-7"
                  >
                    <p className="text-sm uppercase tracking-[0.24em] text-white/42">
                      {item.label}
                    </p>
                    <p className="mt-3 text-base font-semibold text-white/92">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="relative lg:pl-6">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(93,202,165,0.16),transparent_48%)] blur-3xl" />
              <div className="vantage-panel relative overflow-hidden rounded-[2rem] p-3 sm:p-4">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_32%,transparent_72%,rgba(93,202,165,0.12))]" />
                <img
                  src={heroImage}
                  alt="Premium abstract Vantage AI hero visual with dark architectural forms and teal automation lighting"
                  className="h-[28rem] w-full rounded-[1.6rem] object-cover sm:h-[34rem] lg:h-[40rem]"
                />
                <div className="absolute inset-x-8 bottom-8 max-w-sm rounded-[1.5rem] border border-white/10 bg-[#091521cc] p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.26em] text-white/48">
                    Vantage AI
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Intelligent systems for teams that want cleaner operations and
                    faster decisions.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="services" className="section-anchor vantage-section">
          <div className="container space-y-12 lg:space-y-16">
            <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="What We Do"
                title="Automation that clears friction and keeps work moving."
                description="We build focused AI systems that make operations cleaner, decisions sharper, and follow-through easier. The result is less manual effort, more visibility, and more room to grow."
              />
              <p className="max-w-md text-base leading-8 text-white/58">
                The work is practical by design. We target the bottlenecks, shape the
                workflow around your team, and keep the system reliable after launch.
              </p>
            </Reveal>

            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-start">
              <Reveal className="vantage-panel overflow-hidden rounded-[2rem] p-3 sm:p-4">
                <img
                  src={automationImage}
                  alt="Abstract Vantage AI automation visual showing layered panels and connected workflow nodes"
                  className="h-[22rem] w-full rounded-[1.6rem] object-cover sm:h-[26rem] xl:h-[100%]"
                />
              </Reveal>

              <div className="grid gap-5 md:grid-cols-3">
                {services.map((service, index) => (
                  <Reveal key={service.title} delay={index * 0.08}>
                    <article className="vantage-panel group flex h-full flex-col rounded-[1.9rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-[rgba(93,202,165,0.22)]">
                      <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#5DCAA5]">
                        0{index + 1}
                      </span>
                      <h3 className="mt-6 text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-5 text-base leading-8 text-white/66">
                        {service.description}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="why-vantage" className="section-anchor vantage-section">
          <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
            <Reveal className="space-y-8">
              <SectionHeading
                eyebrow="Why Vantage AI"
                title="A partner that handles the hard part without adding noise."
                description="You should not need to manage the infrastructure, chase fragmented tools, or decode technical jargon just to get better systems. We take ownership from design through ongoing management."
              />
              <div className="vantage-panel overflow-hidden rounded-[2rem] p-3 sm:p-4">
                <img
                  src={diligenceImage}
                  alt="Abstract due diligence and dealflow intelligence visual with layered documents and teal network signals"
                  className="h-[24rem] w-full rounded-[1.6rem] object-cover"
                />
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 md:pt-20">
              {valueProps.map((prop, index) => (
                <Reveal
                  key={prop}
                  delay={index * 0.07}
                  className={index % 2 === 1 ? "md:translate-y-10" : ""}
                >
                  <div className="vantage-outline rounded-[1.8rem] p-6 sm:p-7">
                    <div className="mb-6 inline-flex rounded-full border border-[#5DCAA5]/20 bg-[#5DCAA5]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-[#8ae2c5]">
                      Value {index + 1}
                    </div>
                    <p className="text-lg leading-8 text-white/84">{prop}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section-anchor vantage-section">
          <div className="container space-y-12">
            <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="How It Works"
                title="A simple rollout that gets useful quickly."
                description="We keep the process tight so you can move from idea to deployment without unnecessary delays, over-engineering, or endless internal lift."
              />
              <div className="max-w-md rounded-[1.6rem] border border-white/10 bg-white/4 px-5 py-4 text-sm leading-7 text-white/62 backdrop-blur">
                Discover → Build → Deploy. The structure stays simple so the outcome can stay strong.
              </div>
            </Reveal>

            <div className="relative grid gap-5 lg:grid-cols-3">
              <div className="absolute left-[8%] right-[8%] top-10 hidden h-px bg-[linear-gradient(90deg,rgba(93,202,165,0),rgba(93,202,165,0.5),rgba(93,202,165,0))] lg:block" />
              {steps.map((step, index) => (
                <Reveal key={step.step} delay={index * 0.08}>
                  <article className="vantage-panel relative flex h-full flex-col rounded-[1.9rem] p-7 sm:p-8">
                    <span className="text-5xl font-extrabold leading-none text-white/16">
                      {step.step}
                    </span>
                    <h3 className="mt-10 text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-white/66">
                      {step.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-anchor vantage-section pt-6">
          <div className="container">
            <div className="vantage-panel overflow-hidden rounded-[2.25rem]">
              <div className="grid gap-0 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
                <Reveal className="relative min-h-full overflow-hidden border-b border-white/8 p-4 xl:border-b-0 xl:border-r xl:p-5">
                  <img
                    src={contactImage}
                    alt="Branded Vantage AI rounded-square grid motif in teal on a dark background"
                    className="h-full min-h-[22rem] w-full rounded-[1.7rem] object-cover"
                  />
                  <div className="absolute inset-x-10 bottom-10 rounded-[1.4rem] border border-white/10 bg-[#08141fcc] p-6 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.26em] text-white/48">
                      Tagline
                    </p>
                    <p className="mt-3 max-w-sm text-2xl font-bold leading-tight text-white">
                      Stay ahead with intelligent automation.
                    </p>
                  </div>
                </Reveal>

                <div className="space-y-10 p-7 sm:p-9 lg:p-12">
                  <Reveal>
                    <SectionHeading
                      eyebrow="Contact"
                      title="Ready to make your operations lighter and sharper?"
                      description="If you want a system that removes friction, keeps work moving, and stays managed after launch, Vantage AI is ready to help."
                    />
                  </Reveal>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {contactDetails.map((detail, index) => {
                      const Icon = detail.icon;

                      return (
                        <Reveal key={detail.label} delay={index * 0.05}>
                          <div className="vantage-outline rounded-[1.5rem] p-5">
                            <div className="flex items-center gap-3 text-white/58">
                              <Icon className="size-4 text-[#5DCAA5]" />
                              <p className="text-sm uppercase tracking-[0.24em]">
                                {detail.label}
                              </p>
                            </div>
                            <p className="mt-4 text-lg font-semibold text-white">
                              {detail.value}
                            </p>
                          </div>
                        </Reveal>
                      );
                    })}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;

                      return (
                        <Reveal key={social.label} delay={0.15 + index * 0.05}>
                          <div className="vantage-outline rounded-[1.5rem] p-5">
                            <div className="flex items-center gap-3 text-white/58">
                              <Icon className="size-4 text-[#5DCAA5]" />
                              <p className="text-sm uppercase tracking-[0.24em]">
                                {social.label}
                              </p>
                            </div>
                            <p className="mt-4 text-lg font-semibold text-white">
                              {social.value}
                            </p>
                          </div>
                        </Reveal>
                      );
                    })}
                  </div>

                  <Reveal delay={0.24}>
                    <div className="flex flex-col gap-4 rounded-[1.7rem] border border-dashed border-[#5DCAA5]/24 bg-[#5DCAA5]/6 p-5 text-sm leading-7 text-white/68 sm:flex-row sm:items-center sm:justify-between">
                      <p>
                        The placeholder details are ready to be replaced with your live
                        email addresses, phone numbers, and social URLs before publishing.
                      </p>
                      <a className="vantage-button-primary shrink-0" href="#hero">
                        Back to top
                      </a>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 py-8">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <LogoMark />
            <p className="max-w-md text-sm leading-7 text-white/50">
              Stay ahead with intelligent automation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-white/58">
            <span className="rounded-full border border-white/10 px-4 py-2">
              Instagram: [link placeholder]
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Facebook: [link placeholder]
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
