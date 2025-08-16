import { SingleViewLayout } from '@/lf-layouts/SingleViewLayout'
import { GlobalFooter } from '@/lf-templates/footer/GlobalFooter'
import { HomeView } from '@/lf-views/home'
import { HomeHeaderView } from '@/lf-views/homeHeader'

export default function Home() {
  return (
    <SingleViewLayout header={<HomeHeaderView />} main={<HomeView />} footer={<GlobalFooter />} />
  )
}
