import Head from "next/head"
import "./maintenance.css"
import Button from "@/components/UI/Button"

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
        </div>
      </main>
    </>
  )
}

export default MaintenancePage
