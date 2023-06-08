import Layout from "@/components/Layout";

export function getServerSideProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (


        <Layout titulo="Conteudo Estatico">
            <div>
                alou {props.numero}
            </div>
        </Layout>
    )
}