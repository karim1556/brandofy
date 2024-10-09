'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Button, Input, Avatar } from "@nextui-org/react"
import { UserPlus, Star } from 'lucide-react'

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorAnimation = useAnimation()

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  useEffect(() => {
    cursorAnimation.start({
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: { type: "spring", damping: 3 }
    })
  }, [mousePosition, cursorAnimation])

  const shootConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply pointer-events-none z-50"
        animate={cursorAnimation}
      />

      <header className="p-4 flex justify-between items-center bg-white shadow-md sticky top-0 z-40">
        <motion.h1
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GiftMagic
        </motion.h1>
        <nav className="hidden md:flex space-x-6">
          {['Home', 'Gifts', 'About', 'Reviews', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="text-lg hover:text-blue-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <Button
          color="primary"
          variant="flat"
          startContent={<UserPlus size={18} />}
          className="hidden md:flex"
        >
          Sign Up
        </Button>
        <Button className="md:hidden" isIconOnly aria-label="Menu">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </Button>
      </header>

      <main>
        <section className="h-screen flex flex-col justify-center items-center relative">
          <motion.h2
            className="text-6xl md:text-8xl font-bold text-center mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Gifts that
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Blow Minds
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-center mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover gifts so unique, they'll question reality. Are you ready for the gift-pocalypse?
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              color="primary"
              size="lg"
              onPress={shootConfetti}
              className="text-lg font-bold py-6 px-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full shadow-lg transform transition-all duration-500 hover:rotate-3"
            >
              Blow My Mind
            </Button>
          </motion.div>
          
          <motion.div
            className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 12,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute top-20 -right-20 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 270, 270, 0, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 12,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 2,
            }}
          />
          <motion.div
            className="absolute -bottom-8 right-40 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 12,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 4,
            }}
          />
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Trusted By</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, index) => (
              <motion.div
                key={company}
                className="bg-white p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">{company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Featured Mind-Benders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Quantum Rubik's Cube", description: "Solve in multiple dimensions!" },
              { name: "Telepathic Teddy", description: "Cuddles with your thoughts!" },
              { name: "Invisible Ink Diary", description: "Write secrets in thin air!" }
            ].map((gift, index) => (
              <motion.div
                key={gift.name}
                className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-2 text-blue-800">{gift.name}</h3>
                <p className="text-blue-600">{gift.description}</p>
                <Button color="primary" className="mt-4">
                  Warp Reality
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 bg-blue-50">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alice W.", review: "Mind-blowing gifts! My friends were speechless.", rating: 5 },
              { name: "Bob M.", review: "Quantum Rubik's Cube broke my brain... in a good way!", rating: 5 },
              { name: "Charlie D.", review: "Telepathic Teddy knew exactly what I needed. Spooky!", rating: 4 },
            ].map((review, index) => (
              <motion.div
                key={review.name}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <Avatar name={review.name} className="mr-4" />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">"{review.review}"</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-blue-100 to-cyan-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-800">Join the Gift Revolution</h2>
            <p className="text-xl mb-12 text-blue-600">Be the first to know about gifts that defy the laws of physics!</p>
            <form className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Input
                type="email"
                placeholder="Your Interdimensional Email"
                className="max-w-xs"
                classNames={{
                  input: "bg-white/70 backdrop-blur-md text-blue-800 placeholder-blue-400",
                  inputWrapper: "border-blue-300",
                }}
              />
              <Button color="primary" size="lg" className="bg-blue-600 text-white font-bold hover:bg-blue-700">
                Transcend Reality
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-blue-50 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">GiftMagic</h3>
            <p className="text-blue-600">Warping the fabric of gift-giving since 2024.</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4 text-blue-800">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Gifts', 'About', 'Contact', 'FAQ', 'Shipping to Parallel Universes'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-bold mb-4 text-blue-800">Connect with the Void</h4>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'tiktok'].map((social) => (
                <a key={social} href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <span className="sr-only">{social}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195  2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-blue-600">
          <p>&copy; 2024 GiftMagic. All realities reserved.</p>
        </div>
      </footer>
    </div>
  )
}