import Link from 'next/link'

export default function Header() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-4">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className='flex items-center'>
          <span className="self-center text-2xl font-semibold whitespace-nowrap">AIペット診断</span>
        </Link>
      </div>
    </nav>
  )
}