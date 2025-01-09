import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          Hospital Food Delivery
        </Link>
        <div className="space-x-4">
          <Link href="/hospital-manager" className="text-white hover:text-gray-300">
            Manager Dashboard
          </Link>
          <Link href="/inner-pantry" className="text-white hover:text-gray-300">
            Pantry Dashboard
          </Link>
          <Link href="/delivery-personnel" className="text-white hover:text-gray-300">
            Delivery Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
}

