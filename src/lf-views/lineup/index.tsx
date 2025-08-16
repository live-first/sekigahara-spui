'use client'

import { ArtistType } from '@/domain/artist'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { lineup } from '@/resouces/lineup'
import { TextField } from '@/lf-components/TextField'
import { useState } from 'react'
import { ArtistBoxModal } from '@/lf-templates/modal/ArtistBoxMolal'

export const LineupView = () => {
  const viewLineup = lineup.map((unit: ArtistType) => {
    return {
      ...unit,
      img: `https://sekigahara-idolwars.net/images/2025/lineup/${unit.img}`,
    }
  })

  const [units, setUnit] = useState<ArtistType[] | null>(viewLineup)

  // useEffect(() => {
  //   fetch(
  //     'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjlmzX3wYHGsuT9I77HaLQCDQdZ0mNo4jU6pgdCzTXxTYpoN_C3Dj9ZBN1DIYZ-61C8ResUzVLT_ehdHSvOODMbU8WGZvoUGxTg3O4EdMjtDJWgJ2sC_tw_FVTm8dkYWWS4a_JFTD2GzaTHsmc0Os97gjffFTD2YXD1x_iflWrCh80hd5_INRNWpWJxNCYx0Joa7PPO8Y6EhB2n72VniG5d2cqSnOUTDofatfv_-K5RB1MXhBoa6Be7HDyOS8CkB4QSDQsB7pk_GEfQSeTtVGiaOBp95Qg2IEJcxCnd&lib=Mxcqxjg6QEQs5pFWw4MFI4Hpjz42KUVZk',
  //     { mode: 'cors' },
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const unitData = data.map((unit: ArtistType) => {
  //         return {
  //           ...unit,
  //           img: {
  //             src: `https://sekigahara-idolwars.net/images/2025/lineup/${unit.img}`,
  //             alt: unit.name,
  //           },
  //         }
  //       })
  //       setUnit(unitData)
  //     })
  //     .catch((error) => {
  //       console.error('リクエストエラー:', error)
  //     })
  // }, [])

  const textOnChange = (text: string) => {
    if (text === '') {
      return setUnit(viewLineup)
    }
    return setUnit(
      viewLineup.filter((unit) => {
        return unit.name.includes(text)
      }),
    )
  }

  return (
    <div className='flex flex-col px-4 pb-12 mt-8 gap-6'>
      <TextField
        id=''
        placeholder='アーティスト名で検索'
        onChange={(e) => textOnChange(e.target.value)}
      />
      <div className='grid grid-cols-2 gap-2'>
        {units ? (
          units.map((unit, index) => {
            return <ArtistBoxModal {...unit} key={index} />
          })
        ) : (
          <DotLottieReact
            src='https://lottie.host/cc8ec496-74a6-42ab-aed9-eadfaffb1718/Zx5ooLEWE9.lottie'
            loop
            autoplay
          />
        )}
      </div>
    </div>
  )
}
