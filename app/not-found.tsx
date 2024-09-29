import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">User Not Found</h2>
      <p className="mb-4">Could not find the requested user or their starred repositories.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Return Home
      </Link>
    </div>
  )
}