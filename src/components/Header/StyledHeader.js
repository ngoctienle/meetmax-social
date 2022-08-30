import tw, { styled } from 'twin.macro'
import { Wrappper } from '../common/Global'

export const WrapHeader = tw(Wrappper)`
    h-20 flex items-center
`

export const HeaderContent = tw.div`
    flex h-full justify-between items-center flex-1
`

export const WrapNextImage = styled.div(({ isRadius }) => [
  tw`
        relative
    `,
  isRadius ? tw`rounded-[10px]` : tw``
])

export const TextSpan = tw.span`
    text-base text-gray font-medium
`
