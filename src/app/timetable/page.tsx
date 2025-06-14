import { Header } from '@/lf-components/Header'
import { SingleViewLayout } from '@/lf-layouts/SingleViewLayout'
import { GlobalFooter } from '@/lf-templates/footer/GlobalFooter'
import { TimeTableView } from '@/lf-views/timetable'

export default function TimeTable() {
  return (
    <SingleViewLayout
      header={<Header center='タイムテーブル' />}
      main={<TimeTableView />}
      footer={<GlobalFooter />}
    />
  )
}
