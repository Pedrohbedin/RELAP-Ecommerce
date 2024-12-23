import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gray-100 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Modern Laptop"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-sm text-gray-600 mb-2">MINIM VENIAM</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ut labore et dolore</h2>
            <p className="text-gray-700 mb-6">Experience the future of computing with our cutting-edge laptops. Designed for performance, built for your success.</p>
            <Button size="lg">Shop now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

