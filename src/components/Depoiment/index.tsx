import { useState } from 'react'
import { Container, Content} from './styles'

type DepoimentProps = {
  id: number;
  depoiment: string;
}

const depoiments: DepoimentProps[] = [
 {id: 0, depoiment: "Precisava de um e-commerce mas não sabia começar então conheci a CoachCommerce que me indicou a melhor solução atendendo minhas necessidades."},
 {id: 1, depoiment: "Não há nada melhor que ser atendido por profissionais que sabem o que estão fazendo, eu indico a CoachCommerce."},
 {id: 2, depoiment: "Queria expandir a visibilidade dos meus produtos, mas não sabia como. Depois de algum tempo pesquisando conheci a CoachCommerce, agora tenho o que preciso."}
]

export function Depoiment() {
  const [ depoimentIndex, setDepoimentIndex ] = useState(0);

  return(
    <Container>
      <Content>
        <div>
          <h2>{depoiments[depoimentIndex].depoiment}</h2>
          <div>
            {depoiments.map(depoiment => 
                <button key={depoiment.id} onClick={() => setDepoimentIndex(depoiment.id)}>{depoiment.id + 1}</button>
            )}
          </div>
        </div>
      </Content>
    </Container>
  )
}