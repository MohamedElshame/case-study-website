"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Howl } from "howler"

interface StudyPortalProps {
  isOpen: boolean
  onClose: () => void
  destinationUrl: string
  color1: string
  color2: string
  title: string
  lang: string
}

export function StudyPortal({
  isOpen,
  onClose,
  destinationUrl,
  color1 = "#667eea",
  color2 = "#764ba2",
  title,
  lang,
}: StudyPortalProps) {
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [portalPhase, setPortalPhase] = useState<"closed" | "opening" | "open" | "entering" | "closing">("closed")
  const soundRef = useRef<Howl | null>(null)

  // تحميل الأصوات
  useEffect(() => {
    soundRef.current = new Howl({
      src: ["/portal-sound.mp3"],
      volume: 0.5,
      preload: true,
    })

    return () => {
      if (soundRef.current) {
        soundRef.current.unload()
      }
    }
  }, [])

  // تأثير فتح البوابة
  useEffect(() => {
    if (isOpen && portalPhase === "closed") {
      // تشغيل الصوت
      if (soundRef.current) {
        soundRef.current.play()
      }

      // بدء تسلسل فتح البوابة
      setPortalPhase("opening")

      // بعد انتهاء الرسوم المتحركة، تعيين البوابة كمفتوحة
      setTimeout(() => {
        setPortalPhase("open")
      }, 2000)
    } else if (!isOpen && (portalPhase === "open" || portalPhase === "opening")) {
      // إغلاق البوابة
      setPortalPhase("closing")

      // بعد انتهاء الرسوم المتحركة، تعيين البوابة كمغلقة
      setTimeout(() => {
        setPortalPhase("closed")
      }, 1000)
    }
  }, [isOpen, portalPhase])

  // رسم البوابة باستخدام Canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || portalPhase === "closed") return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // تعيين حجم الكانفاس
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationFrame: number
    let portalSize = 0
    const portalMaxSize = Math.min(canvas.width, canvas.height) * 0.4
    let particles: Particle[] = []
    let rotation = 0

    // إنشاء جسيمات البوابة
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor(centerX: number, centerY: number, size: number, color: string) {
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * portalSize * 0.2 + portalSize * 0.8

        this.x = centerX + Math.cos(angle) * distance
        this.y = centerY + Math.sin(angle) * distance
        this.size = Math.random() * size * 0.5 + size * 0.5
        this.speedX = (Math.random() - 0.5) * 2
        this.speedY = (Math.random() - 0.5) * 2
        this.color = color
      }

      update(centerX: number, centerY: number) {
        // حركة الجسيمات حول البوابة
        const angle = Math.atan2(this.y - centerY, this.x - centerX)
        const distance = Math.sqrt(Math.pow(this.x - centerX, 2) + Math.pow(this.y - centerY, 2))

        if (distance > portalSize * 1.2) {
          // إعادة تعيين الجسيمات البعيدة
          const newAngle = Math.random() * Math.PI * 2
          const newDistance = Math.random() * portalSize * 0.2 + portalSize * 0.8

          this.x = centerX + Math.cos(newAngle) * newDistance
          this.y = centerY + Math.sin(newAngle) * newDistance
        } else {
          // تحريك الجسيمات في مسار دائري
          this.x += Math.cos(angle + Math.PI / 2) * 2 + this.speedX
          this.y += Math.sin(angle + Math.PI / 2) * 2 + this.speedY
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.shadowBlur = 15
        ctx.shadowColor = this.color

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.shadowBlur = 0
      }
    }

    // تحديث حجم البوابة بناءً على المرحلة
    const updatePortalSize = () => {
      if (portalPhase === "opening") {
        portalSize += (portalMaxSize - portalSize) * 0.05
      } else if (portalPhase === "closing") {
        portalSize *= 0.9
      } else if (portalPhase === "entering") {
        portalSize *= 1.05
      }
    }

    // رسم البوابة
    const drawPortal = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // تحديث حجم البوابة
      updatePortalSize()

      // رسم الخلفية المعتمة
      ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // رسم توهج البوابة
      const gradient = ctx.createRadialGradient(centerX, centerY, portalSize * 0.2, centerX, centerY, portalSize * 1.2)
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)")
      gradient.addColorStop(0.5, `rgba(${hexToRgb(color1)}, 0.5)`)
      gradient.addColorStop(1, `rgba(${hexToRgb(color2)}, 0)`)

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, portalSize, 0, Math.PI * 2)
      ctx.fill()

      // رسم حلقة البوابة
      ctx.lineWidth = portalSize * 0.05
      ctx.strokeStyle = color1
      ctx.shadowBlur = 20
      ctx.shadowColor = color1

      // الحلقة الخارجية
      ctx.beginPath()
      ctx.arc(centerX, centerY, portalSize, 0, Math.PI * 2)
      ctx.stroke()

      // الحلقة الداخلية
      ctx.strokeStyle = color2
      ctx.shadowColor = color2
      ctx.beginPath()
      ctx.arc(centerX, centerY, portalSize * 0.8, 0, Math.PI * 2)
      ctx.stroke()

      // رسم الرموز الغامضة
      drawMysticalSymbols(ctx, centerX, centerY, portalSize, rotation)
      rotation += 0.005

      // إدارة الجسيمات
      if (particles.length < 100 && (portalPhase === "opening" || portalPhase === "open")) {
        // إضافة جسيمات جديدة
        for (let i = 0; i < 5; i++) {
          particles.push(new Particle(centerX, centerY, portalSize * 0.02, i % 2 === 0 ? color1 : color2))
        }
      }

      // تحديث ورسم الجسيمات
      particles.forEach((particle) => {
        particle.update(centerX, centerY)
        particle.draw(ctx)
      })

      // تقليل عدد الجسيمات عند الإغلاق
      if (portalPhase === "closing" && particles.length > 0) {
        particles = particles.slice(0, particles.length - 5)
      }

      animationFrame = requestAnimationFrame(drawPortal)
    }

    // رسم الرموز الغامضة حول البوابة
    const drawMysticalSymbols = (
      ctx: CanvasRenderingContext2D,
      centerX: number,
      centerY: number,
      size: number,
      rotation: number,
    ) => {
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // رسم الرموز
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2
        const x = Math.cos(angle) * size * 1.1
        const y = Math.sin(angle) * size * 1.1

        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(angle + Math.PI / 2)

        // رسم رمز عشوائي
        const symbolType = i % 4
        ctx.strokeStyle = i % 2 === 0 ? color1 : color2
        ctx.lineWidth = 2
        ctx.shadowBlur = 10
        ctx.shadowColor = ctx.strokeStyle

        if (symbolType === 0) {
          // دائرة مع خط
          ctx.beginPath()
          ctx.arc(0, 0, size * 0.1, 0, Math.PI * 2)
          ctx.moveTo(-size * 0.1, 0)
          ctx.lineTo(size * 0.1, 0)
          ctx.stroke()
        } else if (symbolType === 1) {
          // مثلث
          ctx.beginPath()
          ctx.moveTo(0, -size * 0.1)
          ctx.lineTo(-size * 0.08, size * 0.05)
          ctx.lineTo(size * 0.08, size * 0.05)
          ctx.closePath()
          ctx.stroke()
        } else if (symbolType === 2) {
          // نجمة
          const starPoints = 5
          const outerRadius = size * 0.1
          const innerRadius = size * 0.05

          ctx.beginPath()
          for (let j = 0; j < starPoints * 2; j++) {
            const starAngle = (j / (starPoints * 2)) * Math.PI * 2
            const radius = j % 2 === 0 ? outerRadius : innerRadius
            const starX = Math.cos(starAngle) * radius
            const starY = Math.sin(starAngle) * radius

            if (j === 0) {
              ctx.moveTo(starX, starY)
            } else {
              ctx.lineTo(starX, starY)
            }
          }
          ctx.closePath()
          ctx.stroke()
        } else {
          // مربع
          ctx.beginPath()
          ctx.rect(-size * 0.07, -size * 0.07, size * 0.14, size * 0.14)
          ctx.stroke()
        }

        ctx.restore()
      }

      ctx.restore()
    }

    // تحويل لون hex إلى rgb
    const hexToRgb = (hex: string): string => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? `${Number.parseInt(result[1], 16)}, ${Number.parseInt(result[2], 16)}, ${Number.parseInt(result[3], 16)}`
        : "255, 255, 255"
    }

    // بدء الرسم
    drawPortal()

    // تنظيف عند إزالة المكون
    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [portalPhase, color1, color2, destinationUrl, router])

  const handlePortalClick = () => {
    if (portalPhase === "open") {
      // تشغيل صوت الدخول إذا كان متاحًا
      if (soundRef.current) {
        soundRef.current.play()
      }

      // تعيين مرحلة الدخول
      setPortalPhase("entering")

      // الانتقال المباشر إلى الصفحة المقصودة بعد تأخير قصير
      setTimeout(() => {
        router.push(destinationUrl)
      }, 1000)
    }
  }

  // معالجة النقر خارج البوابة
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && portalPhase === "open") {
      onClose()
    }
  }

  // إضافة مؤقت احتياطي للانتقال في حالة فشل الانتقال العادي
  useEffect(() => {
    if (portalPhase === "entering") {
      const fallbackTimer = setTimeout(() => {
        router.push(destinationUrl)
      }, 3000) // انتقال بعد 3 ثوانٍ كحد أقصى

      return () => clearTimeout(fallbackTimer)
    }
  }, [portalPhase, destinationUrl, router])

  if (portalPhase === "closed") return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
      >
        <canvas ref={canvasRef} className="absolute inset-0" style={{ zIndex: 60 }} />

        {portalPhase === "open" && (
          <motion.div
            className="absolute z-[70] text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className={`text-4xl font-bold text-white mb-4 ${lang === "ar" ? "font-cairo" : "font-inter"}`}>
              {title}
            </h2>

            <motion.button
              className={`mt-4 px-8 py-4 bg-white text-indigo-600 rounded-full text-xl font-bold hover:bg-indigo-100 transition-colors transform hover:-translate-y-1 hover:shadow-xl ${lang === "ar" ? "font-cairo" : "font-inter"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              onClick={handlePortalClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {lang === "ar" ? "ادخل البوابة" : "Enter Portal"}
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

