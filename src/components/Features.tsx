import { Truck, RefreshCw, Headphones, ShoppingBag } from 'lucide-react'

const features = [
  { icon: Truck, title: 'Quis nostrud', description: 'UT enim ad minima veniam, quis nostrum exercitationem' },
  { icon: RefreshCw, title: 'Exercitation', description: 'Volutatem quia voluptas aspernatur aut odit aut fugit' },
  { icon: Headphones, title: 'Ullamco laboris', description: 'Nemo enim ipsam voluptatem quia voluptas sit' },
  { icon: ShoppingBag, title: 'Nisi ut aliquip', description: 'neque porro quisquam est, qui dolorem ispum quia' },
]

export default function Features() {
  return (
    <section className="bg-pink-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

