"use client"

import { useEffect, useRef } from "react"

interface NeonMazeBackgroundProps {
  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
  density?: number
  speed?: number
  opacity?: number
  className?: string
}

export function NeonMazeBackground({
  primaryColor = "#667eea", // متوافق مع التدرج الحالي (indigo)
  secondaryColor = "#764ba2", // متوافق مع التدرج الحالي (purple)
  accentColor = "#ffffff",
  density = 15,
  speed = 0.3,
  opacity = 0.15, // شفافية منخفضة لعدم التأثير على المحتوى
  className = "",
}: NeonMazeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // تعيين حجم الكانفاس ليملأ الشاشة
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // إنشاء المتاهة
    const cellSize = Math.max(canvas.width, canvas.height) / density
    const cols = Math.ceil(canvas.width / cellSize) + 1
    const rows = Math.ceil(canvas.height / cellSize) + 1

    // إنشاء مصفوفة المتاهة
    const createMaze = () => {
      const maze = []
      for (let i = 0; i < rows; i++) {
        const row = []
        for (let j = 0; j < cols; j++) {
          // تحديد عشوائي لوجود جدران في كل خلية
          row.push({
            top: Math.random() > 0.7,
            right: Math.random() > 0.7,
            bottom: Math.random() > 0.7,
            left: Math.random() > 0.7,
          })
        }
        maze.push(row)
      }
      return maze
    }

    const maze = createMaze()
    let offset = 0

    // رسم المتاهة
    const drawMaze = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // خلفية شفافة
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // تحديث الإزاحة للحركة
      offset += speed
      if (offset > cellSize) {
        offset = 0
      }

      // رسم الخطوط الإيزومترية
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const cell = maze[i][j]
          const x = j * cellSize - offset
          const y = i * cellSize - offset

          // تحويل إلى إحداثيات إيزومترية
          const isoX = (x - y) * 0.866 + canvas.width / 2
          const isoY = (x + y) * 0.5 + canvas.height / 4

          // رسم الخطوط بتأثير النيون
          if (cell.top) {
            drawNeonLine(ctx, isoX, isoY, isoX + cellSize * 0.866, isoY - cellSize * 0.5, primaryColor, opacity)
          }
          if (cell.right) {
            drawNeonLine(
              ctx,
              isoX + cellSize * 0.866,
              isoY - cellSize * 0.5,
              isoX,
              isoY - cellSize,
              secondaryColor,
              opacity,
            )
          }
          if (cell.bottom) {
            drawNeonLine(
              ctx,
              isoX,
              isoY - cellSize,
              isoX - cellSize * 0.866,
              isoY - cellSize * 0.5,
              primaryColor,
              opacity,
            )
          }
          if (cell.left) {
            drawNeonLine(ctx, isoX - cellSize * 0.866, isoY - cellSize * 0.5, isoX, isoY, secondaryColor, opacity)
          }

          // إضافة نقاط توهج في التقاطعات
          if (Math.random() > 0.98) {
            drawGlowPoint(ctx, isoX, isoY, accentColor, opacity)
          }
        }
      }

      requestAnimationFrame(drawMaze)
    }

    // رسم خط بتأثير النيون
    const drawNeonLine = (
      ctx: CanvasRenderingContext2D,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      color: string,
      opacity: number,
    ) => {
      // تأثير التوهج
      ctx.shadowBlur = 10
      ctx.shadowColor = color

      // تعديل الشفافية
      const rgbaColor = convertHexToRGBA(color, opacity)
      ctx.strokeStyle = rgbaColor
      ctx.lineWidth = 1.5

      // رسم الخط
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()

      // إعادة تعيين التأثير
      ctx.shadowBlur = 0
    }

    // رسم نقطة متوهجة
    const drawGlowPoint = (ctx: CanvasRenderingContext2D, x: number, y: number, color: string, opacity: number) => {
      const radius = Math.random() * 2 + 1

      // تأثير التوهج
      ctx.shadowBlur = 10
      ctx.shadowColor = color

      // تعديل الشفافية
      const rgbaColor = convertHexToRGBA(color, opacity * 1.5) // نقاط أكثر سطوعًا قليلاً
      ctx.fillStyle = rgbaColor

      // رسم الدائرة
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()

      // إعادة تعيين التأثير
      ctx.shadowBlur = 0
    }

    // تحويل لون hex إلى rgba
    const convertHexToRGBA = (hex: string, opacity: number): string => {
      let r = 0,
        g = 0,
        b = 0

      // تحويل #RRGGBB أو #RGB
      if (hex.length === 7) {
        r = Number.parseInt(hex.substring(1, 3), 16)
        g = Number.parseInt(hex.substring(3, 5), 16)
        b = Number.parseInt(hex.substring(5, 7), 16)
      } else if (hex.length === 4) {
        r = Number.parseInt(hex.substring(1, 2) + hex.substring(1, 2), 16)
        g = Number.parseInt(hex.substring(2, 3) + hex.substring(2, 3), 16)
        b = Number.parseInt(hex.substring(3, 4) + hex.substring(3, 4), 16)
      }

      return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }

    // بدء الرسم
    drawMaze()

    // تنظيف عند إزالة المكون
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [primaryColor, secondaryColor, accentColor, density, speed, opacity])

  return <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`} />
}

