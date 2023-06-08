import React from 'react'
import ReactDOM  from 'react-dom'
//import Saudacao from './componentes/Saudacao'
//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'

//ReactDOM.render(<Primeiro/>, document.getElementById('root'))
// ou

// elemento = <h1>React</h1>
//ReactDOM.render(elemento, document.getElementById('root'))
// ReactDOM.render(<BomDia nome ="Fabio"/>, document.getElementById('root'))

//import {BoaTarde, BoaNoite} from './componentes/multiplos'

//ReactDOM.render(
//    <div>
 //       <BoaTarde nome = "ana"/>
//        <BoaNoite nome = "bia"/>
//    </div>
//    ,document.getElementById('root'))

//ReactDOM.render(
    //<div>
        //<Saudacao tipo="Bom dia" nome="Joao"/>
    //</div>
    //, document.getElementById('root')
//)

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Dio" />
            
            {/*<Filho nome="Ana" sobrenome="Silva"/>
            <Filho nome="Bia" sobrenome="Silva"/>
            <Filho nome="Carla" sobrenome="Silva"/> */}    
        
        </Pai>
        
    </div>
    
    
    , document.getElementById('root'))


