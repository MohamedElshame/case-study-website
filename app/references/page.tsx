"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { NeonMazeBackground } from "../components/NeonMazeBackground"
import { Footer } from "../components/Footer"
import { LanguageSwitch } from "../components/LanguageSwitch"
import { references } from "../data"

export default function References() {
  const [lang, setLang] = useState("en")
  const refs = references[lang]

  const handleLanguageSwitch = () => {
    setLang(lang === "en" ? "ar" : "en")
  }

  return (
    <div className={`min-h-screen ${lang === "ar" ? "font-cairo" : "font-inter"}`} dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* استخدام متاهة النيون كخلفية */}
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
          <h1 className="text-5xl font-bold mb-4 text-white">{lang === "en" ? "References" : "المراجع"}</h1>
          <p className="text-xl text-indigo-100">
            {lang === "en" ? "Sources and further reading" : "المصادر وقراءات إضافية"}
          </p>
        </motion.div>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8"
          >
            <ul className="space-y-4">
              {refs.map((ref, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white"
                >
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-200 hover:text-white transition-colors"
                  >
                    {ref.title}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div className="mt-8">
              <Link
                href="/"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-100 transition-colors transform hover:-translate-y-1 hover:shadow-lg"
              >
                {lang === "en" ? "Back to Home" : "العودة للرئيسية"}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer lang={lang} />
    </div>
  )
}

