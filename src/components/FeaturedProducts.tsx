'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import AddToCartAnimation from './AddToCartAnimation'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Product = {
  id: number
  name: string
  price: number
  image: string
  category: string
}

const categories = ['All', 'Electronics', 'Jewelry', 'Men\'s Clothing', 'Women\'s Clothing']

const products: Product[] = [
  { id: 1, name: 'Fjallraven Backpack', price: 109.95, image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', category: 'Men\'s Clothing' },
  { id: 2, name: 'Mens Casual T-Shirts', price: 22.3, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', category: 'Men\'s Clothing' },
  { id: 3, name: 'Mens Cotton Jacket', price: 55.99, image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg', category: 'Men\'s Clothing' },
  { id: 4, name: 'Womens T-Shirt', price: 39.99, image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg', category: 'Women\'s Clothing' },
  { id: 5, name: 'John Hardy Bracelet', price: 695, image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg', category: 'Jewelry' },
  { id: 6, name: 'Solid Gold Petite Micropave', price: 168, image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg', category: 'Jewelry' },
  { id: 7, name: 'White Gold Plated Princess', price: 9.99, image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg', category: 'Jewelry' },
  { id: 8, name: 'Samsung 49-Inch QLED', price: 999.99, image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg', category: 'Electronics' },
]

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { addToCart } = useCart()
  const [showAnimation, setShowAnimation] = useState(false)

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    setShowAnimation(true)
    setTimeout(() => setShowAnimation(false), 1000)
  }

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(product => product.category === activeCategory)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Featured Products</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-48 object-contain" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleAddToCart(product)} className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {showAnimation && <AddToCartAnimation />}
      </div>
    </section>
  )
}

