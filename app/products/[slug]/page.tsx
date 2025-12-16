import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

const products: Record<string, {
  name: string
  description: string
  longDescription: string
  benefits: string[]
  ingredients: string[]
  usage: string
  color: string
  image?: string
}> = {
  'deodorant': {
    name: 'Natural Deodorant',
    description: 'Stay fresh all day with our aluminum-free, natural deodorant.',
    longDescription: 'Our natural deodorant is crafted with care using only the finest plant-based ingredients. Free from aluminum, parabens, and synthetic fragrances, it provides long-lasting protection while being gentle on your skin.',
    benefits: [
      'Aluminum-free formula',
      'Long-lasting protection',
      'Natural fragrance',
      'Suitable for sensitive skin',
      'Cruelty-free and vegan'
    ],
    ingredients: [
      'Coconut oil',
      'Baking soda',
      'Arrowroot powder',
      'Shea butter',
      'Essential oils (lavender, tea tree)'
    ],
    usage: 'Apply to clean, dry underarms. Start with a small amount and adjust as needed. Best results when applied daily.',
    color: 'bg-nature-green',
  },
  'hand-wash': {
    name: 'Natural Hand Wash',
    description: 'Gentle on your hands, tough on germs with natural ingredients.',
    longDescription: 'Keep your hands clean and soft with our natural hand wash. Formulated with antibacterial essential oils and moisturizing ingredients, it effectively cleanses while nourishing your skin.',
    benefits: [
      'Antibacterial properties',
      'Moisturizing formula',
      'Natural essential oils',
      'No harsh chemicals',
      'Eco-friendly packaging'
    ],
    ingredients: [
      'Aloe vera',
      'Tea tree oil',
      'Lavender essential oil',
      'Coconut oil',
      'Glycerin'
    ],
    usage: 'Wet hands, apply a small amount, lather for 20 seconds, then rinse thoroughly. Use throughout the day as needed.',
    color: 'bg-nature-teal',
  },
  'dishwashing-soap': {
    name: 'Natural Dishwashing Soap',
    description: 'Cut through grease naturally without harsh chemicals.',
    longDescription: 'Powerful yet gentle, our natural dishwashing soap effectively removes grease and food residue while being safe for your hands and the environment. Made with plant-based surfactants and natural degreasing agents.',
    benefits: [
      'Powerful grease-cutting action',
      'Plant-based surfactants',
      'Biodegradable formula',
      'Gentle on hands',
      'Safe for all dishware'
    ],
    ingredients: [
      'Coconut-derived surfactants',
      'Lemon essential oil',
      'Glycerin',
      'Citric acid',
      'Natural enzymes'
    ],
    usage: 'Apply directly to sponge or dish. Add warm water and scrub. Rinse thoroughly. For tough grease, let sit for a few minutes before scrubbing.',
    color: 'bg-nature-green',
  },
  'hair-oil': {
    name: 'Hair Oil',
    description: 'Nourish and strengthen your hair with our natural hair oil blend.',
    longDescription: 'Transform your hair care routine with our premium natural hair oil. Enriched with botanical extracts and essential oils, it deeply nourishes, strengthens, and adds shine to your hair while promoting healthy growth.',
    benefits: [
      'Deeply nourishes and moisturizes',
      'Strengthens hair follicles',
      'Natural shine enhancer',
      'Suitable for all hair types',
      'Promotes healthy hair growth',
      'No synthetic fragrances'
    ],
    ingredients: [
      'Argan oil',
      'Coconut oil',
      'Jojoba oil',
      'Rosemary extract',
      'Lavender essential oil',
      'Vitamin E'
    ],
    usage: 'Apply a small amount to damp or dry hair, focusing on ends and mid-lengths. Massage gently into hair and scalp. Can be used as a pre-shampoo treatment, leave-in conditioner, or styling oil. Use 2-3 times per week for best results.',
    color: 'bg-nature-teal',
    image: '/I_want_to_202512161447-ezgif.com-video-to-webp-converter.webp',
  },
}

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products[params.slug]
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - Fresh Nature`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Fresh Nature`,
      description: product.description,
      images: ['/logo.png'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - Fresh Nature`,
      description: product.description,
      images: ['/logo.png'],
    },
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-nature-light">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-nature-green transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#products" className="hover:text-nature-green transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-nature-dark font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${product.color} rounded-lg h-96 flex items-center justify-center relative overflow-hidden`}>
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="text-white text-6xl font-bold opacity-80">
                  {product.name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-nature-dark">
                {product.name}
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                {product.description}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {product.longDescription}
              </p>
              <button className="bg-nature-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 px-4 bg-nature-light">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-nature-dark">Benefits</h2>
              <ul className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-nature-green mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-nature-dark">Key Ingredients</h2>
              <ul className="space-y-3">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-nature-teal mr-3 mt-1">•</span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Usage Instructions */}
          <div className="mt-8 bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-nature-dark">How to Use</h2>
            <p className="text-gray-700 leading-relaxed">
              {product.usage}
            </p>
          </div>
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <Link
            href="/#products"
            className="inline-block text-nature-green hover:text-nature-teal font-semibold transition-colors"
          >
            ← Back to All Products
          </Link>
        </div>
      </section>
    </div>
  )
}

