import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Terms() {
  return (
    <>
      <Header />
      <div className="px-6 py-6 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto lg:px-48">
          <h2 className="text-4xl font-extrabold mb-4">利用規約</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">はじめに</h3>
            <div className="">本利用規約（以下、「本規約」といいます。）は、おすすめのペット提案Webサービス（以下、「本サービス」といいます。）をご利用になるすべてのお客様（以下、「ユーザー」といいます。）に適用されるものです。ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。</div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">生成されるコンテンツ</h3>
            <div className="">本サービスは、OpenAI APIを利用して生成されたコンテンツを提供します。生成されるコンテンツは、AI（OpenAIのAPI）によって生成されるものであり、その正確性や適切性を保証するものではありません。</div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">責任の免責</h3>
            <div className="">サービス提供者は、本サービスによって生成されたコンテンツに対し、一切の責任を負わないものとします。ユーザーは、本サービスで得た情報に基づいて自己の判断と責任において行動を取るものとします。サービス提供者は、本サービスの利用により生じた損害について、直接・間接を問わず一切の責任を負いません。</div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">品質保証の否認</h3>
            <div className="">本サービスは個人で運用されており、サービスの品質に関する保証を定めません。サービス提供者は、本サービスの継続的な提供、エラーの修正、不具合の改善等について、一切の保証を与えません。</div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">サービスの変更・停止</h3>
            <div className="">サービス提供者は、自己の判断により、いつでも本サービスの内容を変更したり、本サービスの提供を一時停止または終了することができます。サービス提供者は、本サービスの変更・停止により生じるユーザーの損害について、一切の責任を負いません。</div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">禁止行為</h3>
            <div className="">本サービスの運営を妨害する行為は禁止されています。以下に示す行為を含むが、これらに限定されない運営妨害行為を行った場合、サービス提供者は当該ユーザーの利用を制限または禁止することができます。</div>
            <ol className="">
              <li className="">・不正アクセス、ハッキング等のセキュリティを脅かす行為</li>
              <li className="">・ウイルス、マルウェア等の有害なプログラムを仕込む行為</li>
              <li className="">・他のユーザーまたは第三者に対する嫌がらせ、脅迫、名誉毀損等の行為</li>
              <li className="">・本サービスに関連するシステムや通信回線等の過度な負荷を生じさせる行為</li>
              <li className="">・その他、サービス提供者が不適切と判断する行為</li>
            </ol>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">著作権等の知的財産権</h3>
            <div className="">本サービスにおいて生成されたコンテンツの著作権等の知的財産権は、サービス提供者または権利を有する第三者に帰属します。ユーザーは、本サービスにおいて提供されるコンテンツを、著作権法に定める私的使用の範囲を超えて、無断で複製、転載、転用、改変、翻訳、販売等の行為を行わないものとします。</div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">適用法および管轄裁判所</h3>
            <div className="">本規約の解釈にあたっては、日本の法令が適用されるものとします。本サービスに関して紛争が生じた場合、サービス提供者の所在地を管轄する裁判所を専属的合意管轄裁判所とします。</div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">その他</h3>
            <div className="">サービス提供者は、本規約の内容をユーザーへの事前通知なしに変更することができるものとし、変更後の規約は本サービス上で告知された時点から効力を生じるものとします。ユーザーは、本規約の変更を確認する責任を負い、本サービスを継続して利用することにより、変更後の規約に同意したものとみなされます。</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}