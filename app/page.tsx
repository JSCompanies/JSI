import Image from 'next/image';

const workAreas = [
  {
    title: 'Education & Information',
    text: 'Plain-language educational materials that help incarcerated people better understand systems, opportunities, and resources available to them.',
    mark: '01',
    icon: '📚',
  },
  {
    title: 'Reentry Preparation',
    text: 'Information related to employment, identification, housing, benefits, education, transportation, and rebuilding life after incarceration.',
    mark: '02',
    icon: '🗺️',
  },
  {
    title: 'Family Connection',
    text: 'Resources that help families understand incarceration, communicate effectively, prepare for release, and navigate community services.',
    mark: '03',
    icon: '🤝',
  },
  {
    title: 'Justice & Civic Literacy',
    text: 'Educational content that explains courts, local government, public systems, rights, responsibilities, and civic participation in accessible language.',
    mark: '04',
    icon: '⚖️',
  },
  {
    title: 'Faith & Encouragement',
    text: 'Optional inspirational and faith-based materials designed to support reflection, resilience, hope, and personal growth.',
    mark: '05',
    icon: '✨',
  },
];

const mailingMaterials = [
  'Reentry planning guides',
  'Employment and workforce information',
  'Housing and identification resources',
  'Educational opportunities',
  'Family-support information',
  'Civic and justice-system literacy',
  'Life-skills materials',
  'Faith and inspirational reflections',
  'Community-resource directories',
];

const commitments = [
  { label: 'Educational', description: 'Plain language, real information' },
  { label: 'Accurate', description: 'Verified and reliable content' },
  { label: 'Respectful', description: 'Dignity in every word' },
  { label: 'Accessible', description: 'Designed for everyone' },
  { label: 'Constructive', description: 'Focused on what is possible' },
];

const stats = [
  { number: '2.3M', label: 'People incarcerated in the U.S.' },
  { number: '95%', label: 'Will return to communities' },
  { number: '68%', label: 'Rearrest rate without preparation' },
  { number: '1 in 4', label: 'Children have an incarcerated parent' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/95 shadow-sm backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Just Systems Initiative home">
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-sm border border-accent/25 bg-white shadow-sm">
              <Image
                src="/jsi-logo-mark.png"
                alt=""
                width={44}
                height={44}
                className="h-10 w-10 object-contain"
              />
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-base font-semibold tracking-wide text-primary">
                Just Systems Initiative
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
                Justice. Stewardship. Integrity.
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a className="text-muted-foreground transition-colors hover:text-primary" href="#work">What We Do</a>
            <a className="text-muted-foreground transition-colors hover:text-primary" href="#inside-out">Inside/Out</a>
            <a className="text-muted-foreground transition-colors hover:text-primary" href="#status">Status</a>
            <a
              className="inline-flex min-h-9 items-center rounded-sm bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-sm transition hover:bg-[#1f2723]"
              href="#connect"
            >
              Connect
            </a>
          </div>
        </nav>
      </header>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-border"
        style={{
          background: 'linear-gradient(135deg, #f9f8f3 0%, #f0ede4 35%, #e8ede6 70%, #dde6da 100%)',
        }}
      >
        {/* Decorative background grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(39,50,43,0.045) 79px, rgba(39,50,43,0.045) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(39,50,43,0.045) 79px, rgba(39,50,43,0.045) 80px)',
          }}
        />
        {/* Large accent circle */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, oklch(0.62 0.112 82.5) 0%, transparent 70%)',
          }}
        />

        <div className="relative mx-auto grid min-h-[calc(100svh-65px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-7 inline-flex items-center gap-2.5 border border-accent/30 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-accent shadow-sm backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Nonprofit organization in formation
            </p>

            <h1 className="font-heading text-[clamp(3rem,7.5vw,7.2rem)] font-semibold leading-[0.87] tracking-tight text-primary">
              Building<br />
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(135deg, oklch(0.19 0.027 255.45) 40%, oklch(0.62 0.112 82.5))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                pathways
              </span>
              <br />
              from<br />incarceration<br />
              <span className="text-accent">to opportunity.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Just Systems Initiative is a developing nonprofit working to improve
              access to information, support, and reentry resources for people
              impacted by the criminal justice system and their families.
            </p>

            <p className="mt-5 max-w-xl border-l-[3px] border-accent pl-4 text-base leading-7 text-muted-foreground">
              People should not lose access to knowledge, dignity, connection, or
              opportunity simply because they are incarcerated.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#inside-out"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-primary-foreground shadow-md transition hover:scale-[1.02] hover:bg-[#1f2723] hover:shadow-lg"
              >
                View JSI Inside/Out
                <span aria-hidden="true" className="ml-1">→</span>
              </a>
              <a
                href="#connect"
                className="inline-flex min-h-13 items-center justify-center rounded-sm border-2 border-primary/25 bg-white/80 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-primary shadow-sm backdrop-blur transition hover:border-primary/50 hover:shadow-md"
              >
                Partnership inquiries
              </a>
            </div>
          </div>

          {/* Right column: visual card stack */}
          <div className="relative" aria-label="JSI pathway from education to reentry">
            {/* Floating accent blocks */}
            <div aria-hidden="true" className="absolute -left-4 top-8 h-20 w-20 border-2 border-accent/30 bg-white/40" />
            <div aria-hidden="true" className="absolute -bottom-4 right-4 h-28 w-28 border border-primary/15 bg-white/30" />

            <div className="relative flex flex-col gap-4">
              {/* Logo card */}
              <div className="border border-primary/10 bg-white/95 p-7 shadow-[0_30px_90px_rgba(25,34,43,0.12)] backdrop-blur-sm">
                <Image
                  src="/jsi-logo-wide.png"
                  alt="Just Systems Initiative — Justice. Stewardship. Integrity."
                  width={480}
                  height={144}
                  className="mx-auto max-h-32 w-full object-contain"
                  priority
                />
              </div>

              {/* Step cards */}
              {[
                { step: 'Education', description: 'Plain-language information before release', color: 'bg-secondary' },
                { step: 'Connection', description: 'Families, communities, and trusted resources', color: 'bg-white/95' },
                { step: 'Reentry', description: 'Practical preparation for the road home', color: 'bg-secondary' },
              ].map(({ step, description, color }, index) => (
                <div
                  key={step}
                  className={`grid grid-cols-[52px_1fr] items-start gap-4 border border-primary/10 p-5 shadow-[0_20px_60px_rgba(39,50,43,0.09)] backdrop-blur-sm ${color}`}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-sm bg-accent/15 font-heading text-2xl font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-heading text-xl font-semibold text-primary">{step}</span>
                    <span className="mt-0.5 block text-sm leading-6 text-muted-foreground">{description}</span>
                  </span>
                </div>
              ))}

              {/* CTA card */}
              <div className="border-l-4 border-accent bg-primary p-6 shadow-[0_30px_80px_rgba(25,34,43,0.22)]">
                <p className="font-heading text-2xl font-semibold leading-snug text-primary-foreground">
                  Preparation should begin<br />before the gate opens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ────────────────────────────────────────── */}
      <section className="border-b border-border bg-primary py-12" aria-label="Key statistics">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map(({ number, label }) => (
              <div key={label} className="text-center">
                <div className="font-heading text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-none text-accent">
                  {number}
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/65">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ─────────────────────────────────────────── */}
      <section id="work" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="section-label">What We Do</p>
              <h2 className="section-title">Information,<br />preparation,<br />and connection.</h2>
            </div>
            <p className="max-w-2xl self-end text-lg leading-8 text-muted-foreground">
              Every service JSI provides is built on the belief that knowledge
              is the first step toward freedom — and that people deserve that
              knowledge before they walk out the door.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {workAreas.map((area) => (
              <article
                key={area.title}
                className="group relative overflow-hidden border border-border bg-card p-7 shadow-[0_12px_40px_rgba(39,50,43,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(39,50,43,0.12)]"
              >
                {/* Hover accent bar */}
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                <span className="mb-6 inline-flex items-center gap-3">
                  <span className="font-heading text-xl font-semibold text-accent">{area.mark}</span>
                  <span className="h-px flex-1 bg-accent/30" />
                  <span className="text-2xl" aria-hidden="true">{area.icon}</span>
                </span>
                <h3 className="font-heading text-xl font-semibold text-primary">{area.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIDE/OUT ─────────────────────────────────────────── */}
      <section
        id="inside-out"
        className="relative overflow-hidden border-y border-border py-24 sm:py-28"
        style={{ background: 'linear-gradient(135deg, #f0ede4 0%, #e9ece8 50%, #f5f3ed 100%)' }}
      >
        {/* Decorative element */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 h-[500px] w-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, oklch(0.62 0.112 82.5) 0%, transparent 65%)' }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-label">JSI Inside/Out</p>
              <h2 className="section-title">Education.<br />Connection.<br />Reentry.</h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
                JSI Inside/Out is our correctional education and resource-mailing
                initiative — delivering knowledge directly to the people who need it most.
              </p>
              <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
                Through partnerships with correctional communication providers and
                participating institutions, JSI plans to distribute educational and
                inspirational materials directly to incarcerated individuals.
              </p>
              <div className="mt-8 border-l-4 border-accent bg-white/80 px-6 py-5 shadow-sm">
                <p className="font-heading text-xl font-semibold leading-snug text-primary">
                  Our goal is not simply to send mail. Our goal is to make each
                  mailing a bridge between where someone is and what may be
                  possible next.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Materials we distribute
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {mailingMaterials.map((item, i) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 border border-primary/10 bg-white/90 px-5 py-3.5 shadow-sm transition hover:border-accent/40 hover:bg-white"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-accent/12 font-heading text-xs font-bold text-accent transition group-hover:bg-accent group-hover:text-white"
                    >
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-28">
        {/* Subtle grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 39px, white 39px, white 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, white 39px, white 40px)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="section-label text-accent">Why This Matters</p>
              <h2 className="font-heading text-[clamp(2.3rem,5vw,5rem)] font-semibold leading-[0.92] tracking-normal text-primary-foreground">
                The road home<br />
                <span className="text-accent">starts before</span><br />
                the gate opens.
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-lg leading-8 text-white/80">
                Release from incarceration often comes with immediate practical
                barriers: identification, transportation, housing, employment,
                health care, technology access, family reunification, and
                understanding complex public systems.
              </p>
              <p className="leading-7 text-white/70">
                By getting useful information into people&apos;s hands while they
                are incarcerated, JSI seeks to strengthen reentry preparation,
                family stability, personal agency, and access to community
                resources.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  'Reduce reincarceration',
                  'Strengthen families',
                  'Build civic agency',
                  'Restore dignity',
                ].map((goal) => (
                  <div key={goal} className="flex items-center gap-2.5 rounded-sm border border-white/10 bg-white/8 px-4 py-3">
                    <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm font-semibold text-white/85">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR COMMITMENT ─────────────────────────────────────── */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="section-label">Our Commitment</p>
              <h2 className="section-title">Dignity<br />with<br />discipline.</h2>
              <p className="mt-7 leading-7 text-muted-foreground">
                Every resource JSI produces is held to five standards. No
                exceptions.
              </p>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-5">
                {commitments.map(({ label, description }) => (
                  <div
                    key={label}
                    className="group flex flex-col gap-3 border border-border bg-secondary p-5 text-center transition hover:border-accent/40 hover:bg-white hover:shadow-md"
                  >
                    <span className="font-heading text-base font-bold text-primary">{label}</span>
                    <span className="text-xs leading-5 text-muted-foreground">{description}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <article className="border border-border p-7 transition hover:shadow-md">
                  <span aria-hidden="true" className="mb-6 block h-1 w-14 bg-accent" />
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    Facility-aware communication
                  </h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    All correctional mailings are designed to comply with
                    applicable facility rules and communication-provider
                    requirements.
                  </p>
                </article>
                <article className="border border-border p-7 transition hover:shadow-md">
                  <span aria-hidden="true" className="mb-6 block h-1 w-14 bg-accent" />
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    Educational, not legal representation
                  </h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    JSI does not provide individualized legal representation
                    through its educational mailing program.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATUS ─────────────────────────────────────────────── */}
      <section id="status" className="border-y border-border bg-secondary py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="section-label">Organization Status</p>
              <h2 className="section-title">
                In development<br />for long-term<br />public benefit.
              </h2>
            </div>
            <div>
              <div className="border-l-4 border-accent bg-white p-8 shadow-[0_20px_60px_rgba(39,50,43,0.08)]">
                <p className="text-lg leading-8 text-muted-foreground">
                  Just Systems Initiative is currently in organizational
                  development as a nonprofit initiative pursuing formal
                  charitable nonprofit status.
                </p>
                <p className="mt-5 leading-7 text-muted-foreground">
                  Our developing governance, programs, partnerships, and
                  community work are being structured around long-term public
                  benefit and measurable impact.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {['Governance', 'Programs', 'Partnerships'].map((item) => (
                  <div key={item} className="border border-primary/15 bg-white/60 p-4 text-center">
                    <span className="mb-1 block h-1 w-6 bg-accent mx-auto" />
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONNECT ────────────────────────────────────────────── */}
      <section id="connect" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 text-center">
            <p className="section-label mx-auto w-fit">Connect With JSI</p>
            <h2 className="section-title mx-auto max-w-3xl">
              Honoring dignity.<br />Building pathways.<br />Strengthening communities.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                mark: 'P',
                title: 'Partnerships',
                text: 'Educational, nonprofit, faith, civic, and reentry partners.',
                accent: 'border-t-accent',
              },
              {
                mark: 'M',
                title: 'Educational materials',
                text: 'Program inquiries for JSI Inside/Out and resource mailing.',
                accent: 'border-t-primary',
              },
              {
                mark: 'V',
                title: 'Volunteer opportunities',
                text: 'Board development, community support, and future launch needs.',
                accent: 'border-t-accent',
              },
              {
                mark: 'NC',
                title: 'Based in North Carolina',
                text: 'Kings Mountain, North Carolina, with a justice-centered regional focus.',
                accent: 'border-t-primary',
              },
            ].map(({ mark, title, text }) => (
              <article
                key={title}
                className="group border border-border bg-secondary p-7 transition hover:-translate-y-1 hover:border-accent/40 hover:bg-white hover:shadow-[0_20px_60px_rgba(39,50,43,0.10)]"
              >
                <span className="mb-6 inline-grid h-11 min-w-11 place-items-center border border-accent/35 bg-white px-3 font-heading text-xl font-semibold text-accent shadow-sm transition group-hover:bg-accent group-hover:text-white">
                  {mark}
                </span>
                <h3 className="font-heading text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>

          {/* Email CTA */}
          <div className="mt-14 flex flex-col items-center gap-5 rounded-sm border border-border bg-secondary p-10 text-center">
            <p className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
              Ready to connect with JSI?
            </p>
            <p className="max-w-xl text-muted-foreground">
              Whether you are interested in partnering, volunteering, or
              learning more about our work, we want to hear from you.
            </p>
            <a
              href="mailto:info@justsystemsinitiative.org"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-8 py-3 text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-md transition hover:scale-[1.02] hover:bg-[#1f2723] hover:shadow-lg"
            >
              Get in touch
            </a>
          </div>

          {/* Footer */}
          <footer className="mt-14 flex flex-col justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/jsi-logo-mark.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain opacity-70"
              />
              <p className="font-semibold text-primary">Just Systems Initiative</p>
            </div>
            <p>Nonprofit organization in formation. Formal charitable status is not yet approved.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
