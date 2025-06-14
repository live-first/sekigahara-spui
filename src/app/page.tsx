import { SingleViewLayout } from '@/lf-layouts/SingleViewLayout'
import { HomeHeader } from '@/lf-templates/header/HomeHeader'

export default function Home() {
  return <SingleViewLayout header={<HomeHeader />} />
}
