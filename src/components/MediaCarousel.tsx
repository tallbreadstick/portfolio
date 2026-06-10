import type { MediaItem } from '../data/portfolio'
import { createSignal, For, Show } from 'solid-js'
import ImageLightbox from './ImageLightbox'

type MediaCarouselProps = {
  items: MediaItem[]
  label: string
  compact?: boolean
  mediaFit?: 'cover' | 'portrait'
  lightbox?: boolean
}

function MediaSlot(props: {
  item: MediaItem
  index: number
  compact?: boolean
  mediaFit?: 'cover' | 'portrait'
  lightbox?: boolean
  onExpand?: () => void
}) {
  const hasSrc = () => Boolean(props.item.src?.trim())
  const portrait = () => props.mediaFit === 'portrait'
  const expandable = () =>
    Boolean(props.lightbox && props.item.type === 'image' && hasSrc())
  const frameClass = () =>
    props.compact ? 'aspect-[4/3]' : 'aspect-video'

  const coverClass = () =>
    [
      props.compact
        ? 'border-border aspect-[4/3] w-full border object-contain bg-bg'
        : 'border-border aspect-video w-full border object-cover',
      expandable() ? 'cursor-zoom-in' : '',
    ].join(' ')

  const expand = () => {
    if (expandable()) props.onExpand?.()
  }

  return (
    <Show
      when={hasSrc()}
      fallback={
        <div
          class={`border-border-dim bg-surface flex w-full flex-col items-center justify-center border border-dashed ${frameClass()}`}
        >
          <span class="text-accent-dim font-mono text-[10px] tracking-[0.25em] uppercase">
            {props.item.type === 'video' ? '[ video slot ]' : '[ image slot ]'}
          </span>
          <span class="text-text-dim mt-2 max-w-[80%] text-center font-mono text-xs">
            {props.item.alt ?? `media_${props.index}`}
          </span>
        </div>
      }
    >
      <Show
        when={portrait()}
        fallback={
          <Show
            when={props.item.type === 'video'}
            fallback={
              <img
                src={props.item.src}
                alt={props.item.alt ?? 'media'}
                class={coverClass()}
                loading="lazy"
                onClick={expand}
              />
            }
          >
            <video
              src={props.item.src}
              class={coverClass()}
              controls
              muted
              playsinline
            >
              <track kind="captions" />
            </video>
          </Show>
        }
      >
        <div
          class={`border-border flex w-full items-center justify-center overflow-hidden border bg-black ${frameClass()}`}
        >
          <Show
            when={props.item.type === 'video'}
            fallback={
              <img
                src={props.item.src}
                alt={props.item.alt ?? 'media'}
                class="h-full w-auto max-w-full object-contain"
                loading="lazy"
              />
            }
          >
            <video
              src={props.item.src}
              class="h-full w-auto max-w-full object-contain"
              controls
              muted
              playsinline
            >
              <track kind="captions" />
            </video>
          </Show>
        </div>
      </Show>
    </Show>
  )
}

function slideLabel(i: number) {
  return String(i + 1).padStart(2, '0')
}

export default function MediaCarousel(props: MediaCarouselProps) {
  const [index, setIndex] = createSignal(0)
  const [lightboxOpen, setLightboxOpen] = createSignal(false)
  const count = () => props.items.length
  const hasMultiple = () => count() > 1
  const progress = () => ((index() + 1) / count()) * 100
  const compact = () => Boolean(props.compact)
  const currentItem = () => props.items[index()]

  const prev = () => setIndex((i) => (i - 1 + count()) % count())
  const next = () => setIndex((i) => (i + 1) % count())

  const openLightbox = () => {
    const item = currentItem()
    if (props.lightbox && item.type === 'image' && item.src?.trim()) {
      setLightboxOpen(true)
    }
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (!hasMultiple()) return
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    }
  }

  return (
    <div class="border-border bg-surface border">
      <Show when={!compact()}>
        <div class="border-border flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2">
          <span class="text-text-dim font-mono text-[10px] tracking-widest uppercase">
            {props.label} :: media_viewer
          </span>
          <Show when={hasMultiple()}>
            <span class="text-accent font-mono text-xs tracking-wide">
              slide {index() + 1} of {count()}
            </span>
          </Show>
        </div>

        <Show when={hasMultiple()}>
          <p class="border-border text-accent-dim border-b px-3 py-1.5 text-center font-mono text-[10px] tracking-wide uppercase">
            ◂ {count()} items — use arrows or tabs below ▸
          </p>
        </Show>
      </Show>

      <Show when={compact() && hasMultiple()}>
        <div class="border-border flex items-center justify-between border-b px-2 py-1">
          <span class="text-text-dim font-mono text-[9px] tracking-widest uppercase">
            {count()} photos
          </span>
          <span class="text-accent font-mono text-[10px]">
            {index() + 1}/{count()}
          </span>
        </div>
      </Show>

      <div class={compact() ? 'p-1' : 'p-2'}>
        <div
          class="relative"
          tabIndex={hasMultiple() ? 0 : undefined}
          onKeyDown={onKeyDown}
          role={hasMultiple() ? 'region' : undefined}
          aria-roledescription={hasMultiple() ? 'carousel' : undefined}
          aria-label={
            hasMultiple()
              ? `${props.label} media carousel, slide ${index() + 1} of ${count()}`
              : undefined
          }
        >
          <MediaSlot
            item={props.items[index()]}
            index={index()}
            compact={compact()}
            mediaFit={props.mediaFit}
            lightbox={props.lightbox}
            onExpand={openLightbox}
          />

          <Show when={hasMultiple()}>
            <div class="pointer-events-none absolute inset-0 flex items-center justify-between px-0.5">
              <button
                type="button"
                onClick={prev}
                class="border-border bg-bg/90 text-text-bright hover:border-accent hover:text-accent pointer-events-auto border font-mono transition-colors"
                classList={{
                  'px-1.5 py-2 text-xs': compact(),
                  'px-2 py-3 text-sm sm:px-3': !compact(),
                }}
                aria-label="Previous slide"
              >
                ◂
              </button>
              <button
                type="button"
                onClick={next}
                class="border-border bg-bg/90 text-text-bright hover:border-accent hover:text-accent pointer-events-auto border font-mono transition-colors"
                classList={{
                  'px-1.5 py-2 text-xs': compact(),
                  'px-2 py-3 text-sm sm:px-3': !compact(),
                }}
                aria-label="Next slide"
              >
                ▸
              </button>
            </div>

            <Show when={!compact()}>
              <div class="border-border bg-bg/90 text-text-bright pointer-events-none absolute top-2 right-2 border px-2 py-0.5 font-mono text-xs">
                {index() + 1}/{count()}
              </div>
            </Show>
          </Show>
        </div>

        <Show when={hasMultiple()}>
          <div
            class={`bg-border w-full overflow-hidden ${compact() ? 'mt-1.5 h-1' : 'mt-3 h-1.5'}`}
            role="progressbar"
            aria-valuenow={index() + 1}
            aria-valuemin={1}
            aria-valuemax={count()}
            aria-label="Carousel progress"
          >
            <div
              class="bg-accent h-full transition-[width] duration-200"
              style={{ width: `${progress()}%` }}
            />
          </div>

          <div
            class={`flex flex-wrap items-center justify-center ${compact() ? 'mt-1.5 gap-1' : 'mt-3 gap-2'}`}
          >
            <For each={props.items}>
              {(_, i) => (
                <button
                  type="button"
                  onClick={() => setIndex(i())}
                  class="border font-mono transition-colors"
                  classList={{
                    'border-accent bg-accent/15 text-accent px-1.5 py-0.5 text-[10px]':
                      compact() && index() === i(),
                    'border-border text-text-dim hover:border-accent-dim hover:text-text px-1.5 py-0.5 text-[10px]':
                      compact() && index() !== i(),
                    'border-accent bg-accent/15 text-accent px-3 py-1.5 text-xs':
                      !compact() && index() === i(),
                    'border-border text-text-dim hover:border-accent-dim hover:text-text px-3 py-1.5 text-xs':
                      !compact() && index() !== i(),
                  }}
                  aria-label={`Go to slide ${i() + 1}`}
                  aria-current={index() === i() ? 'true' : undefined}
                >
                  [{slideLabel(i())}]
                </button>
              )}
            </For>
          </div>

          <Show when={!compact()}>
            <div class="mt-3 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={prev}
                class="border-border text-text hover:text-accent hover:border-accent flex-1 border px-3 py-2 font-mono text-xs tracking-wide uppercase transition-colors sm:flex-none"
                aria-label="Previous slide"
              >
                ◂ prev
              </button>

              <span class="text-text-dim hidden font-mono text-[10px] tracking-wide uppercase sm:inline">
                {props.items[index()].type} ·{' '}
                {props.items[index()].alt ?? `item_${index() + 1}`}
              </span>

              <button
                type="button"
                onClick={next}
                class="border-border text-text hover:text-accent hover:border-accent flex-1 border px-3 py-2 font-mono text-xs tracking-wide uppercase transition-colors sm:flex-none"
                aria-label="Next slide"
              >
                next ▸
              </button>
            </div>
          </Show>
        </Show>
      </div>

      <Show when={props.lightbox && currentItem().src}>
        <ImageLightbox
          open={lightboxOpen()}
          src={currentItem().src!}
          alt={currentItem().alt ?? 'Photo'}
          onClose={() => setLightboxOpen(false)}
        />
      </Show>
    </div>
  )
}
