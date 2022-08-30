import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <a className="relative cursor-pointer w-[118px] h-[28px] mr-[102px] flex-none">
        <Image src="/assets/logo.svg" alt="Meetmax Social" layout="fill" />
      </a>
    </Link>
  )
}
