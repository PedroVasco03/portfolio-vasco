import Head from "next/head"
import "./maintenance.css"
import Button from "@/components/UI/Button"
const MaintenancePage = () => {
    return (
        <>
            <Head>
                <title>Page in Maintenance</title>
            </Head>
            <main className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">🚧 Estamos em manutenção 🚧</h1>
                <p className="mt-4 text-lg">Volte mais tarde, estamos atualizando o site.</p>
                <div className="btns flex">
                    <Button variant="primary" className="m-2">Percebido</Button>
                    <Button variant="secondary" className="m-2">Percebido</Button>
                    <Button variant="outline" className="m-2">Percebido</Button>
                    <Button variant="ghost" className="m-2">Percebido</Button>
                </div>
                
            </main>
        </>
    )
}

export default MaintenancePage