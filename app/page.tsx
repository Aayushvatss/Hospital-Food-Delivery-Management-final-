import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-2">
      <h1 className="text-4xl font-bold mb-8">Welcome to Hospital Food Delivery Management</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/hospital-manager">
          <Button size="lg">Hospital Manager Dashboard</Button>
        </Link>
        <Link href="/inner-pantry">
          <Button size="lg">Inner Pantry Dashboard</Button>
        </Link>
        <Link href="/delivery-personnel">
          <Button size="lg">Delivery Personnel Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

