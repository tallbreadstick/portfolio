import type { Certification } from '../data/portfolio'
import { Show } from 'solid-js'

type CertCardProps = {
  cert: Certification
}

function linkDisplayPath(href: string) {
  return href.replace(/^https?:\/\//, '')
}

export default function CertCard(props: CertCardProps) {
  const hasImage = () => Boolean(props.cert.imageSrc?.trim())

  return (
    <article class="border-border bg-surface flex h-full flex-col border">
      <div class="border-border aspect-[4/3] border-b">
        <Show
          when={hasImage()}
          fallback={
            <div class="flex h-full flex-col items-center justify-center p-4">
              <span class="text-accent-dim font-mono text-[10px] tracking-[0.25em] uppercase">
                [ cert image ]
              </span>
              <span class="text-text-dim mt-2 text-center font-mono text-xs">
                /public/certs/{props.cert.id}.png
              </span>
            </div>
          }
        >
          <img
            src={props.cert.imageSrc}
            alt={props.cert.title}
            class="h-full w-full object-contain p-2"
            loading="lazy"
          />
        </Show>
      </div>
      <div class="flex flex-1 flex-col p-4">
        <p class="text-accent-dim font-mono text-[10px] tracking-widest uppercase">
          {props.cert.issuer}
          <Show when={props.cert.year}>
            {' '}
            · {props.cert.year}
          </Show>
        </p>
        <h3 class="text-text-bright mt-1 font-mono text-sm leading-snug">
          {props.cert.title}
        </h3>
        <Show when={props.cert.href}>
          {(href) => (
            <a
              href={href()}
              target="_blank"
              rel="noopener noreferrer"
              class="text-accent hover:text-text-bright mt-auto pt-3 font-mono text-[10px] underline-offset-2 hover:underline"
            >
              verify :: {linkDisplayPath(href())}
            </a>
          )}
        </Show>
      </div>
    </article>
  )
}
