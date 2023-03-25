export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="px-6 py-4 text-center">
        <p>AIが考え中です。のんびりお待ちください。</p>
      </div>
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
    </div>
  )
}