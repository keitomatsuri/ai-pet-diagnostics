import Link from 'next/link'

export default function Footer() {
  return (
    <footer className=" bg-white">
      <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
        <Link href="/" className='flex items-center'>
          <span className="self-center text-2xl font-semibold whitespace-nowrap">AIペット診断</span>
        </Link>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/terms" className='mr-4 hover:underline md:mr-6'>
              利用規約
            </Link>
          </li>
          <li>
            <Link href="/privacy" className='mr-4 hover:underline md:mr-6'>
              プライバシーポリシー
            </Link>
          </li>
          <li>
            <a href="https://twitter.com/keitomatsuri" className='mr-4 hover:underline md:mr-6' target="_blank">By keitomatsuri</a>
          </li>
        </ul>
      </div>
    </footer>

  )
}