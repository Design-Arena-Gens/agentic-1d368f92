import { createElement } from "react";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

const PortfolioExperience = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
) => createElement("portfolio-experience", props);

const heroStats = [
  { label: "Shipping velocity", value: "28 prod releases / quarter" },
  { label: "Design system coverage", value: "92% shared components" },
  { label: "A11y baseline", value: "WCAG 2.1 AA" },
];

const focusAreas = [
  {
    title: "React Craft",
    description:
      "Next.js, Server Components, and type-safe API layers that keep experiences fast and maintainable.",
    bullets: [
      "Own design system foundations with Storybook & Chromatic.",
      "Architect progressive enhancement and graceful degradation.",
      "Automate accessibility and visual regression coverage.",
    ],
  },
  {
    title: "Angular Engineering",
    description:
      "Standalone components, Signals, and Angular Elements to modernize enterprise interfaces without downtime.",
    bullets: [
      "Stage migrations from AngularJS with strangler patterns.",
      "Design reactive state flows with RxJS and Signals.",
      "Optimize bundle health with differential loading.",
    ],
  },
  {
    title: "Collaboration Ops",
    description:
      "Lean workflows that align product, design, and QA so every iteration gets closer to the KPI we defined up front.",
    bullets: [
      "Audience-first roadmaps and async update rituals.",
      "Feature flag rollouts with analytics guardrails.",
      "Team enablement via living documentation & workshops.",
    ],
  },
];

const projectHighlights = [
  {
    name: "Activation Workspace",
    summary:
      "Reimagined onboarding for a growth-stage SaaS platform with a React/Next.js micro-frontend rollout.",
    impact: ["↑ 18% activation rate", "↓ 32% time-to-value"],
    stack: "React, Next.js, LaunchDarkly, Zustand, Tailwind CSS",
  },
  {
    name: "Insight Control Tower",
    summary:
      "Stabilized a complex Angular application by introducing standalone modules and a shared component library.",
    impact: ["↑ 94 accessibility score", "↓ 45% bundle size"],
    stack: "Angular 17, Nx, Storybook, Jest, Cypress",
  },
  {
    name: "Field Agent Toolkit",
    summary:
      "Delivered offline-first tooling for field crews with a reactive data layer and resilient caching strategy.",
    impact: ["↑ 2.4× sync reliability", "↓ 25% support tickets"],
    stack: "React Native Web, GraphQL, Service Workers",
  },
];

const learningTrack = [
  {
    title: "Systems Thinking",
    description:
      "Design tokens, theme tooling, and accessibility heuristics to keep multi-brand surfaces in sync.",
  },
  {
    title: "Performance Budgeting",
    description:
      "Iterate with lab + field metrics, core web vitals monitoring, and dashboards teams actually use.",
  },
  {
    title: "Team Enablement",
    description:
      "Run pairing clinics, code review playbooks, and self-serve documentation to unblock delivery.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.3),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.25),_transparent_45%)]" />
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-16 md:px-10 lg:px-16 lg:py-24">
        <header className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
              Avery Kim · Frontend Engineer
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              React polish, Angular reliability, and the systems thinking that
              makes both ship on time.
            </h1>
            <p className="text-lg leading-relaxed text-slate-200/85 md:text-xl">
              I turn complex product goals into interfaces that feel effortless.
              Every release is grounded in measurable outcomes, accessible
              defaults, and a calm delivery rhythm for the teams I partner with.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:hello@uxsprint.dev"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-slate-100"
              >
                Open collaboration request
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200/90 hover:text-cyan-100"
              >
                View recent launches →
              </a>
            </div>
          </div>
          <div className="grid gap-4 text-sm text-slate-200/70 sm:grid-cols-3 lg:text-right">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-cyan-500/10 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-slate-300/70">
                  {stat.label}
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_80px_-50px_rgba(56,189,248,0.5)] backdrop-blur">
            <h2 className="text-3xl font-semibold text-white">
              React execution with a product mindset
            </h2>
            <p className="text-base leading-relaxed text-slate-200/85">
              Every React interface I ship is measured against business and user
              outcomes. I align stakeholders early, chart out migration paths,
              and document the design system decisions that keep velocity high
              as teams scale.
            </p>
            <dl className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-900/70 p-5">
                <dt className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                  Signature strengths
                </dt>
                <dd className="mt-3 space-y-2 text-sm text-slate-100/80">
                  <p>• Progressive enhancement across multi-surface apps</p>
                  <p>• Data modeling that keeps UI resilient under load</p>
                  <p>• Storybook-driven design system delivery</p>
                </dd>
              </div>
              <div className="rounded-2xl bg-slate-900/70 p-5">
                <dt className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                  Collaboration style
                </dt>
                <dd className="mt-3 space-y-2 text-sm text-slate-100/80">
                  <p>• Crisp async updates & metrics dashboards</p>
                  <p>• Close partnership with design & research</p>
                  <p>• Pairing sessions that unblock quickly</p>
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
              Calendar snapshot
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-100/80">
              <li>
                <span className="font-semibold text-white">Mon /</span> Design
                system triage with product & design
              </li>
              <li>
                <span className="font-semibold text-white">Tue /</span> Pairing
                clinic for front-end guild
              </li>
              <li>
                <span className="font-semibold text-white">Wed /</span> Angular
                modernization roadmap workshop
              </li>
              <li>
                <span className="font-semibold text-white">Thu /</span> KPI
                review & experiment planning
              </li>
              <li>
                <span className="font-semibold text-white">Fri /</span> Heads-down
                build & retros with analytics insights
              </li>
            </ul>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-7 shadow-lg shadow-cyan-400/10 transition hover:border-cyan-200/40 hover:shadow-cyan-200/20"
            >
              <h3 className="text-xl font-semibold text-white">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                {area.description}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-100/80">
                {area.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <h2
              id="case-studies"
              className="text-3xl font-semibold text-white"
            >
              Case studies aligned to measurable wins
            </h2>
            <div className="grid gap-6">
              {projectHighlights.map((project) => (
                <article
                  key={project.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-lg shadow-cyan-500/10 backdrop-blur"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {project.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">
                      {project.stack}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-200/80">
                    {project.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100">
                    {project.impact.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-cyan-200/30 px-4 py-1"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-cyan-500/10 backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
              Angular experience lens
            </h3>
            <p className="text-sm leading-relaxed text-slate-200/80">
              I use Angular to modernize mission-critical dashboards, delivering
              predictable migrations and rock-solid accessibility. Explore the
              interactive snapshot for a deeper dive into my Angular delivery
              approach.
            </p>
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <PortfolioExperience className="block" />
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">
              Continuous learning keeps the craft sharp
            </h2>
            <p className="text-base leading-relaxed text-slate-200/85">
              I’m intentional about staying current without chasing hype. Each
              quarter I pick a practice area, pair with other specialists, and
              deliver internal workshops so the whole team benefits.
            </p>
          </div>
          <div className="grid gap-5">
            {learningTrack.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-slate-950/60 p-6 shadow-lg shadow-cyan-300/10"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-200/80">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-col items-start gap-6 border-t border-white/10 pt-8 text-sm text-slate-200/70 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold text-white">
              Ready to align on your next interface launch?
            </p>
            <p className="mt-2 text-sm text-slate-200/70">
              I’m currently partnering with teams shipping composable product
              experiences across React and Angular stacks.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@uxsprint.dev"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-cyan-200/60 hover:text-cyan-100"
            >
              Start a thread
            </a>
            <a
              href="https://www.linkedin.com/in/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-cyan-200/40 hover:text-cyan-100"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
