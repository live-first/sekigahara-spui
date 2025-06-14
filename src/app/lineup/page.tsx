import { Header } from '@/lf-components/Header'
import { SingleViewLayout } from '@/lf-layouts/SingleViewLayout'
import { GlobalFooter } from '@/lf-templates/footer/GlobalFooter'
import { LineupView } from '@/lf-views/lineup'

export default function Lineup() {
  return (
    <SingleViewLayout
      header={<Header center='ラインナップ' />}
      main={<LineupView />}
      footer={<GlobalFooter />}
    />
  )
}
