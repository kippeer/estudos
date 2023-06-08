import Layout from "@/components/Layout"
import React, { useState } from 'react'

export default function Integracao() {

    const [cliente, setCliente] = useState({})
    const [codigo, setCodigo] = useState(1)


    async function obeterCliente() {


        const resp = await fetch('http://localhost:3000/api/clientes/123')
        const dados = await resp.json()
        setCliente(dados)

        // fetch('http://localhost:3000/api/clientes/123')
        //   .then(resp => resp.json())
        //  .then(dados => setCliente(dados))
    }

    return (
        <Layout>
            <div>
                <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)} />
                <button onClick={obeterCliente}>Obter Cliente</button>

            </div>
            <ul>
                <li>Codigo:{cliente.id}</li>
                <li>Nome:{cliente.nome}</li>
                <li>Email:{cliente.email}</li>
            </ul>
        </Layout>

    )
}