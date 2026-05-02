import React from "react";

function Icon({ name, className = "h-6 w-6" }) {
  const icons = {
    external: "↗",
    shield: "🛡️",
    book: "📖",
    music: "🎵",
    medal: "🏅",
    cross: "✝️",
    graduation: "🎓",
    briefcase: "💼",
    code: "⌘",
    award: "🏆",
  };

  return <span className={`inline-flex items-center justify-center ${className}`}>{icons[name] || "•"}</span>;
}

const apps = [
  {
    name: "Bible Circle",
    url: "https://app.biblecircle.org",
    description:
      "A Bible reading and tracking web application that helps users follow reading plans, mark completed chapters, and build daily consistency in Scripture.",
    icon: "book",
    tags: ["Bible reading", "Progress tracking", "Web app"],
  },
  {
    name: "MySong",
    url: "https://mysong.kosolution.net",
    description:
      "A digital hymn and songbook platform for churches, designed to organize PDF songbooks and help worship teams quickly navigate to songs.",
    icon: "music",
    tags: ["Songbook", "Church tool", "PDF navigation"],
  },
];

const careerHighlights = [
  {
    role: "Security Architect / Principal Engineer",
    org: "CyberInc / Spikes Security",
    years: "2014 – 2020",
    details:
      "Led advanced R&D for next-generation browser isolation technology using remote access containers, secure transport mechanisms, customized browsers, and threat intelligence capabilities.",
  },
  {
    role: "Security Consultant",
    org: "KoSolution.net",
    years: "2012 – 2014",
    details:
      "Worked on open-source IDS deployment, web application protection, vulnerability testing, SSL/TLS, reverse proxy, and application firewall support.",
  },
  {
    role: "Principal Computer Scientist",
    org: "Cobham / Sparta Inc.",
    years: "2005 – 2010",
    details:
      "Led intrusion detection research for highly mobile Army networks and contributed to the DETER security testbed for worm, botnet, and DDoS experimentation.",
  },
  {
    role: "Senior Computer Scientist",
    org: "McAfee Inc.",
    years: "1996 – 2005",
    details:
      "Led DARPA-funded intrusion detection research, developed kernel-level monitoring systems, and contributed patents in malware and cyber attack detection.",
  },
];

const skills = [
  "Intrusion detection",
  "Threat modeling",
  "Vulnerability analysis",
  "Web application security",
  "Browser isolation",
  "Linux kernel security",
  "Defense in depth",
  "Python",
  "JavaScript",
  "C / C++",
  "Java",
  "Perl",
  "PHP",
  "Go",
  "SELinux",
  "SSL/TLS",
];

const seminalResearch = [
  {
    title: "Automated Detection of Vulnerabilities in Privileged Programs by Execution Monitoring",
    venue: "ACSAC, 1994",
    details:
      "Co-authored by Calvin Ko, George Fink, and Karl Levitt, this paper was recognized with the ACSAC Test of Time Award in 2020 for its enduring impact on security research and practice.",
    url: "https://www.acsac.org/2020/program/test_of_time/",
  },
  {
    title: "Execution Monitoring of Security-Critical Programs: A Specification-Based Approach",
    venue: "Ph.D. Thesis, 1996",
    details:
      "Established a specification-based approach to security monitoring, shifting the focus beyond simple attack signatures toward checking privileged program behavior against formally described policies.",
  },
  {
    title: "Execution Monitoring of Security-Critical Programs in a Distributed System: A Specification-Based Approach",
    venue: "IEEE Symposium on Security and Privacy, 1997",
    details:
      "Co-authored with Manfred Ruschitzka and Karl Levitt, this work extended specification-based intrusion detection from individual hosts into distributed network environments.",
  },
  {
    title: "Holding Intruders Accountable on the Internet",
    venue: "IEEE Symposium on Security and Privacy, 1995",
    details:
      "Introduced the use of thumbprints, short summaries of connection content, to help trace attackers who chained through multiple machines to obscure their origin.",
  },
];

function SectionTitle({ eyebrow, title, icon, accent = "text-slate-700", children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {icon && (
        <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/80 shadow-sm ${accent}`}>
          <Icon name={icon} className="h-8 w-8" />
        </div>
      )}
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.28em] ${accent}`}>{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-8 text-slate-600">{children}</p>}
    </div>
  );
}

function AppCard({ app }) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">
          <Icon name={app.icon} className="h-6 w-6" />
        </div>
        {app.url !== "#" && (
          <a
            href={app.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-950"
          >
            Visit <Icon name="external" className="h-4 w-4" />
          </a>
        )}
      </div>
      <h3 className="text-xl font-bold text-slate-950">{app.name}</h3>
      <p className="mt-3 leading-7 text-slate-600">{app.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {app.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function PersonalWebsite() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight">Calvin Ko</a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#work" className="hover:text-slate-950">Work</a>
            <a href="#background" className="hover:text-slate-950">Background</a>
            <a href="#research" className="hover:text-slate-950">Research</a>
            <a href="#hobbies" className="hover:text-slate-950">Hobbies</a>
            <a href="#faith" className="hover:text-slate-950">Faith</a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative overflow-hidden px-6 py-24 md:py-32 bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-50">
        <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-white to-slate-50" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              Faith · Technology · Endurance · Service
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
              Building secure systems and meaningful tools.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-600">
              I am Calvin Ko, a computer security researcher and engineer with decades of experience in intrusion detection, system security, and web application protection. I also build practical web apps, pursue endurance sports, and seek to follow Christ in everyday life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#work" className="rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white shadow-sm hover:bg-slate-800">
                See my work
              </a>
              <a href="#background" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm hover:bg-slate-100">
                View background
              </a>
              <a href="#research" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm hover:bg-slate-100">
                Read research
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-white">
                <Icon name="shield" className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Security-focused engineer</h2>
                <p className="text-slate-500">Research · Architecture · Web apps</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-3xl font-bold">27+</p>
                <p className="mt-1 text-sm text-slate-500">years in security</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-3xl font-bold">7</p>
                <p className="mt-1 text-sm text-slate-500">U.S. patents</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-3xl font-bold">15+</p>
                <p className="mt-1 text-sm text-slate-500">papers</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-3xl font-bold">Ph.D.</p>
                <p className="mt-1 text-sm text-slate-500">Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Technical Work" title="Web apps and software projects" icon="code" accent="text-blue-700">
            Practical software built for Scripture reading, church worship, data organization, and everyday workflows.
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {apps.map((app) => (
              <AppCard key={app.name} app={app} />
            ))}
          </div>
        </div>
      </section>

      <section id="background" className="bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Technical Background" title="Computer security, research, and engineering" icon="shield" accent="text-emerald-700">
            My work has focused on high-assurance systems, intrusion detection, vulnerability analysis, browser isolation, and defense-in-depth architecture.
          </SectionTitle>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <Icon name="graduation" className="h-6 w-6 text-slate-700" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <ul className="space-y-4 text-slate-700">
                <li><strong>Ph.D., Computer Science</strong><br />University of California, Davis</li>
                <li><strong>M.S., Computer Science</strong><br />University of California, Davis</li>
                <li><strong>B.S., Computer Studies</strong><br />University of Hong Kong</li>
              </ul>

              <div className="mt-10 flex items-center gap-3">
                <Icon name="award" className="h-6 w-6 text-slate-700" />
                <h3 className="text-2xl font-bold">Research impact</h3>
              </div>
              <p className="mt-4 leading-7 text-slate-600">
                Dr. Ko’s work emerged during a pivotal decade (1990–2000) when computer security evolved from isolated government systems to globally interconnected, internet-facing networks. His contributions are widely recognized in foundational security surveys as pioneering behavioral-based monitoring. Among his most influential advances was the development of a formal language for specifying the expected behavior of security-critical privileged programs, such as sendmail and login. By defining normal execution paths, his approach enabled systematic detection of deviations—flagging them as potential intrusions and laying the groundwork for modern anomaly-based intrusion detection systems.
              </p>
              <p className="mt-4 leading-7 text-slate-600"> 
                Co-author of multiple research papers and U.S. patents in intrusion detection, malware analysis, anomaly detection, and policy-driven security monitoring.
              </p>
            </div>

            <div className="space-y-5">
              {careerHighlights.map((item) => (
                <article key={item.role + item.org} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-3 flex items-start gap-3">
                    <Icon name="briefcase" className="mt-1 h-5 w-5 text-slate-600" />
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">{item.role}</h3>
                      <p className="text-sm font-medium text-slate-500">{item.org} · {item.years}</p>
                    </div>
                  </div>
                  <p className="leading-7 text-slate-600">{item.details}</p>
                </article>
              ))}
            </div>
          </div>

          <div id="research" className="mt-10 scroll-mt-24 rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">Research background</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-950">Specification-based intrusion detection</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  Dr. Ko was a key member of Professor Karl Levitt's security research group at UC Davis in the 1990s. Their collaboration helped move intrusion detection research away from only detecting known attacks and toward detecting deviations from a program's intended behavior.
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  His pioneering work established specification-based intrusion detection, a foundational methodology that reshaped how modern intrusion detection systems balance security and accuracy.
                </p>
                <ul className="mt-5 space-y-3 text-slate-600">
                  <li className="leading-7">
                    <span className="font-semibold text-slate-800">Creating a middle ground:</span> Combined the precision of misuse detection, which identifies known attack signatures, with the flexibility of anomaly detection, which can identify unknown threats.
                  </li>
                  <li className="leading-7">
                    <span className="font-semibold text-slate-800">Reducing false positives:</span> Used manually specified legitimate program behavior rather than statistical normalcy, so unusual but valid activity was less likely to trigger false alarms.
                  </li>
                  <li className="leading-7">
                    <span className="font-semibold text-slate-800">Enabling zero-day defense:</span> Flagged behavior outside a predefined correct model, allowing detection of previously unknown attacks without an existing signature.
                  </li>
                  <li className="leading-7">
                    <span className="font-semibold text-slate-800">Scaling to high-security environments:</span> Influenced methods used in commercial products and critical systems such as smart grids, medical devices, and IoT environments where reliability matters as much as security.
                  </li>
                </ul>
                <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">Recognition</p>
                  <p className="mt-2 leading-7 text-slate-700">
                    The 1994 paper <span className="font-semibold">Automated Detection of Vulnerabilities in Privileged Programs by Execution Monitoring</span>, by Calvin Ko, George Fink, and Karl Levitt, received the ACSAC Test of Time Award in 2020.
                  </p>
                  <a
                    href="https://www.acsac.org/2020/program/test_of_time/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:text-emerald-950"
                  >
                    View ACSAC award page <Icon name="external" className="h-4 w-4" />
                  </a>
                  <a
                    href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=JdUjhFYAAAAJ"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 ml-0 inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:text-emerald-950 sm:ml-5"
                  >
                    Google Scholar profile <Icon name="external" className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-950">Seminal papers and theses</h3>
                <div className="mt-5 space-y-4">
                  {seminalResearch.map((paper) => (
                    <article key={paper.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="text-sm font-semibold text-emerald-700">{paper.venue}</p>
                      <h4 className="mt-2 text-lg font-bold leading-7 text-slate-950">{paper.title}</h4>
                      <p className="mt-3 leading-7 text-slate-600">{paper.details}</p>
                      {paper.url && (
                        <a
                          href={paper.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-950"
                        >
                          Award page <Icon name="external" className="h-4 w-4" />
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-bold">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="hobbies" className="px-6 py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Running & Triathlon" title="Endurance, discipline, and joy" icon="medal" accent="text-orange-700">
            Running marathons and participating in triathlons have taught me perseverance, patience, humility, and the joy of steady progress.
          </SectionTitle>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Marathon", "Long-distance running and training discipline."],
              ["Triathlon", "Swimming, cycling, and running as one integrated challenge."],
              ["Life lessons", "Endurance sports as a way to practice consistency and gratitude."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-700"><Icon name="medal" className="h-7 w-7" /></div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faith" className="bg-gradient-to-br from-slate-950 via-blue-950 to-amber-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-300/15 text-amber-200 ring-1 ring-amber-200/20">
            <Icon name="cross" className="h-8 w-8" />
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-amber-200">My Journey in Christ</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Faith at the center of life and service.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            My faith in Jesus Christ shapes how I live, work, serve, and relate to others. I am learning to walk with the Lord in daily life, using technology, community, and service as opportunities to love God and love people.
          </p>
          <blockquote className="mx-auto mt-10 max-w-3xl rounded-3xl border border-amber-200/20 bg-white/5 p-8 text-xl leading-9 text-slate-100 shadow-2xl">
            “Whatever you do, work at it with all your heart, as working for the Lord.”
            <footer className="mt-4 text-base font-medium text-slate-400">Colossians 3:23</footer>
          </blockquote>
        </div>
      </section>

      <footer className="bg-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Calvin Ko. All rights reserved.</p>
          <p>Built around faith, technology, endurance, and service.</p>
        </div>
      </footer>
    </main>
  );
}
