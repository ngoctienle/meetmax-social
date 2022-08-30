import Image from 'next/image'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useGlobalState } from '../../states'
import { TextSpan, WrapNextImage } from './StyledHeader'

export const AuthSection = () => {
  const router = useRouter()
  const [, setToken] = useGlobalState('token')
  const [userInfo, setUserInfo] = useGlobalState('currentUser')

  const handleLogout = () => {
    const check = window.confirm('Do you really want to sign out?')
    if (check) {
      Cookies.remove('token')
      setToken('')
      setUserInfo(null)
      router.push('/login')
    }
  }
  return (
    <div>
      {userInfo ? (
        <Link href="/profile">
          <a className="flex items-center">
            <TextSpan>{userInfo.fullname}</TextSpan>
            <WrapNextImage
              className="w-[42px] h-[42px] overflow-hidden ml-5 flex-none"
              isRadius
            >
              <Image
                src="/assets/images/ava-user.jpg"
                layout="fill"
                alt="avatar"
              />
            </WrapNextImage>
          </a>
        </Link>
      ) : (
        <Link href="/login">
          <a className="flex items-center max-w-max bg-primary rounded-lg h-10 px-5 overflow-hidden">
            <span className="font-main font-medium text-base text-white">
              Login
            </span>
          </a>
        </Link>
      )}
    </div>
  )
}
