import React from 'react'
import Link from 'next/link'

export default function MainNavbar() {
  return (
    <nav className="flex gap-6 p-4 bg-gray-100 border-b">
      <Link href="/" className="text-blue-600 hover:underline">Home</Link>
      <Link href="/about" className="text-blue-600 hover:underline">About</Link>
      <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
      <Link href="/login" className="text-gray-500 hover:underline ml-auto">Login</Link>
    </nav>
  )
}
