"use client"

import { useEffect, useRef } from "react"

interface NeonMazeBackgroundProps {
  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
  density?: number
  speed?: number
  className?: string
}

export default function NeonMazeBackground({
  primaryColor = "#ff00ff", // لون أساسي (نيون وردي)
  secondaryColor = "#00ffff", // لون ثانوي (نيون أزرق)
  accentColor = "#ffffff", // لون التأكيد (أبيض)
  density = 20, // كثافة المتاهة
  speed = 0.5, // سرعة الحركة
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

      // خلفية سوداء
      ctx.fillStyle = "rgba(0, 0, 0, 0.9)"
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
            drawNeonLine(ctx, isoX, isoY, isoX + cellSize * 0.866, isoY - cellSize * 0.5, primaryColor)
          }
          if (cell.right) {
            drawNeonLine(ctx, isoX + cellSize * 0.866, isoY - cellSize * 0.5, isoX, isoY - cellSize, secondaryColor)
          }
          if (cell.bottom) {
            drawNeonLine(ctx, isoX, isoY - cellSize, isoX - cellSize * 0.866, isoY - cellSize * 0.5, primaryColor)
          }
          if (cell.left) {
            drawNeonLine(ctx, isoX - cellSize * 0.866, isoY - cellSize * 0.5, isoX, isoY, secondaryColor)
          }

          // إضافة نقاط توهج في التقاطعات
          if (Math.random() > 0.97) {
            drawGlowPoint(ctx, isoX, isoY, accentColor)
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
    ) => {
      // تأثير التوهج
      ctx.shadowBlur = 15
      ctx.shadowColor = color
      ctx.strokeStyle = color
      ctx.lineWidth = 2

      // رسم الخط
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()

      // إعادة تعيين التأثير
      ctx.shadowBlur = 0
    }

    // رسم نقطة متوهجة
    const drawGlowPoint = (ctx: CanvasRenderingContext2D, x: number, y: number, color: string) => {
      const radius = Math.random() * 3 + 2

      // تأثير التوهج
      ctx.shadowBlur = 15
      ctx.shadowColor = color
      ctx.fillStyle = color

      // رسم الدائرة
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()

      // إعادة تعيين التأثير
      ctx.shadowBlur = 0
    }

    // بدء الرسم
    drawMaze()

    // تنظيف عند إزالة المكون
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [primaryColor, secondaryColor, accentColor, density, speed])

  return <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`} />
}

