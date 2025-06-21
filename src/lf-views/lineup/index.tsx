'use client'

import { ArtistType } from '@/domain/artist'
import Grid from '@mui/material/Grid'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { Modal } from '@/lf-components/Modal'
import { ArtistBox } from '@/lf-templates/artistBox'
import { ArtistModal } from '@/lf-templates/artistModal/artistModal'
import { lineup } from '@/resouces/lineup'

export const LineupView = () => {
  // const [units, setUnit] = useState<ArtistType[] | null>(null)

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
  const viewLineup = lineup.map((unit: ArtistType) => {
    return {
      ...unit,
      img: `https://sekigahara-idolwars.net/images/2025/lineup/${unit.img}`,
    }
  })

  return (
    <div className='flex flex-col px-4 pb-12 mt-8 gap-6'>
      <Grid container spacing={2}>
        {viewLineup ? (
          viewLineup.map((unit, index) => {
            return (
              <Grid size={6} key={index}>
                <ArtistBox {...unit} />
              </Grid>
            )
          })
        ) : (
          <DotLottieReact
            src='https://lottie.host/cc8ec496-74a6-42ab-aed9-eadfaffb1718/Zx5ooLEWE9.lottie'
            loop
            autoplay
          />
        )}
      </Grid>
    </div>
  )
}

export const ArtistBoxModal = (props: ArtistType) => {
  return (
    <Modal button={<ArtistBox {...props} />}>
      <ArtistModal {...props} />
    </Modal>
  )
}
