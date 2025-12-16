import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-nature-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-nature-teal">Fresh Nature</h3>
            <p className="text-gray-300 text-sm">
              Natural products for a healthier home and planet.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/deodorant" className="hover:text-nature-teal transition-colors">
                  Deodorant
                </Link>
              </li>
              <li>
                <Link href="/products/hand-wash" className="hover:text-nature-teal transition-colors">
                  Hand Wash
                </Link>
              </li>
              <li>
                <Link href="/products/dishwashing-soap" className="hover:text-nature-teal transition-colors">
                  Dishwashing Soap
                </Link>
              </li>
              <li>
                <Link href="/products/hair-oil" className="hover:text-nature-teal transition-colors">
                  Hair Oil
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="hover:text-nature-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-nature-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fresh Nature. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

