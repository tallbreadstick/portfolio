import { For, Show, createSignal } from 'solid-js'

const links = [
  { href: '#about', label: 'about' },
  { href: '#stack', label: 'stack' },
  { href: '#projects', label: 'projects' },
  { href: '#certs', label: 'certs' },
  { href: '#field', label: 'experiences' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  const [open, setOpen] = createSignal(false)
  const close = () => setOpen(false)

  return (
    <nav class="border-border bg-bg/95 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div class="page-shell flex items-center justify-between gap-3 py-3 sm:py-4">
        <a
          href="#about"
          class="text-accent shrink-0 font-mono text-xs tracking-widest uppercase hover:underline sm:text-sm"
          onClick={close}
        >
          ~/portfolio
        </a>

        <button
          type="button"
          class="border-border text-text-dim hover:border-accent hover:text-accent border px-2.5 py-1.5 font-mono text-[10px] tracking-wide uppercase transition-colors lg:hidden"
          aria-expanded={open()}
          aria-controls="nav-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open() ? 'close' : 'menu'}
        </button>

        <ul
          id="nav-menu"
          class="hidden flex-wrap gap-x-5 gap-y-1 lg:flex"
        >
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

      <Show when={open()}>
        <div class="border-border border-t lg:hidden">
          <ul class="page-shell flex flex-col py-2">
            <For each={links}>
              {(link) => (
                <li>
                  <a
                    href={link.href}
                    class="text-text-dim hover:text-accent hover:bg-surface/60 block py-2.5 font-mono text-xs tracking-wide uppercase transition-colors"
                    onClick={close}
                  >
                    {link.label}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>
      </Show>
    </nav>
  )
}
