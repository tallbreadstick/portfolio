import { Show, createEffect, onCleanup } from 'solid-js'
import { Portal } from 'solid-js/web'

type ImageLightboxProps = {
  open: boolean
  src: string
  alt: string
  onClose: () => void
}

export default function ImageLightbox(props: ImageLightboxProps) {
  createEffect(() => {
    if (!props.open) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') props.onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    onCleanup(() => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKeyDown)
    })
  })

  return (
    <Show when={props.open}>
      <Portal>
        <button
          type="button"
          class="fixed inset-0 z-[200] flex cursor-zoom-out items-center justify-center bg-black/75 p-4 backdrop-blur-md"
          onClick={() => props.onClose()}
          aria-label="Close image preview"
        >
          <img
            src={props.src}
            alt={props.alt}
            class="border-border max-h-[92vh] max-w-[min(92vw,1200px)] border object-contain shadow-2xl"
          />
        </button>
      </Portal>
    </Show>
  )
}
