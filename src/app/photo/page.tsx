import { Header } from '@/lf-components/Header'
import { SingleViewLayout } from '@/lf-layouts/SingleViewLayout'
import { GlobalFooter } from '@/lf-templates/footer/GlobalFooter'
import { LivePhotoView } from '@/lf-views/photo'

export default function Lineup() {
  return (
    <SingleViewLayout
      header={<Header center='ライブフォト' />}
      main={<LivePhotoView />}
      footer={<GlobalFooter />}
    />
  )
}
