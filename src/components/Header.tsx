'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Heart, ShoppingCart, Menu, Search } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">RELAP</h1>
        <div className="hidden md:flex items-center relative">
          <Input type="text" placeholder="Search" className="pr-8" />
          <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-600 hover:text-gray-900">Store</Link></li>
            <li><Link href="/" className="text-gray-600 hover:text-gray-900">Features</Link></li>
            <li><Link href="/" className="text-gray-600 hover:text-gray-900">About</Link></li>
            <li><Link href="/" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
            <li><Link href="/" className="text-gray-600 hover:text-gray-900">News</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Heart className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/">Store</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/">Features</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/">News</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

