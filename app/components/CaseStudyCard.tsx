"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { StudyPortal } from "./StudyPortal"

interface CaseStudyCardProps {
  caseStudy: {
    title: string
    background: string
  }
  index: number
  lang: string
}

export function CaseStudyCard({ caseStudy, index, lang }: CaseStudyCardProps) {
  const [portalOpen, setPortalOpen] = useState(false)

  // ألوان البوابة المختلفة لكل دراسة حالة
  const portalColors = [
    { primary: "#667eea", secondary: "#764ba2" }, // أزرق وأرجواني
    { primary: "#f6ad55", secondary: "#ed64a6" }, // برتقالي ووردي
    { primary: "#48bb78", secondary: "#38b2ac" }, // أخضر وفيروزي
    { primary: "#fc8181", secondary: "#f56565" }, // أحمر وأحمر فاتح
  ]

  const portalColor = portalColors[index % portalColors.length]

  const openPortal = (e: React.MouseEvent) => {
    e.preventDefault()
    setPortalOpen(true)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <div className="p-6">
          <h3 className="font-bold text-2xl mb-3 text-white">{caseStudy.title}</h3>
          <p className="text-indigo-100 mb-4 line-clamp-3">{caseStudy.background}</p>
          <button
            onClick={openPortal}
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors transform hover:-translate-y-1 hover:shadow-md"
          >
            {lang === "en" ? "Open Portal" : "افتح البوابة"}
          </button>
        </div>
      </motion.div>

      <StudyPortal
        isOpen={portalOpen}
        onClose={() => setPortalOpen(false)}
        destinationUrl={`/case-study/${index}`}
        color1={portalColor.primary}
        color2={portalColor.secondary}
        title={caseStudy.title}
        lang={lang}
      />
    </>
  )
}

