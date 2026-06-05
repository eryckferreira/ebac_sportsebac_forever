import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../store/api/ebacApi'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos = [], isLoading, isError } = useGetProdutosQuery()

  if (isLoading) {
    return <p>Carregando produtos...</p>
  }

  if (isError) {
    return <p>Erro ao carregar produtos.</p>
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
