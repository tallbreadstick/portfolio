import { For } from 'solid-js'

const links = [
  { href: '#about', label: 'about' },
  { href: '#stack', label: 'stack' },
  { href: '#projects', label: 'projects' },
  { href: '#certs', label: 'certs' },
  { href: '#field', label: 'experiences' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  return (
    <nav class="border-border bg-bg/95 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div class="page-shell flex items-center justify-between py-4">
        <a
          href="#about"
          class="text-accent font-mono text-sm tracking-widest uppercase hover:underline"
        >
          ~/portfolio
        </a>
        <ul class="flex flex-wrap gap-x-5 gap-y-1">
          <For each={links}>
            {(link) => (
              <li>
                <a
                  href={link.href}
                  class="text-text-dim hover:text-accent font-mono text-xs tracking-wide uppercase transition-colors"
                >
                  {link.label}
                </a>
              </li>
            )}
          </For>
        </ul>
      </div>
    </nav>
  )
}
