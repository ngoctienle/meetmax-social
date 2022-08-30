import Image from 'next/image'

import { AuthSection } from './AuthSection'

import { WrapNextImage, HeaderContent } from './StyledHeader'

export const HeaderRight = () => {
  return (
    <HeaderContent>
      <div className="relative min-w-[542px] h-10">
        <div className="absolute left-5 top-1/2 -translate-y-1/2">
          <WrapNextImage className="w-4 h-4 mt-1">
            <Image
              src="/assets/icons/icon-search.svg"
              alt="icon search"
              layout="fill"
            />
          </WrapNextImage>
        </div>
        <input
          className="placeholder:italic placeholder:text-gray/40 border border-gray/40 rounded-[10px] h-full w-full pl-12 focus:outline-none"
          placeholder="Search for something here..."
          type="text"
          name="search"
        />
      </div>
      <AuthSection />
    </HeaderContent>
  )
}
