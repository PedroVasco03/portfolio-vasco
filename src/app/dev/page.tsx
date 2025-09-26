import Head from "next/head"
import "./maintenance.css"
import Button from "@/components/UI/Button"
import Image from "next/image"

const MaintenancePage = () => {
  return (
    <>
      <Head>
        <title>Page in Maintenance</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          🚧 Estamos em manutenção 🚧
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-md">
          Volte mais tarde, estamos atualizando o site.
        </p>

        <div className="btns flex flex-wrap justify-center gap-3 mt-6">
          <Button variant="primary">Percebido</Button>
          <Button variant="secondary">Percebido</Button>
          <Button variant="outline">Percebido</Button>
          <Button variant="ghost">Percebido</Button>
                <Image src="/images/test.png"  width={38} height={38} alt="teste" /> <small>CSS</small>
                <Image src="/images/test.png"  width={38} height={38} alt="teste" />
                <Image src="/images/test.png"  width={38} height={38} alt="teste" />
                <Image src="/images/test.png"  width={38} height={38} alt="teste" />
                <Image src="/images/test.png"  width={38} height={38} alt="teste" />
                <Image src="/images/test.png"  width={38} height={38} alt="teste" />
                <Image src="/images/test.png"  width={38} height={38} alt="teste" />
        </div>
      </main>
    </>
  )
}

export default MaintenancePage
