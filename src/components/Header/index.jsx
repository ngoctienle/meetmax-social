import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { Logo } from './Logo'
import { HeaderRight } from './HeaderRight'

import { WrapHeader } from './StyledHeader'

const Header = () => {
  const router = useRouter()
  const pathName = router.pathname

  const hiddenContent = useMemo(() => {
    const excluded = ['/login', '/register']
    const currentRouter = pathName

    return excluded.indexOf(currentRouter) !== -1
  }, [pathName])
  return (
    <header>
      <WrapHeader>
        <Logo />
        {!hiddenContent && <HeaderRight />}
      </WrapHeader>
    </header>
  )
}

export default Header
