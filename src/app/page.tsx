import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Products from '@/components/Products'
import Deals from '@/components/Deals'
import FeaturedProducts from '@/components/FeaturedProducts'
import Blog from '@/components/Blog'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <Deals />
        <FeaturedProducts />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

