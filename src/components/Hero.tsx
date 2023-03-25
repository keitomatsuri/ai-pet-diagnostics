import Image from 'next/image'

export default function Hero() {
  return (
    <div className="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
      <div className="container mx-auto lg:px-48">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-12 lg:mt-0 text-center">
            <div className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">AIペット診断</div>
            <div className='text-xl mb-12'>質問に答えると、AIがあなたにぴったりなペットを提案します。</div>
            <Image
              src='/panda.png'
              alt='hero image'
              fill
              className='object-contain relative w-auto m-auto'
            />
          </div>
        </div>
      </div>
    </div>
  )
}