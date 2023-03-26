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

// Reference: https://zenn.dev/catnose99/articles/19a05103ab9ec7#spinner%EF%BC%88%E3%82%B9%E3%83%94%E3%83%8A%E3%83%BC%EF%BC%89