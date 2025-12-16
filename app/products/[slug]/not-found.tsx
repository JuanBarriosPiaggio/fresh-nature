import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-nature-light px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-nature-dark mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="bg-nature-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors inline-block"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

