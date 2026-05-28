import React from 'react'
import Link from 'next/link'

export default function AuthNav() {
  return (
    <nav className="flex gap-6 p-4 bg-indigo-50 border-b">
      <Link href="/login" className="text-indigo-600 hover:underline">Login</Link>
      <Link href="/register" className="text-indigo-600 hover:underline">Register</Link>
      <Link href="/" className="text-gray-500 hover:underline ml-auto">← Back to Home</Link>
    </nav>
  )
}