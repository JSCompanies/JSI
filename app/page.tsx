const workAreas = [
  {
    title: 'Education & Information',
    text: 'Plain-language educational materials that help incarcerated people better understand systems, opportunities, and resources available to them.',
    mark: '01',
  },
  {
    title: 'Reentry Preparation',
    text: 'Information related to employment, identification, housing, benefits, education, transportation, and rebuilding life after incarceration.',
    mark: '02',
  },
  {
    title: 'Family Connection',
    text: 'Resources that help families understand incarceration, communicate effectively, prepare for release, and navigate community services.',
    mark: '03',
  },
  {
    title: 'Justice & Civic Literacy',
    text: 'Educational content that explains courts, local government, public systems, rights, responsibilities, and civic participation in accessible language.',
    mark: '04',
  },
  {
    title: 'Faith & Encouragement',
    text: 'Optional inspirational and faith-based materials designed to support reflection, resilience, hope, and personal growth.',
    mark: '05',
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
  'Educational',
  'Accurate',
  'Respectful',
  'Accessible',
  'Constructive',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/80 bg-background/92 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Just Systems Initiative home">
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-sm border border-accent/25 bg-white shadow-sm">
              <img
                src="/jsi-logo-mark.png"
                alt=""
                className="h-11 w-11 object-contain"
              />
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-lg font-semibold tracking-wide">
                Just Systems Initiative
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Justice. Stewardship. Integrity.
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition hover:text-foreground" href="#work">
              What We Do
            </a>
            <a className="transition hover:text-foreground" href="#inside-out">
              Inside/Out
            </a>
            <a className="transition hover:text-foreground" href="#status">
              Status
            </a>
            <a className="transition hover:text-foreground" href="#connect">
              Connect
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative border-b border-border bg-[linear-gradient(115deg,#f8f6ef_0%,#fcfbf7_44%,#eef1ec_100%)]">
        <div className="mx-auto grid min-h-[calc(100svh-77px)] max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1.03fr_0.97fr] lg:py-16">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 border-l-4 border-accent bg-white/76 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary shadow-sm">
              Nonprofit organization in formation
            </p>
            <h1 className="font-heading text-[clamp(3.2rem,8vw,7.7rem)] font-semibold leading-[0.88] tracking-normal text-primary">
              Building pathways from incarceration to opportunity.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Just Systems Initiative is a developing nonprofit organization working
              to improve access to information, support, advocacy, and reentry
              resources for people impacted by the criminal justice system and their families.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              Our work is grounded in a simple belief: people should not lose access
              to knowledge, dignity, connection, or opportunity simply because they
              are incarcerated.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#inside-out"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition hover:bg-[#1f2723]"
              >
                View JSI Inside/Out
                <span aria-hidden="true">-&gt;</span>
              </a>
              <a
                href="#connect"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-primary/25 bg-white px-5 py-3 text-sm font-bold text-primary shadow-sm transition hover:border-primary/45"
              >
                Partnership inquiries
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[590px]" aria-label="JSI pathway from education to reentry">
            <div className="absolute inset-x-0 top-6 h-[82%] border-l border-primary/20 sm:left-12 sm:right-16" />
            <div className="absolute left-[18%] top-0 h-28 w-28 border border-accent/45 bg-white/70 shadow-[0_20px_70px_rgb(25_34_43/12%)]" />
            <div className="absolute bottom-10 right-0 h-36 w-36 border border-primary/15 bg-[#e9ece8]" />
            <div className="relative mx-auto flex max-w-lg flex-col gap-4 pt-4">
              <div className="mb-2 border border-primary/12 bg-white/90 p-6 text-center shadow-[0_22px_80px_rgb(25_34_43/10%)]">
                <img
                  src="/jsi-logo-wide.png"
                  alt="Justice Systems Initiative. Justice. Stewardship. Integrity."
                  className="mx-auto max-h-36 w-full object-contain"
                />
              </div>
              {[
                ['Education', 'Plain-language information before release'],
                ['Connection', 'Families, communities, and trusted resources'],
                ['Reentry', 'Practical preparation for the road home'],
              ].map(([step, description], index) => (
                <div
                  key={step}
                  className="relative grid grid-cols-[52px_minmax(0,1fr)] items-start gap-4 border border-primary/12 bg-white/88 p-5 shadow-[0_22px_80px_rgb(39_50_43/10%)] backdrop-blur"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-sm bg-secondary font-heading text-2xl font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-heading text-2xl font-semibold text-primary">
                      {step}
                    </span>
                    <span className="mt-1 block leading-6 text-muted-foreground">
                      {description}
                    </span>
                  </span>
                </div>
              ))}
              <div className="mt-3 border-l-4 border-accent bg-primary p-6 text-primary-foreground shadow-[0_22px_80px_rgb(25_34_43/20%)]">
                <p className="font-heading text-3xl font-semibold leading-tight">
                  Preparation should begin before the gate opens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <p className="section-label">What We Do</p>
              <h2 className="section-title">Information, preparation, and connection.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {workAreas.map((area) => (
                <article
                  key={area.title}
                  className="border border-border bg-card p-6 shadow-[0_18px_50px_rgb(39_50_43/6%)]"
                >
                  <span className="mb-5 inline-flex border-b-2 border-accent pb-1 font-heading text-2xl font-semibold text-primary">
                    {area.mark}
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-primary">
                    {area.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{area.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="inside-out" className="border-y border-border bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="section-label">JSI Inside/Out</p>
              <h2 className="section-title">Education. Connection. Reentry.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                JSI Inside/Out is our correctional education and resource-mailing initiative.
              </p>
              <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
                Through partnerships with correctional communication providers and
                participating institutions, JSI plans to distribute educational and
                inspirational materials directly to incarcerated individuals.
              </p>
              <p className="mt-6 max-w-xl border-l-4 border-accent bg-white px-5 py-4 font-heading text-2xl font-semibold leading-snug text-primary">
                Our goal is not simply to send mail. Our goal is to make each mailing
                a bridge between where someone is and what may be possible next.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {mailingMaterials.map((item) => (
                <div key={item} className="flex min-h-16 items-center gap-3 border border-primary/10 bg-white px-4 py-3">
                  <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-accent" />
                  <span className="font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label text-[#dcc579]">Why This Matters</p>
            <h2 className="section-title text-primary-foreground">
              The road home starts before the gate opens.
            </h2>
          </div>
          <div className="max-w-3xl text-lg leading-8 text-white/78">
            <p>
              Release from incarceration often comes with immediate practical
              barriers: identification, transportation, housing, employment,
              health care, technology access, family reunification, and understanding
              complex public systems.
            </p>
            <p className="mt-5">
              By getting useful information into people&apos;s hands while they are
              incarcerated, JSI seeks to strengthen reentry preparation, family
              stability, personal agency, and access to community resources.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="section-label">Our Commitment</p>
              <h2 className="section-title">Dignity with discipline.</h2>
            </div>
            <div>
              <div className="grid gap-3 sm:grid-cols-5">
                {commitments.map((item) => (
                  <div key={item} className="grid min-h-24 place-items-center border border-border bg-secondary p-4 text-center font-bold text-primary">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <article className="border border-border p-6">
                  <span aria-hidden="true" className="mb-5 block h-1 w-12 bg-accent" />
                  <h3 className="font-heading text-2xl font-semibold text-primary">
                    Facility-aware communication
                  </h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    All correctional mailings are designed to comply with applicable
                    facility rules and communication-provider requirements.
                  </p>
                </article>
                <article className="border border-border p-6">
                  <span aria-hidden="true" className="mb-5 block h-1 w-12 bg-accent" />
                  <h3 className="font-heading text-2xl font-semibold text-primary">
                    Educational, not legal representation
                  </h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    JSI does not provide individualized legal representation through
                    its educational mailing program.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="status" className="border-y border-border bg-[#f8f6ef] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="section-label">Organization Status</p>
              <h2 className="section-title">In development for long-term public benefit.</h2>
            </div>
            <div className="border-l-4 border-accent bg-white p-6 shadow-[0_18px_50px_rgb(39_50_43/7%)] sm:p-8">
              <p className="text-lg leading-8 text-muted-foreground">
                Just Systems Initiative is currently in organizational development as
                a nonprofit initiative pursuing formal charitable nonprofit status.
              </p>
              <p className="mt-5 leading-7 text-muted-foreground">
                Our developing governance, programs, partnerships, and community work
                are being structured around long-term public benefit and measurable
                impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="connect" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <p className="section-label">Connect With JSI</p>
              <h2 className="section-title">Honoring dignity. Building pathways. Strengthening communities.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  mark: 'P',
                  title: 'Partnerships',
                  text: 'Educational, nonprofit, faith, civic, and reentry partners.',
                },
                {
                  mark: 'M',
                  title: 'Educational materials',
                  text: 'Program inquiries for JSI Inside/Out and resource mailing.',
                },
                {
                  mark: 'V',
                  title: 'Volunteer opportunities',
                  text: 'Board development, community support, and future launch needs.',
                },
                {
                  mark: 'NC',
                  title: 'Based in North Carolina',
                  text: 'Kings Mountain, North Carolina, with a justice-centered regional focus.',
                },
              ].map(({ mark, title, text }) => {
                return (
                  <article key={title} className="border border-border bg-secondary p-6">
                    <span className="mb-5 inline-grid h-11 min-w-11 place-items-center border border-accent/40 px-3 font-heading text-xl font-semibold text-primary">
                      {mark}
                    </span>
                    <h3 className="font-heading text-2xl font-semibold text-primary">
                      {title}
                    </h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <footer className="mt-16 flex flex-col justify-between gap-5 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
            <p className="font-semibold text-primary">Just Systems Initiative</p>
            <p>Nonprofit organization in formation. Formal charitable status is not yet approved.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
