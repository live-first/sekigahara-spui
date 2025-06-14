import { SingleViewLayout } from '@/lf-layouts/SingleViewLayout'
import { GlobalFooter } from '@/lf-templates/footer/GlobalFooter'
import { HomeHeader } from '@/lf-templates/header/HomeHeader'

export default function Home() {
  return <SingleViewLayout header={<HomeHeader />} footer={<GlobalFooter />} />
}
