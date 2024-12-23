import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Newsletter() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">ODIO DIGNISSIMOS</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Ducimus qui</h3>
            <p className="text-blue-200">
              Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
            </p>
          </div>
          <form className="md:w-1/2 flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Your email"
              className="flex-grow bg-white text-gray-900"
              required
            />
            <Button type="submit" variant="secondary">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

