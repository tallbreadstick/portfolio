/** Only one portfolio carousel video may play at a time. */
let current: HTMLVideoElement | undefined

export function claimVideoPlayback(video: HTMLVideoElement) {
  if (current && current !== video && !current.paused) {
    current.pause()
  }
  current = video
}
