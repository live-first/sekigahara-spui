import { HomeHeader } from '@/lf-templates/header/HomeHeader'
import { Notification } from '../home/notification'
import { Setting } from '../home/setting'

export const HomeHeaderView = () => {
  return <HomeHeader left={<Notification />} right={<Setting />} />
}
