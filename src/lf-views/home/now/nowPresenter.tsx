import { TimeTableCellType, TimeTableCellType2 } from '@/domain/timetable'

export const nowPresenter = () => {
  const getCurrentArtist = (table: TimeTableCellType[]) => {
    const now = new Date()
    const currentMinutes = now.getHours() * 60 + now.getMinutes()

    const timetable: TimeTableCellType2[] = table.map((item) => {
      const startJST = new Date(item.startTime)
      const endJST = new Date(item.endTime)
      const startMinutes = startJST.getHours() * 60 + startJST.getMinutes()
      const endMinutes = endJST.getHours() * 60 + endJST.getMinutes()
      return {
        ...item,
        startMinutes,
        endMinutes,
      }
    })

    const nowIndex: number = timetable.findIndex(
      (item) => currentMinutes >= item.startMinutes && currentMinutes < item.endMinutes,
    )

    return {
      current: timetable[nowIndex]?.artistName ?? null,
      next: timetable[nowIndex + 1]?.artistName ?? null,
      status: 'オンタイム'
    }
  }

  return { getCurrentArtist }
}
