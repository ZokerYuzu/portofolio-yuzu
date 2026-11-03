import { useState, useCallback, useRef } from 'react'

export function useArcadeAudio() {
  const [sfxEnabled, setSfxEnabled] = useState(false)
  const audioCtxRef = useRef<AudioContext | null>(null)

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx()
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume()
    }
    return audioCtxRef.current
  }, [])

  const playBleep = useCallback(
    (freq = 440, type: OscillatorType = 'square', duration = 0.07) => {
      if (!sfxEnabled) return
      try {
        const ctx = getAudioContext()
        if (!ctx) return
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = type
        osc.frequency.setValueAtTime(freq, ctx.currentTime)
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + duration)
        gain.gain.setValueAtTime(0.06, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start()
        osc.stop(ctx.currentTime + duration)
      } catch {
        // Safe degrade if blocked by autoplay policy
      }
    },
    [sfxEnabled, getAudioContext]
  )

  const toggleSfx = useCallback(() => {
    setSfxEnabled((prev) => {
      const next = !prev
      if (next) {
        // play an initial coin sound
        setTimeout(() => {
          try {
            const ctx = getAudioContext()
            if (!ctx) return
            const osc = ctx.createOscillator()
            const gain = ctx.createGain()
            osc.type = 'square'
            osc.frequency.setValueAtTime(587.33, ctx.currentTime)
            osc.frequency.setValueAtTime(880, ctx.currentTime + 0.08)
            gain.gain.setValueAtTime(0.08, ctx.currentTime)
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25)
            osc.connect(gain)
            gain.connect(ctx.destination)
            osc.start()
            osc.stop(ctx.currentTime + 0.25)
          } catch {}
        }, 50)
      }
      return next
    })
  }, [getAudioContext])

  return { sfxEnabled, toggleSfx, playBleep }
}
