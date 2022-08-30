// import Image from 'next/image'
import Link from 'next/link'
// import { TextSpan, WrapNextImage } from './StyledHeader'

export const AuthSection = () => {
  return (
    <Link href="/login">
      <a className="flex items-center max-w-max bg-primary rounded-lg h-10 px-5 overflow-hidden">
        <span className="font-main font-medium text-base text-white">
          Login
        </span>
      </a>
    </Link>
  )
}

{
  /* <TextSpan>Saleh Ahmed</TextSpan>
        <WrapNextImage
          className="w-[42px] h-[42px] overflow-hidden ml-5 flex-none"
          isRadius
        >
          <Image src="/assets/images/ava-user.jpg" layout="fill" alt="avatar" />
        </WrapNextImage> */
}
