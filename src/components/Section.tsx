import type { JSX } from 'solid-js'

type SectionProps = {
  id: string
  title: string
  children: JSX.Element
}

export default function Section(props: SectionProps) {
  return (
    <section id={props.id} class="scroll-mt-16 border-t border-border py-10 sm:scroll-mt-20 sm:py-16">
      <div class="mb-10">
        <p class="text-accent-dim text-xs tracking-[0.35em] uppercase">
          {'// section'}
        </p>
        <h2 class="text-text-bright mt-2 font-mono text-xl tracking-wide uppercase">
          [{props.title}]
        </h2>
        <div class="bg-border mt-4 h-px w-16" />
      </div>
      {props.children}
    </section>
  )
}
