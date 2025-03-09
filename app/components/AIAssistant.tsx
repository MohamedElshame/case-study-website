"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaRobot, FaTimes, FaPaperPlane, FaSpinner, FaLightbulb, FaQuestionCircle } from "react-icons/fa"

interface AIAssistantProps {
  lang: string
  caseStudies: any[]
}

export function AIAssistant({ lang, caseStudies }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // تحميل الاقتراحات بناءً على اللغة
  useEffect(() => {
    if (lang === "ar") {
      setSuggestions([
        "ما هي أهم التحديات في دراسة استخراج البيانات من الويب؟",
        "كيف يمكن تحسين ميزانية التسويق؟",
        "ما هي فوائد أتمتة المعاملات الحكومية؟",
        "قارن بين دراسات الحالة المختلفة",
      ])
    } else {
      setSuggestions([
        "What are the main challenges in web scraping?",
        "How can marketing budgets be optimized?",
        "What are the benefits of automating government paperwork?",
        "Compare the different case studies",
      ])
    }
  }, [lang])

  // التمرير إلى أسفل عند إضافة رسائل جديدة
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // محاكاة إجابة المساعد الذكي
  const simulateAIResponse = (question: string) => {
    setIsTyping(true)

    // تأخير لمحاكاة التفكير
    setTimeout(() => {
      let response = ""

      // البحث في دراسات الحالة عن إجابات ذات صلة
      const lowerQuestion = question.toLowerCase()

      if (lowerQuestion.includes("web scraping") || lowerQuestion.includes("استخراج البيانات")) {
        if (lang === "ar") {
          response =
            "تواجه عملية استخراج البيانات من الويب تحديات مثل إجراءات مكافحة الاستخراج، وصفحات الويب الديناميكية، وقضايا خاصة باللغة العربية. يمكن استخدام أدوات مثل BeautifulSoup وScrapy وSelenium للتغلب على هذه التحديات."
        } else {
          response =
            "Web scraping faces challenges like anti-scraping measures, dynamic web pages, and language-specific issues. Tools like BeautifulSoup, Scrapy, and Selenium can be used to overcome these challenges."
        }
      } else if (lowerQuestion.includes("marketing") || lowerQuestion.includes("التسويق")) {
        if (lang === "ar") {
          response =
            "يمكن تحسين ميزانية التسويق من خلال تحليل أداء الحملات السابقة، وتحديد القنوات الأكثر فعالية، والتركيز على التسويق الرقمي، واستخدام اختبارات A/B، وتطبيق تحليلات تنبؤية."
        } else {
          response =
            "Marketing budgets can be optimized by analyzing past campaigns, identifying high-performing channels, shifting focus to digital marketing, using A/B testing, and applying predictive analytics."
        }
      } else if (lowerQuestion.includes("government") || lowerQuestion.includes("الحكومية")) {
        if (lang === "ar") {
          response =
            "تشمل فوائد أتمتة المعاملات الحكومية تقليل وقت المعالجة بنسبة 50% أو أكثر، وتحسين دقة البيانات، وتقديم خدمات أسرع وأكثر شفافية، وتوفير التكاليف من خلال تقليل العمل اليدوي."
        } else {
          response =
            "Benefits of automating government paperwork include reducing processing times by 50% or more, improving data accuracy, providing faster and more transparent services, and cost savings through reduced manual labor."
        }
      } else if (lowerQuestion.includes("compare") || lowerQuestion.includes("قارن")) {
        if (lang === "ar") {
          response =
            "تركز دراسة أتمتة المعاملات الحكومية على تحسين الكفاءة، بينما تركز دراسة تحسين ميزانية التسويق على تعظيم العائد على الاستثمار. تتناول دراسة تحسين توصيف الوظائف قضايا التنوع والشمول، في حين تستكشف دراسة استخراج البيانات من الويب تقنيات جمع البيانات التنافسية."
        } else {
          response =
            "The government automation case study focuses on efficiency, while the marketing budget case study focuses on ROI maximization. The job descriptions case study addresses diversity and inclusion issues, while the web scraping case study explores competitive data collection techniques."
        }
      } else {
        if (lang === "ar") {
          response =
            "آسف، لا يمكنني العثور على معلومات محددة حول هذا السؤال في دراسات الحالة. هل يمكنك طرح سؤال آخر متعلق بدراسات الحالة المتاحة؟"
        } else {
          response =
            "I'm sorry, I couldn't find specific information about this question in the case studies. Could you ask another question related to the available case studies?"
        }
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsTyping(false)
    }, 1500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // إضافة سؤال المستخدم
    setMessages((prev) => [...prev, { role: "user", content: input }])

    // محاكاة إجابة المساعد
    simulateAIResponse(input)

    // مسح حقل الإدخال
    setInput("")
  }

  const handleSuggestionClick = (suggestion: string) => {
    // إضافة الاقتراح كسؤال من المستخدم
    setMessages((prev) => [...prev, { role: "user", content: suggestion }])

    // محاكاة إجابة المساعد
    simulateAIResponse(suggestion)
  }

  return (
    <>
      {/* زر فتح المساعد */}
      <motion.button
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <FaRobot size={24} />
      </motion.button>

      {/* نافذة المساعد */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`bg-white rounded-lg shadow-xl w-full max-w-md h-[600px] flex flex-col overflow-hidden ${
                lang === "ar" ? "font-cairo text-right" : "font-inter"
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              dir={lang === "ar" ? "rtl" : "ltr"}
            >
              {/* رأس المساعد */}
              <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <FaRobot className="mr-2" />
                  <h3 className="font-bold">{lang === "ar" ? "مساعد دراسات الحالة" : "Case Study Assistant"}</h3>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white hover:text-indigo-200 transition-colors">
                  <FaTimes />
                </button>
              </div>

              {/* محتوى المحادثة */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {/* رسالة الترحيب */}
                {messages.length === 0 && (
                  <div className="bg-indigo-100 p-4 rounded-lg mb-4">
                    <p className="text-indigo-800">
                      {lang === "ar"
                        ? "مرحبًا! أنا مساعدك الذكي لدراسات الحالة. يمكنني الإجابة على أسئلتك حول دراسات الحالة المتاحة. ماذا تريد أن تعرف؟"
                        : "Hello! I'm your AI Case Study Assistant. I can answer your questions about the available case studies. What would you like to know?"}
                    </p>
                  </div>
                )}

                {/* الرسائل */}
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      message.role === "user"
                        ? "bg-indigo-600 text-white self-end rounded-lg p-3 max-w-[80%] ml-auto"
                        : "bg-gray-200 text-gray-800 self-start rounded-lg p-3 max-w-[80%]"
                    }`}
                  >
                    {message.content}
                  </div>
                ))}

                {/* مؤشر الكتابة */}
                {isTyping && (
                  <div className="flex items-center text-gray-500 mb-4">
                    <FaSpinner className="animate-spin mr-2" />
                    <span>{lang === "ar" ? "جاري الكتابة..." : "Typing..."}</span>
                  </div>
                )}

                {/* مرجع للتمرير */}
                <div ref={messagesEndRef} />
              </div>

              {/* اقتراحات الأسئلة */}
              {messages.length === 0 && (
                <div className="p-4 bg-gray-100 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">
                    {lang === "ar" ? "أسئلة مقترحة:" : "Suggested questions:"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm hover:bg-indigo-200 transition-colors"
                      >
                        <FaLightbulb className="inline mr-1" size={12} />
                        {suggestion.length > 30 ? suggestion.substring(0, 30) + "..." : suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* نموذج الإدخال */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
                <div className="flex">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={lang === "ar" ? "اكتب سؤالك هنا..." : "Type your question here..."}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors"
                    disabled={isTyping}
                  >
                    {isTyping ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* زر المساعدة السريعة */}
      <motion.button
        className="fixed bottom-6 left-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(true)
          // إضافة سؤال سريع
          const quickQuestion =
            lang === "ar" ? "ما هي أهم النقاط في دراسات الحالة؟" : "What are the key points in the case studies?"
          setMessages([{ role: "user", content: quickQuestion }])
          simulateAIResponse(quickQuestion)
        }}
      >
        <FaQuestionCircle size={24} />
      </motion.button>
    </>
  )
}

