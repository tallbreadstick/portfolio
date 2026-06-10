import type { Project } from '../data/portfolio'
import { For, Show } from 'solid-js'
import MediaCarousel from './MediaCarousel'

type ProjectCardProps = {
  project: Project
  index: number
}

function repoDisplayPath(repo: string) {
  return repo.replace(/^https?:\/\//, '')
}

export default function ProjectCard(props: ProjectCardProps) {
  const num = () => String(props.index + 1).padStart(2, '0')
  const repoPath = () => repoDisplayPath(props.project.repo)

  return (
    <article class="border-border bg-bg border">
      <header class="border-border flex flex-wrap items-start justify-between gap-3 border-b px-4 py-3">
        <div>
          <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p class="text-accent-dim font-mono text-[10px] tracking-widest">
              artifact_{num()}
            </p>
            <span class="text-accent font-mono text-[10px] tracking-wide">
              {props.project.period}
            </span>
          </div>
          <h3 class="text-text-bright mt-1 font-mono text-lg tracking-wide">
            {props.project.name}
          </h3>
        </div>
        <a
          href={props.project.repo}
          target="_blank"
          rel="noopener noreferrer"
          class="border-border hover:border-accent group inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-xs transition-colors"
        >
          <span class="text-accent-dim group-hover:text-accent">github ::</span>
          <span class="text-accent group-hover:text-text-bright underline-offset-2 group-hover:underline">
            {repoPath()}
          </span>
          <span class="text-text-dim group-hover:text-accent" aria-hidden>
            →
          </span>
        </a>
      </header>

      <div class="grid gap-0 lg:grid-cols-[1fr_1.5fr]">
        <div class="border-border border-b p-4 lg:border-r lg:border-b-0 lg:p-6">
          <p class="text-text leading-relaxed font-mono text-sm">
            {props.project.description}
          </p>
          <Show when={props.project.credit}>
            {(credit) => (
              <p class="text-text-dim mt-3 font-mono text-xs">
                {credit().label}{' '}
                <a
                  href={credit().href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-accent hover:text-text-bright underline-offset-2 hover:underline"
                >
                  {credit().name}
                </a>
                .
              </p>
            )}
          </Show>
          <ul class="mt-4 flex flex-wrap gap-2">
            <For each={props.project.stack}>
              {(tag) => (
                <li class="border-border-dim text-text-dim border px-2 py-0.5 font-mono text-[10px] tracking-wide uppercase">
                  {tag}
                </li>
              )}
            </For>
          </ul>
          <p class="mt-4 font-mono text-xs">
            <span class="text-accent-dim">repo :: </span>
            <a
              href={props.project.repo}
              target="_blank"
              rel="noopener noreferrer"
              class="text-accent hover:text-text-bright underline-offset-2 hover:underline"
            >
              {repoPath()}
            </a>
          </p>
        </div>

        <div class="p-2">
          <MediaCarousel
            items={props.project.media}
            label={props.project.id}
            mediaFit={props.project.mediaFit}
          />
        </div>
      </div>
    </article>
  )
}
