import Navegador from '@/components/Navegador'

import Link from 'next/link'



export default function Inicio() {
    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexWrap:'warp',
            height:'100vh',
            
            
        }}>
            <Navegador destino="/estiloso" texto="estiloso"/>
            <Navegador destino="/exemplo" texto="exemplo" cor="purple"/>
            <Navegador destino="/jsx" texto="jsx" cor="red"/>
            <Navegador texto="Navegação #01" destino="/navegacao" cor="blue"/>
            <Navegador texto="Navegação #02" destino="/cliente/pb-2/123" cor="green"/>
            <Navegador texto="Componente com Estado" destino="/estado" cor="pink"/>
            <Navegador texto="Integracao" destino="/integracao" cor="gray"/>
            <Navegador texto="Conteudo estatico" destino="/estatico" cor="#fa054ay"/>
        </div>
    )
}