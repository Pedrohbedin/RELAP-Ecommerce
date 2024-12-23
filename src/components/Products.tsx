import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  { 
    name: 'Laptops', 
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80', 
    items: ['MacBook', 'Dell XPS', 'Lenovo ThinkPad', 'HP Spectre'] 
  },
  { 
    name: 'Smartphones', 
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80', 
    items: ['iPhone', 'Samsung Galaxy', 'Google Pixel', 'OnePlus'] 
  },
  { 
    name: 'Tablets', 
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80', 
    items: ['iPad', 'Samsung Tab', 'Microsoft Surface', 'Amazon Fire'] 
  },
  { 
    name: 'Accessories', 
    image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80', 
    items: ['Headphones', 'Smartwatches', 'Keyboards', 'Mice'] 
  },
]

export default function Products() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-2">NATUS ERROR</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Unde omnis iste</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of cutting-edge technology products. From powerful laptops to sleek smartphones, we have everything you need to stay connected and productive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index}>
              <CardHeader>
                <Image src={product.image} alt={product.name} width={500} height={300} className="w-full h-48 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-4">{product.name}</CardTitle>
                <ul className="space-y-2">
                  {product.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/">See All</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

