import { Header } from '@/lf-components/Header'
import { Image } from '@/lf-components/Image'

export const HomeHeader = () => {
  return (
    <Header
      left={<></>}
      center={<Image src='https://sekigahara-idolwars.net/images/2025/logo.png' alt='logo' />}
      right={<></>}
    />
  )
}
