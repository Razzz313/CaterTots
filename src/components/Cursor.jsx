import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const follower = followerRef.current
    if (!dot || !follower) return

    let mx = 0, my = 0, fx = 0, fy = 0, rafId

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    }

    const lerp = (a, b, t) => a + (b - a) * t
    const tick = () => {
      fx = lerp(fx, mx, 0.1); fy = lerp(fy, my, 0.1)
      follower.style.left = fx + 'px'; follower.style.top = fy + 'px'
      rafId = requestAnimationFrame(tick)
    }
    tick()

    const expand = () => follower.classList.add('expand')
    const contract = () => follower.classList.remove('expand')

    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', contract)
    })

    window.addEventListener('mousemove', onMove)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafId) }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
