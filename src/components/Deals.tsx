import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const deals = [
  {
    title: 'Premium Headphones',
    description: 'Immerse yourself in crystal-clear sound',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    fullWidth: true,
  },
  {
    title: 'Smartwatch',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Wireless Earbuds',
    price: '$99',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
]

export default function Deals() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold mb-2">DESERUNT</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Mollit anim</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deals.map((deal, index) => (
            <Card key={index} className={`${deal.fullWidth ? 'md:col-span-2' : ''}`}>
              <div className="flex flex-col md:flex-row">
                <div className={`md:w-1/2 ${deal.fullWidth ? 'md:w-2/3' : ''}`}>
                  <Image src={deal.image} alt={deal.title} width={1000} height={600} className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                </div>
                <div className={`p-6 md:w-1/2 ${deal.fullWidth ? 'md:w-1/3' : ''} flex flex-col justify-center`}>
                  <CardHeader>
                    <CardTitle>{deal.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {deal.description ? (
                      <CardDescription>{deal.description}</CardDescription>
                    ) : (
                      <p className="text-3xl font-bold text-blue-600">{deal.price}</p>
                    )}
                  </CardContent>
                  {deal.fullWidth && (
                    <CardFooter>
                      <Button>Shop now</Button>
                    </CardFooter>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

