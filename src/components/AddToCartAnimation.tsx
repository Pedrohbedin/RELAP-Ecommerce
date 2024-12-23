'use client'

import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'

export default function AddToCartAnimation() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg"
    >
      <ShoppingCart size={24} />
    </motion.div>
  )
}

