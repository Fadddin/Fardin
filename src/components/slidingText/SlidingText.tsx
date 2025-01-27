
"use client"

import styles from "./sliding-text.module.css"

export default function SlidingText() {
  return (
    <div className="font-bebas my-12 text-8xl">
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className={styles.slideContent}>
            <span className="text-[#E2FB30]  font-bold">Frontend</span>
            <span className="text-[#404040] text-2xl content-center">⬜</span>
            <span className="text-[#E2FB30]  font-bold">Backend</span>
            <span className="text-[#404040] text-2xl content-center">⬜</span>
            <span className="text-[#E2FB30]  font-bold">Database</span>
            <span className="text-[#404040] text-2xl content-center">⬜</span>
            <span className="text-[#E2FB30]  font-bold">DevOps</span>
            <span className="text-[#404040] text-2xl content-center">⬜</span>
            <span></span>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

