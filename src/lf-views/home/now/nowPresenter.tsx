import { NowResponseType, NowType } from '@/lf-domain/now'
import { useEffect, useState } from 'react'

export const nowPresenter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [now, setNow] = useState<NowType>()

  const getStageStatus = () => {
    fetch(
      'https://script.google.com/macros/s/AKfycbwm2XfO0saxuU3EYpyWlHcaTl_ODVRODfvzbKxrlZ7QsiP2XxXkBtRF6Nt3TpV_GPou/exec',
      { mode: 'cors' },
    )
      .then((response) => response.json())
      .then((data: NowResponseType) => {
        const nowData: NowType = {
          datetime: data.datetime,
          message: data.message,
          stage: {
            tokugawa: data.stage.filter((stage) => stage.name === 'tokugawa')[0],
            toyotomi: data.stage.filter((stage) => stage.name === 'toyotomi')[0],
            sengoku: data.stage.filter((stage) => stage.name === 'sengoku')[0],
            momokubari: data.stage.filter((stage) => stage.name === 'momokubari')[0],
            gekokujyo: data.stage.filter((stage) => stage.name === 'gekokujyo')[0],
          },
          wc: data.wc,
        }
        setNow(nowData)
      })
      .catch((error) => {
        console.error('リクエストエラー:', error)
      })
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getStageStatus()
    const timer = setInterval(getStageStatus, 60000)

    return () => clearInterval(timer)
  }, [])

  return { now }
}
