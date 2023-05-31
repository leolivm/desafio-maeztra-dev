import world from 'public/images/world.png'
import house from 'public/images/house.png'
import recycle from 'public/images/recycle.png'
import off from 'public/images/off.png'

export const items = [
  {
    id: 1,
    picture: world.src,
    title: 'Produtos importados',
    description: 'Produto de Alta Qualidade',
  },
  {
    id: 2,
    picture: house.src,
    title: 'Estoque no Brasil',
    description: 'Produtos mais perto de você!',
  },
  {
    id: 3,
    picture: recycle.src,
    title: 'Trocas Garantidas',
    description: 'Trocas em até 48 horas, vejas as regras',
  },
  {
    id: 4,
    picture: off.src,
    title: 'Ganhe 5% off',
    description: 'Pagando à vista no Cartão',
  },
  {
    id: 5,
    picture: off.src,
    title: 'Frete Grátis',
    description: 'Em compras acima de R$ 499,00',
  },
]
