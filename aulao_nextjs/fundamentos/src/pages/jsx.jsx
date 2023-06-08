import Layout from "@/components/Layout"

export default function Jsx() {

    const a = 1
    const b = 3
    console.log(a * b)


    const subtitulo = "é bom saber jsx"

    function titulo() {
        return <h1>{"JSX E UM CONCEITO CENTRAL".toUpperCase()}</h1>
    }




    return (
        <Layout titulo="Entendendo JSX">
            <div>

                {titulo()}
                {a * b}
                <hr />
                {subtitulo}


            </div>
        </Layout>
    )
}