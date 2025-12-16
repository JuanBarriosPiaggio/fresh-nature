import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    id: 'deodorant',
    name: 'Natural Deodorant',
    description: 'Stay fresh all day with our aluminum-free, natural deodorant.',
    href: '/products/deodorant',
    color: 'bg-nature-green',
  },
  {
    id: 'hand-wash',
    name: 'Hand Wash',
    description: 'Gentle on your hands, tough on germs with natural ingredients.',
    href: '/products/hand-wash',
    color: 'bg-nature-teal',
  },
  {
    id: 'dishwashing-soap',
    name: 'Dishwashing Soap',
    description: 'Cut through grease naturally without harsh chemicals.',
    href: '/products/dishwashing-soap',
    color: 'bg-nature-green',
  },
  {
    id: 'shampoo',
    name: 'Natural Shampoo',
    description: 'Nourish your hair with plant-based ingredients and essential oils.',
    href: '/products/shampoo',
    color: 'bg-nature-teal',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-nature-dark to-gray-900 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Fresh Nature Logo"
              width={120}
              height={120}
              className="w-30 h-30"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Fresh Nature
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Natural products for a healthier home and planet
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-nature-light">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-nature-dark">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`${product.color} h-48 flex items-center justify-center`}>
                  <div className="text-white text-4xl font-bold opacity-80">
                    {product.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-nature-dark group-hover:text-nature-green transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-nature-dark">
            About Fresh Nature
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-center text-lg">
              At Fresh Nature, we believe in the power of natural ingredients to keep you and your home clean and healthy.
              Our products are carefully crafted with plant-based ingredients, free from harsh chemicals, and designed
              to be gentle on you and the environment.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-nature-light rounded-lg">
                <div className="text-3xl mb-2">🌿</div>
                <h3 className="font-semibold text-nature-green mb-2">100% Natural</h3>
                <p className="text-sm text-gray-600">Plant-based ingredients only</p>
              </div>
              <div className="p-6 bg-nature-light rounded-lg">
                <div className="text-3xl mb-2">🌍</div>
                <h3 className="font-semibold text-nature-teal mb-2">Eco-Friendly</h3>
                <p className="text-sm text-gray-600">Sustainable and biodegradable</p>
              </div>
              <div className="p-6 bg-nature-light rounded-lg">
                <div className="text-3xl mb-2">💚</div>
                <h3 className="font-semibold text-nature-green mb-2">Gentle</h3>
                <p className="text-sm text-gray-600">Safe for sensitive skin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-nature-dark text-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-8">
            Have questions about our products? We'd love to hear from you.
          </p>
          <div className="bg-gray-800 rounded-lg p-8">
            <p className="text-nature-teal font-semibold mb-2">Email</p>
            <p className="text-gray-300">info@freshnature.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}

