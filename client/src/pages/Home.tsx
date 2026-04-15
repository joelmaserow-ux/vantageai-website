/**
 * Design note: This page follows the Vantage AI neo-noir corporate modernist direction with asymmetrical composition, dark premium surfaces, restrained teal signal accents, and concise, outcome-led business copy.
 */
import { ArrowRight, ChevronRight, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390780381/AxpbRTAYzfqwi4W97ueTHu/vantage-hero-premium-jvxhw8FpqsizKnLPm4TAYQ.webp";
const automationImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390780381/AxpbRTAYzfqwi4W97ueTHu/vantage-services-automation-HS29c67GSkf9Dbf5GzKwZS.webp";
const insightImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390780381/AxpbRTAYzfqwi4W97ueTHu/vantage-due-diligence-intelligence-Cx2C3WogyFUFfMka9KdzWX.webp";
const contactImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390780381/AxpbRTAYzfqwi4W97ueTHu/vantage-contact-grid-F6LaLaFm97qAgiaSbHEjBP.webp";

const services = [
  {
    title: "Operations automation",
    description:
      "We streamline repetitive admin, handoffs, approvals, and internal workflows so your team spends less time chasing work and more time moving it forward.",
  },
  {
    title: "Customer and enquiry flow",
    description:
      "We automate the follow-up, qualification, routing, and response work that often slows sales, service, and inbound opportunities across a business.",
  },
  {
    title: "Reporting and back-office lift",
    description:
      "We reduce the drag of manual updates, status tracking, and information gathering by building systems that surface what matters without the usual overhead.",
  },
] as const;

const valueProps = [
  "We build, host, and manage the system, so your team can simply use it.",
  "If part of the business is manual, repetitive, or slow, there is a strong chance we can improve it.",
  "We shape the workflow around how your business already operates instead of forcing a clunky template.",
  "You get practical automation with ongoing support, not a one-off handover.",
] as const;

const steps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We identify the parts of the business that are slowing things down and focus on the highest-leverage place to start.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "We design and implement the workflow, connect the right tools, and make the system fit your team rather than the other way around.",
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "We launch, manage, and refine the automation so it keeps delivering value as your operations evolve.",
  },
] as const;

const contactDetails = [
  {
    label: "Email",
    name: "Jon Tyson",
    value: "jon@dominion.build",
    href: "mailto:jon@dominion.build",
    icon: Mail,
  },
  {
    label: "Email",
    name: "Joel Maserow",
    value: "joel.maserow@gmail.com",
    href: "mailto:joel.maserow@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    name: "Jon Tyson",
    value: "+61 420 690 775",
    href: "tel:+61420690775",
    icon: Phone,
  },
  {
    label: "Phone",
    name: "Joel Maserow",
    value: "+61 402 085 070",
    href: "tel:+61402085070",
    icon: Phone,
  },
] as const;

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/vantageai_stayahead?igsh=dWNrMG1iY2dzdnBu",
    platform: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/14amYqfmNEZ/",
    platform: "facebook",
  },
] as const;

const clientLogoSlots = [
  "Client Logo",
  "Client Logo",
  "Client Logo",
  "Client Logo",
  "Client Logo",
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

function SocialMark({
  platform,
}: {
  platform: (typeof socialLinks)[number]["platform"];
}) {
  if (platform === "instagram") {
    return (
      <svg
        viewBox="0 0 448 512"
        className="size-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9 0-14.9 12-26.9 26.9-26.9 14.9 0 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.7-66.7-35.6-92.5C401.3 35.9 369.8 27.9 334.6 26.2 298.2 24.1 189.8 24.1 153.4 26.2c-35.2 1.7-66.7 9.7-92.5 35.5-25.9 25.8-33.8 57.2-35.6 92.5-2.1 36.4-2.1 144.7 0 181.1 1.7 35.3 9.7 66.7 35.6 92.5 25.8 25.8 57.2 33.8 92.5 35.5 36.4 2.1 144.7 2.1 181.1 0 35.2-1.7 66.7-9.7 92.5-35.5 25.9-25.8 33.8-57.2 35.6-92.5 2.1-36.4 2.1-144.7 0-181.1zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 512"
      className="size-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
}

function SocialIconButton({
  href,
  label,
  platform,
}: {
  href: string;
  label: string;
  platform: (typeof socialLinks)[number]["platform"];
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#5DCAA5]/28 bg-[#08131d] text-[#5DCAA5] shadow-[0_12px_28px_rgba(2,8,12,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#5DCAA5]/52 hover:bg-[#0a1822] hover:text-[#82dfbf] hover:shadow-[0_0_0_1px_rgba(93,202,165,0.08),0_0_28px_rgba(93,202,165,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DCAA5]/70"
    >
      <span className="transition duration-300 group-hover:scale-110">
        <SocialMark platform={platform} />
      </span>
    </a>
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

          <a className="vantage-button-primary text-sm" href="#contact-details">
            Email Us About Your Business
          </a>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="section-anchor vantage-section overflow-hidden pb-10 pt-8 sm:pt-14 lg:pt-16"
        >
          <div className="container grid items-end gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
            <Reveal className="space-y-8 lg:space-y-10">
              <div className="space-y-6">
                <span className="vantage-kicker">Eastern Suburbs, Sydney</span>
                <div className="space-y-5">
                  <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.94] text-white sm:text-6xl lg:text-[5.35rem]">
                    Stay Ahead With Intelligent Automation
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                    Vantage AI helps businesses automate the parts of work that slow them
                    down. From admin and follow-up to reporting and internal handoffs, we
                    build systems that keep operations moving and free your team to focus
                    on what matters.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a className="vantage-button-primary" href="#contact-details">
                  Email Us About Your Business
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
                    value: "Owners, operators, investors",
                  },
                  {
                    label: "Approach",
                    value: "Build, host, manage",
                  },
                  {
                    label: "Focus",
                    value: "Less friction, more flow",
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
                  className="h-[28rem] w-full rounded-[1.7rem] object-cover sm:h-[34rem]"
                />
                <div className="absolute inset-x-8 bottom-8 max-w-sm rounded-[1.5rem] border border-white/10 bg-[#091521cc] p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.26em] text-white/48">
                    Vantage AI
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Intelligent systems for teams that want cleaner operations and less
                    manual lift.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pb-4">
          <div className="container">
            <Reveal className="vantage-outline rounded-[1.9rem] px-6 py-6 sm:px-7">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8ae2c5]">
                    Client proof
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/62">
                    A dedicated logo strip now sits beneath the hero and is ready for your
                    real client marks once you send them through.
                  </p>
                </div>
                <div className="grid w-full gap-3 sm:grid-cols-3 lg:max-w-3xl lg:grid-cols-5">
                  {clientLogoSlots.map((logo, index) => (
                    <div
                      key={`${logo}-${index}`}
                      className="flex min-h-[5.2rem] items-center justify-center rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/34"
                    >
                      {logo}
                    </div>
                  ))}
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
                title="We can automate more parts of a business than most teams expect."
                description="The goal is simple: remove manual drag, make information easier to use, and keep work moving with less friction across the business."
              />
              <p className="max-w-md text-base leading-8 text-white/58">
                If there is repetitive work, inconsistent follow-up, slow reporting, or too
                much admin sitting behind the scenes, there is a good chance we can help.
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
                title="You do not need a niche use case to benefit from automation."
                description="Many businesses are carrying manual work they have simply learned to live with. We help identify where automation will create the clearest lift and then take ownership of making it work properly."
              />
              <div className="vantage-panel overflow-hidden rounded-[2rem] p-3 sm:p-4">
                <img
                  src={insightImage}
                  alt="Abstract Vantage AI systems visual with layered interfaces and teal signal pathways"
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
                description="We keep the process tight so you can move from idea to implementation without unnecessary delays, over-engineering, or endless internal lift."
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

        <section id="contact" className="section-anchor vantage-section pt-2">
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

                <div className="space-y-8 p-7 sm:p-9 lg:p-12">
                  <Reveal>
                    <SectionHeading
                      eyebrow="Contact"
                      title="Questions about your business or where automation could help?"
                      description="Email Jon or Joel directly for services, questions, or a first conversation about where the clearest automation opportunity may be in your business."
                    />
                  </Reveal>

                  <div id="contact-details" className="space-y-6 scroll-mt-20">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {contactDetails.map((detail, index) => {
                        const Icon = detail.icon;

                        return (
                          <Reveal key={`${detail.label}-${detail.name}`} delay={index * 0.05}>
                            <a
                              href={detail.href}
                              className="vantage-outline block rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#5DCAA5]/28"
                            >
                              <div className="flex items-center gap-3 text-white/58">
                                <Icon className="size-4 text-[#5DCAA5]" />
                                <p className="text-sm uppercase tracking-[0.24em]">
                                  {detail.label}
                                </p>
                              </div>
                              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8ae2c5]">
                                {detail.name}
                              </p>
                              <p className="mt-2 text-lg font-semibold text-white">
                                {detail.value}
                              </p>
                            </a>
                          </Reveal>
                        );
                      })}
                    </div>

                    <Reveal delay={0.15}>
                    <div className="vantage-outline rounded-[1.6rem] p-5 sm:p-6">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-sm uppercase tracking-[0.24em] text-white/52">
                            Follow Vantage AI
                          </p>
                          <p className="mt-2 text-base leading-7 text-white/70">
                            Connect with us on Instagram and Facebook.
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          {socialLinks.map((social) => (
                            <SocialIconButton
                              key={social.label}
                              href={social.href}
                              label={social.label}
                              platform={social.platform}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                  </div>

                  <Reveal delay={0.24}>
                    <div className="flex flex-col gap-4 rounded-[1.7rem] border border-dashed border-[#5DCAA5]/24 bg-[#5DCAA5]/6 p-5 text-sm leading-7 text-white/68 sm:flex-row sm:items-center sm:justify-between">
                      <p>
                        Reach out directly by email or phone and we can tell you quickly
                        whether automation is likely to help your business.
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

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <SocialIconButton
                key={social.label}
                href={social.href}
                label={social.label}
                platform={social.platform}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
