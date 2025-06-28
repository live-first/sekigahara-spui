import { TimeTable } from '@/lf-components/timetable'
import day1Stage1Data from './day1/stage1.json'
import day1Stage2Data from './day1/stage2.json'
import day1Stage3Data from './day1/stage3.json'
import day1Stage4Data from './day1/stage4.json'
import day1Stage5Data from './day1/stage5.json'

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
        date={day1Stage1Data.date}
        data={day1Stage1Data.data}
        stageName={day1Stage1Data.stageName}
        open={day1Stage1Data.open}
        isTimeStringViewLeft={true}
        isTimeStringViewRight={false}
        img='https://sekigahara-idolwars.net/images/2025/stage/TOKUGAWA_STAGE.png'
      />
      <TimeTable
        config={config}
        class={'stage2'}
        date={day1Stage2Data.date}
        data={day1Stage2Data.data}
        stageName={day1Stage2Data.stageName}
        open={day1Stage2Data.open}
        isTimeStringViewLeft={false}
        isTimeStringViewRight={false}
        img='https://sekigahara-idolwars.net/images/2025/stage/TOYOTOMI_STAGE.png'
      />
      <TimeTable
        config={config}
        class={'stage3'}
        date={day1Stage3Data.date}
        data={day1Stage3Data.data}
        stageName={day1Stage3Data.stageName}
        open={day1Stage3Data.open}
        isTimeStringViewLeft={false}
        isTimeStringViewRight={false}
        img='https://sekigahara-idolwars.net/images/2025/stage/SENGOKU_STAGE.png'
      />
      <TimeTable
        config={config}
        class={'stage4'}
        date={day1Stage4Data.date}
        data={day1Stage4Data.data}
        stageName={day1Stage4Data.stageName}
        open={day1Stage4Data.open}
        isTimeStringViewLeft={false}
        isTimeStringViewRight={false}
        img='https://sekigahara-idolwars.net/images/2025/stage/MOMOKUBARI_STAGE.png'
      />
      <TimeTable
        config={config}
        class={'stage5'}
        date={day1Stage5Data.date}
        data={day1Stage5Data.data}
        stageName={day1Stage5Data.stageName}
        open={day1Stage5Data.open}
        isTimeStringViewLeft={false}
        isTimeStringViewRight={true}
        img='https://sekigahara-idolwars.net/images/2025/stage/GEGOKUJYO_STAGE.png'
      />
    </>
  )
}
