import { useState } from 'react'
import './style.scss'
import { time as timeData } from './time'
import { Image } from '../Image'
import { cn } from '../utils'

type StageType = {
  config: ConfigType
  date: string
  data: Array<ContentDataType>
  class?: 'stage1' | 'stage2' | 'stage3' | 'stage4' | 'stage5'
  stageName: string
  isTimeStringViewLeft?: boolean
  isTimeStringViewRight?: boolean
  img?: string
  open: string
}

type ContentCellType = {
  data: ContentDataType
  date: string
  stage?: StageType['class']
}

type ConfigType = {
  tableHeadCellHeight: number // テーブルヘッドの高さ
  tableCellHeight: number // テーブルセルの高さ
  contentMargin: number // コンテンツのmargin
  contentPadding: number // コンテンツのpadding
  borderBoldInterval: number // borderの太字間隔
  timeStringInterval: number // 左の時間軸の表示間隔
}

type ContentDataType = {
  id: number
  startTime: string
  endTime: string
  artistName: string
  photo: boolean | string
}

export const TimeTable = (props: StageType) => {
  const { config, isTimeStringViewLeft, isTimeStringViewRight, open, stageName, img } = props

  const bgHeadClass = (stage: StageType['class']) => {
    return stage === 'stage1'
      ? 'bg-head-stage1'
      : stage === 'stage2'
      ? 'bg-head-stage2'
      : stage === 'stage3'
      ? 'bg-head-stage3'
      : stage === 'stage4'
      ? 'bg-head-stage4'
      : stage === 'stage5'
      ? 'bg-head-stage5'
      : ''
  }

  const bgClass = (stage: StageType['class']) => {
    return stage === 'stage1'
      ? 'bg-stage1'
      : stage === 'stage2'
      ? 'bg-stage2'
      : stage === 'stage3'
      ? 'bg-stage3'
      : stage === 'stage4'
      ? 'bg-stage4'
      : stage === 'stage5'
      ? 'bg-stage5'
      : ''
  }

  const ContentCell = (props: ContentCellType) => {
    const { data, date, stage } = props
    const [value, setValue] = useState(false)

    const classToggle = () => {
      setValue(!value)
    }

    const baseTime = Date.parse(`${date}T${timeData.baseTime}`)
    const endTime = Date.parse(`${data.endTime}`)
    const startTime = Date.parse(`${data.startTime}`)
    const cellCount = Math.abs(endTime - startTime) / 60 / 1000 / 5
    const ajustmentSize = config.contentMargin * 2 //margin
    const height = config.tableCellHeight * cellCount - ajustmentSize
    const topCount = Math.abs(startTime - baseTime) / 60 / 1000 / 5
    const top = config.tableHeadCellHeight + config.tableCellHeight * topCount
    return (
      <button
        className={cn('content-cell', value ? 'active' : '', bgClass(stage))}
        style={{
          height: `${height}px`,
          top: `${top}px`,
          padding: `${config.contentPadding}px`,
          margin: `${config.contentMargin}px`,
          width: `calc(100% - ${ajustmentSize}px)`,
        }}
        key={data.id}
        onClick={classToggle}
      >
        <div className='text-sekigahara font-bold text-start time-string'>
          {changeTimeStr(startTime)}〜{changeTimeStr(endTime)}
        </div>
        <div className='artist-name'>{data.artistName}</div>
      </button>
    )
  }

  const zeroPadding = (num: number) => {
    return `0${num}`.slice(-2)
  }
  const changeTimeStr = (dateTime: number) => {
    const date = new Date(dateTime)
    return `${zeroPadding(date.getHours())}:${zeroPadding(date.getMinutes())}`
  }
  return (
    <div
      className={cn('table-base inline-grid', bgClass(props.class))}
      style={{
        marginLeft: `${isTimeStringViewLeft ? '50px' : ''}`,
        marginRight: `${isTimeStringViewRight ? '50px' : ''}`,
      }}
    >
      <div
        className={cn(
          'w-full text-center justify-center rounded-t-[20px]',
          bgHeadClass(props.class),
        )}
        style={{ height: `${config.tableHeadCellHeight}px` }}
      >
        {stageName && img === undefined && <span>{stageName}</span>}
        <div className='w-full h-full pt-[10px]'>
          {img && <Image src={img} alt='' />}
          {open && (
            <div className={cn('font-bold text-white', bgHeadClass(props.class))}>{open} OPEN</div>
          )}
        </div>
      </div>
      {Object.values(timeData.data).map((time, index) => {
        const borderClass = index % config.borderBoldInterval === 0 ? 'border-bold' : 'border-nomal'
        return (
          <div
            className={`table-cell ${borderClass}`}
            style={{ height: `${config.tableCellHeight}px` }}
            key={time.id}
          >
            {index % config.timeStringInterval === 0 && isTimeStringViewLeft && (
              <div className='time-left'>{time.time}</div>
            )}
            {index % config.timeStringInterval === 0 && isTimeStringViewRight && (
              <div className='time-right'>{time.time}</div>
            )}
          </div>
        )
      })}
      {Object.values(props.data).map((data) => (
        <ContentCell data={data} date={props.date} key={data.id} stage={props.class} />
      ))}
    </div>
  )
}
