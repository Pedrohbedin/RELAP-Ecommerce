import Link from 'next/link'
import { Twitter, Facebook, Instagram } from 'lucide-react'
import { Button } from './ui/button'

const footerLinks = [
  ['Tempor', 'Similique', 'Deserunt mollit anim', 'Sed ut perspiciatis'],
  ['Sunt in culpa', 'Sunt in culpa', 'Mollit anim', 'Perpiciatis'],
  ['Qui officia', 'Deserunt', 'Mllitia', 'Laborum'],
]

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerLinks.map((column, index) => (
            <div key={index}>
              {column.map((link, linkIndex) => (
                <Link key={linkIndex} href="/" className="block text-gray-600 hover:text-gray-900 mb-2">
                  {link}
                </Link>
              ))}
            </div>
          ))}
          <div>
            <p className="text-gray-600 mb-2">Magma</p>
            <p className="text-gray-600 mb-2">123 dignissimos ducimus, 42</p>
            <p className="text-gray-600 mb-2">info@example.com</p>
            <p className="text-gray-600 mb-2">+1 (234) 567 89 01</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} RELAP. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

