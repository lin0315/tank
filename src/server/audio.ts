export default {
  getEl(id: string) {
    return document.querySelector<HTMLAudioElement>(id)!
  },
  start() {
    const el = this.getEl('#audio_start')
    el.play()
  },
  fire() {
    const el = this.getEl("#audio_fire")
    el.play()
  },
  blast() {
    const el = this.getEl("#audio_blast")
    el.play()
  }
}