import { Main, SideBarLeft, SideBarRight } from '../components'
import { WrapMain } from '../components/common/Global'

const Home = () => {
  return (
    <WrapMain>
      <SideBarLeft />
      <Main />
      <SideBarRight />
    </WrapMain>
  )
}

export default Home
