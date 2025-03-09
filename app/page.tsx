"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { NeonMazeBackground } from "./components/NeonMazeBackground"
import { CaseStudyCard } from "./components/CaseStudyCard"
import { Footer } from "./components/Footer"
import { LanguageSwitch } from "./components/LanguageSwitch"
import { PageTransition } from "./components/PageTransition"
import { AIAssistant } from "./components/AIAssistant"
import { translations, caseStudies } from "./data"

export default function Home() {
  const [lang, setLang] = useState("en")
  const t = translations[lang]
  const posts = caseStudies[lang]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleLanguageSwitch = () => {
    setLang(lang === "en" ? "ar" : "en")
  }

  return (
    <PageTransition>
      <div
        className={`min-h-screen ${lang === "ar" ? "font-cairo" : "font-inter"}`}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <NeonMazeBackground primaryColor="#667eea" secondaryColor="#764ba2" opacity={0.15} />

        <motion.nav
          className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white p-4 sticky top-0 z-10 shadow-lg"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold hover:text-indigo-200 transition-colors">
              Case Studies
            </Link>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/mohamed-elshamy-64261b326/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-200 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/MohamedElshame"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-200 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <LanguageSwitch lang={lang} onSwitch={handleLanguageSwitch} />
            </div>
          </div>
        </motion.nav>

        <main className="container mx-auto py-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4 text-white">{t.title}</h1>
            <p className="text-xl text-indigo-100">
              {lang === "en" ? "A collection of research" : "مجموعة من الابحاث"}
            </p>
          </motion.div>

          <AnimatePresence>
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {posts.map((post, index) => (
                <CaseStudyCard key={index} caseStudy={post} index={index} lang={lang} />
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link
              href="/references"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg hover:bg-indigo-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t.viewReferences}
            </Link>
          </motion.div>
        </main>

        <Footer lang={lang} />

        {/* إضافة المساعد الذكي */}
        <AIAssistant lang={lang} caseStudies={posts} />
      </div>
    </PageTransition>
  )
}

