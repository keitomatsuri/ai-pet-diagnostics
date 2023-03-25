import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Privacy() {
  return (
    <>
      <Header />
      <div className="px-6 py-6 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto lg:px-48">
          <h2 className="text-4xl font-extrabold mb-4">プライバシーポリシー</h2>
          <div className="">
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。
            このGoogleアナリティクスはデータの収集のためにCookieを使用しています。
            このデータは匿名で収集されており、個人を特定するものではありません。

            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            この規約に関しての詳細は<a href="https://marketingplatform.google.com/about/analytics/terms/jp/">Googleアナリティクスサービス利用規約のページ</a>や<a href="https://policies.google.com/technologies/ads?hl=ja">Googleポリシーと規約ページ</a>をご覧ください。
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}