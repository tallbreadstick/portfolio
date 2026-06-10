import { For, Show } from 'solid-js'
import Nav from './components/Nav'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import CertCard from './components/CertCard'
import ExperienceCard from './components/ExperienceCard'
import {
  techStack,
  skillIconUrl,
  projects,
  certifications,
  experiences,
  siteProfile,
} from './data/portfolio'

export default function App() {
  const githubUrl = () => siteProfile.github.url
  const githubHandle = () => siteProfile.github.handle

  return (
    <div class="bg-bg text-text min-h-screen">
      <Nav />

      <main class="page-shell pb-24">
        {/* Hero */}
        <header id="about" class="scroll-mt-20 py-16 xl:py-20">
          <div class="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 xl:gap-14">
            <div>
              <p class="text-accent font-mono text-xs tracking-[0.4em] uppercase">
                // about
              </p>
              <h1 class="text-text-bright mt-4 font-mono text-3xl tracking-tight sm:text-4xl xl:text-5xl">
                [ {siteProfile.name.toUpperCase()} ]
              </h1>
              <p class="mt-3 font-mono text-sm">
                <a
                  href={githubUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-accent hover:text-text-bright underline-offset-2 hover:underline"
                >
                  @{githubHandle()}
                </a>
              </p>
              <p class="text-text mt-6 font-mono text-sm leading-relaxed xl:text-base">
                Incoming fourth-year BSIT student at Cebu Institute of
                Technology - University. I build CLIs, desktop tools, game
                plugins, security tooling, and whatever other interesting projects I can think of.
              </p>
              <p class="text-text-dim mt-4 font-mono text-xs leading-relaxed sm:text-sm">
                Rust enthusiast. NixOS user.
              </p>

              <div class="border-border mt-10 inline-block border px-4 py-3 font-mono text-xs">
                <span class="text-accent">status</span>
                <span class="text-text-dim"> :: </span>
                <span class="text-text-bright">{siteProfile.status}</span>
                <span class="cursor-blink text-accent ml-1">_</span>
              </div>
            </div>

            <div class="relative mx-auto w-fit max-w-full lg:mx-0 lg:justify-self-end">
              <div class="relative w-fit max-w-full">
                <img
                  src="/myself.png"
                  alt={siteProfile.name}
                  class="hero-photo block h-auto w-auto max-h-[min(78vh,720px)] max-w-full"
                  loading="eager"
                />
                <div
                  class="hero-photo-fade pointer-events-none absolute inset-0"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </header>

        {/* Tech stack */}
        <Section id="stack" title="stack">
          <p class="text-text-dim mb-6 font-mono text-xs sm:text-sm">
            Primary languages and tools. I have worked with other stacks, but
            these are where I have the most depth.
          </p>
          <ul class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(9.25rem,1fr))]">
            <For each={techStack}>
              {(item) => (
                <li class="border-border bg-surface hover:border-accent-dim flex min-h-[6.75rem] flex-col items-center justify-center gap-2.5 border px-3 py-4 text-center font-mono transition-colors">
                  <img
                    src={skillIconUrl(item.icon)}
                    alt=""
                    width={36}
                    height={36}
                    class="h-9 w-9 shrink-0"
                    loading="lazy"
                  />
                  <span class="text-text-bright text-xs leading-tight sm:text-sm">
                    {item.name}
                  </span>
                </li>
              )}
            </For>
          </ul>
        </Section>

        {/* Projects */}
        <Section id="projects" title="projects">
          <p class="text-text-dim mb-8 font-mono text-xs sm:text-sm">
            Selected personal projects from the last few years.
          </p>
          <div class="grid gap-8">
            <For each={projects}>
              {(project, i) => (
                <ProjectCard project={project} index={i()} />
              )}
            </For>
          </div>
        </Section>

        {/* Certifications */}
        <Section id="certs" title="credentials">
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            <For each={certifications}>
              {(cert) => <CertCard cert={cert} />}
            </For>
          </div>
        </Section>

        {/* Competitions & experiences */}
        <Section id="field" title="experiences">
          <p class="text-text-dim mb-6 font-mono text-xs sm:text-sm">
            Hackathons and competitions.
          </p>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-5">
            <For each={experiences}>
              {(exp) => <ExperienceCard experience={exp} />}
            </For>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="contact">
          <div class="border-border bg-surface border p-6 font-mono text-sm xl:p-8">
            <ul class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-12 sm:gap-y-3">
              <Show when={siteProfile.email}>
                {(email) => (
                  <li>
                    <span class="text-accent-dim">email</span>
                    <span class="text-text-dim"> :: </span>
                    <a
                      href={`mailto:${email()}`}
                      class="text-accent hover:text-text-bright underline-offset-2 hover:underline"
                    >
                      {email()}
                    </a>
                  </li>
                )}
              </Show>
              <Show when={siteProfile.phone}>
                {(phone) => (
                  <li>
                    <span class="text-accent-dim">phone</span>
                    <span class="text-text-dim"> :: </span>
                    <a
                      href={`tel:${phone().replace(/[^\d+]/g, '')}`}
                      class="text-accent hover:text-text-bright underline-offset-2 hover:underline"
                    >
                      {phone()}
                    </a>
                  </li>
                )}
              </Show>
              <li>
                <span class="text-accent-dim">github</span>
                <span class="text-text-dim"> :: </span>
                <a
                  href={githubUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-accent hover:text-text-bright underline-offset-2 hover:underline"
                >
                  github.com/{githubHandle()}
                </a>
              </li>
              <Show when={siteProfile.resumeSrc}>
                {(resumeSrc) => (
                  <li>
                    <span class="text-accent-dim">resume</span>
                    <span class="text-text-dim"> :: </span>
                    <a
                      href={resumeSrc()}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-accent hover:text-text-bright underline-offset-2 hover:underline"
                    >
                      resume.pdf
                    </a>
                  </li>
                )}
              </Show>
              <Show when={siteProfile.address}>
                {(address) => (
                  <li class="w-full basis-full">
                    <span class="text-accent-dim">address</span>
                    <span class="text-text-dim"> :: </span>
                    <span class="text-text">{address()}</span>
                  </li>
                )}
              </Show>
            </ul>
          </div>
        </Section>

        <footer class="border-border text-text-dim border-t py-8 text-center font-mono text-[10px] tracking-widest uppercase">
          built with solidjs · Jeremiah Ramos © {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  )
}
