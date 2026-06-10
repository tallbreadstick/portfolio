import type { Experience } from '../data/portfolio'
import { Show } from 'solid-js'
import MediaCarousel from './MediaCarousel'

type ExperienceCardProps = {
  experience: Experience
}

export default function ExperienceCard(props: ExperienceCardProps) {
  return (
    <article class="border-border bg-surface flex h-full flex-col border">
      <MediaCarousel
        items={props.experience.media}
        label={props.experience.id}
        compact
        lightbox
      />

      <div class="flex flex-1 flex-col p-3">
        <div class="flex items-start justify-between gap-2">
          <h3 class="text-text-bright font-mono text-xs leading-snug">
            {props.experience.title}
          </h3>
          <Show when={props.experience.year}>
            <span class="text-accent-dim shrink-0 font-mono text-[10px]">
              {props.experience.year}
            </span>
          </Show>
        </div>
        <Show when={props.experience.detail}>
          <p class="text-accent mt-1 font-mono text-[10px] tracking-wide uppercase">
            {props.experience.detail}
          </p>
        </Show>
        <Show when={props.experience.href}>
          {(href) => (
            <a
              href={href()}
              target="_blank"
              rel="noopener noreferrer"
              class="text-accent hover:text-text-bright mt-auto pt-2 font-mono text-[10px] underline-offset-2 hover:underline"
            >
              certificate →
            </a>
          )}
        </Show>
      </div>
    </article>
  )
}
