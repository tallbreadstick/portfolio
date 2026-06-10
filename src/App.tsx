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
  assetUrl,
} from './data/portfolio'

export default function App() {
  const githubUrl = () => siteProfile.github.url
  const githubHandle = () => siteProfile.github.handle

  return (
    <div class="bg-bg text-text min-h-screen">
      <Nav />

      <main class="page-shell min-w-0 pb-16 sm:pb-24">
        {/* Hero */}
        <header id="about" class="scroll-mt-16 py-10 sm:scroll-mt-20 sm:py-16 xl:py-20">
          <div class="grid min-w-0 items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 xl:gap-14">
            <div class="min-w-0">
              <p class="text-accent font-mono text-[10px] tracking-[0.25em] uppercase sm:text-xs sm:tracking-[0.4em]">
                // about
              </p>
              <h1 class="text-text-bright mt-3 font-mono text-2xl tracking-tight sm:mt-4 sm:text-3xl sm:text-4xl xl:text-5xl">
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

              <div class="border-border mt-8 inline-block max-w-full border px-4 py-3 font-mono text-xs sm:mt-10">
                <span class="text-accent">status</span>
                <span class="text-text-dim"> :: </span>
                <span class="text-text-bright">{siteProfile.status}</span>
                <span class="cursor-blink text-accent ml-1">_</span>
              </div>
            </div>

            <div class="relative mx-auto w-full min-w-0 max-w-full lg:mx-0 lg:w-fit lg:justify-self-end">
              <div class="relative w-full max-w-full lg:w-fit">
                <img
                  src={assetUrl('/myself.png')}
                  alt={siteProfile.name}
                  class="hero-photo mx-auto block h-auto w-full max-w-full max-h-[min(52vh,420px)] sm:max-h-[min(65vh,560px)] sm:w-auto lg:max-h-[min(78vh,720px)]"
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
          <ul class="grid min-w-0 grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(9.25rem,1fr))]">
            <For each={techStack}>
              {(item) => (
                <li class="border-border bg-surface hover:border-accent-dim flex min-h-[6rem] flex-col items-center justify-center gap-2 border px-2 py-3 text-center font-mono transition-colors sm:min-h-[6.75rem] sm:gap-2.5 sm:px-3 sm:py-4">
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
          <div class="border-border bg-surface min-w-0 border p-4 font-mono text-sm sm:p-6 xl:p-8">
            <ul class="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-12 sm:gap-y-3">
              <Show when={siteProfile.email}>
                {(email) => (
                  <li class="min-w-0 break-words">
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
                  <li class="min-w-0">
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
              <li class="min-w-0 break-words">
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
                      href={assetUrl(resumeSrc())}
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
                  <li class="w-full min-w-0 basis-full break-words">
                    <span class="text-accent-dim">address</span>
                    <span class="text-text-dim"> :: </span>
                    <span class="text-text">{address()}</span>
                  </li>
                )}
              </Show>
            </ul>
          </div>
        </Section>

        <footer class="border-border text-text-dim border-t py-8 pb-[max(2rem,env(safe-area-inset-bottom))] text-center font-mono text-[10px] leading-relaxed tracking-widest uppercase">
          built with solidjs · Jeremiah Ramos © {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  )
}
