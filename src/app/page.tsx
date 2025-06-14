import { SingleViewLayout } from '@/lf-layouts/SingleViewLayout'
import { GlobalFooter } from '@/lf-templates/footer/GlobalFooter'
import { HomeHeader } from '@/lf-templates/header/HomeHeader'
import { HomeView } from '@/lf-views/home'

export default function Home() {
  return <SingleViewLayout header={<HomeHeader />} main={<HomeView />} footer={<GlobalFooter />} />
}
