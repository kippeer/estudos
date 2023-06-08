import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Formulario from "../components/Formulario";
import { useState } from "react";
import React from "react";

export default function Home() {
  const clientes = [
    new Cliente('Ana', 22, '1'),
    new Cliente('Bia', 18, '2'),
    new Cliente('Carlo', 46, '3'),
    new Cliente('Emy', 75, '4'),
    new Cliente('Stef', 36, '5'),
    new Cliente('Pudim', 23, '6'),
  ];

  function clienteSelecionado(cliente: Cliente) {
    setVisivel('form');
  }

  function salvarCliente(cliente:Cliente){
    console.log(cliente)

  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      {visivel === 'tabela' ? (
        <Layout titulo="Cadastro Simples">
          <div className="flex justify-end">
            <Botao onClick={() => setVisivel('form')} cor="green" className="mb-4">
              Novo Cliente
            </Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} />
        </Layout>
      ) : (
        <Layout titulo="Cadastro Simples">
          <Formulario
            clienteMudou={salvarCliente}
            cliente={clientes[2]}
            cancelado={() => setVisivel('tabela')} />
        </Layout>
      )}
    </div>
  );
}