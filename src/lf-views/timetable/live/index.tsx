import { TimeTable } from '@/lf-components/timetable'
import { day1Stage1 } from './day1/stage1'
import { day1Stage2 } from './day1/stage2'
import { day1Stage3 } from './day1/stage3'
import { day1Stage4 } from './day1/stage4'
import { day1Stage5 } from './day1/stage5'

const config = {
  tableHeadCellHeight: 150,
  tableCellHeight: 20,
  contentMargin: 2,
  contentPadding: 5,
  borderBoldInterval: 6,
  timeStringInterval: 3,
}

export const LiveDay1 = () => {
  return (
    <>
      <TimeTable
        config={config}
        class={'stage1'}
        date={day1Stage1.date}
        data={day1Stage1.data}
        stageName={day1Stage1.stageName}
        open={day1Stage1.open}
        isTimeStringViewLeft={true}
        isTimeStringViewRight={false}
        img='https://sekigahara-idolwars.net/images/2025/stage/TOKUGAWA_STAGE.png'
      />
      <TimeTable
        config={config}
        class={'stage2'}
        date={day1Stage2.date}
        data={day1Stage2.data}
        stageName={day1Stage2.stageName}
        open={day1Stage2.open}
        isTimeStringViewLeft={false}
        isTimeStringViewRight={false}
        img='https://sekigahara-idolwars.net/images/2025/stage/TOYOTOMI_STAGE.png'
      />
      <TimeTable
        config={config}
        class={'stage3'}
        date={day1Stage3.date}
        data={day1Stage3.data}
        stageName={day1Stage3.stageName}
        open={day1Stage3.open}
        isTimeStringViewLeft={false}
        isTimeStringViewRight={false}
        img='https://sekigahara-idolwars.net/images/2025/stage/SENGOKU_STAGE.png'
      />
      <TimeTable
        config={config}
        class={'stage4'}
        date={day1Stage4.date}
        data={day1Stage4.data}
        stageName={day1Stage4.stageName}
        open={day1Stage4.open}
        isTimeStringViewLeft={false}
        isTimeStringViewRight={false}
        img='https://sekigahara-idolwars.net/images/2025/stage/MOMOKUBARI_STAGE.png'
      />
      <TimeTable
        config={config}
        class={'stage5'}
        date={day1Stage5.date}
        data={day1Stage5.data}
        stageName={day1Stage5.stageName}
        open={day1Stage5.open}
        isTimeStringViewLeft={false}
        isTimeStringViewRight={true}
        img='https://sekigahara-idolwars.net/images/2025/stage/GEGOKUJYO_STAGE.png'
      />
    </>
  )
}
