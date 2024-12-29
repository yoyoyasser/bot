import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 via-white/10 to-gray-500/20 animate-gradient-x" />
      
      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center gap-12 p-4 text-center">
        {/* Logo/Image */}
        <div className="w-full max-w-md h-40 relative mb-8">
          <img
            src="/placeholder.svg"
            alt="VaultSupplier Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Animated "Soon..." text */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1
          }}
        >
          Soon...
        </motion.h1>

        {/* Premium animated button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <Button
              className="relative px-8 py-6 text-lg font-semibold overflow-hidden bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 text-white border border-gray-400/30 rounded-xl shadow-xl hover:shadow-2xl hover:from-gray-600 hover:via-gray-300 hover:to-gray-600 transition-all duration-500"
            >
              <span className="relative z-10">Click on it</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-shimmer" />
            </Button>
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full p-4 text-center text-gray-400">
        <p className="text-sm font-light">Web made by Yasser</p>
      </footer>

      {/* Add required styles */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 200% 200%;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  )
}

