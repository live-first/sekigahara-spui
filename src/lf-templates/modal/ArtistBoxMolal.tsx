import { ArtistType } from '@/domain/artist'
import { ArtistModal } from '../artistModal/artistModal'
import { ArtistBox } from '../artistBox'
import { Modal } from '@/lf-components/Modal'

export const ArtistBoxModal = (props: ArtistType) => {
  return (
    <Modal button={<ArtistBox {...props} />} cName='flex flex-col w-full'>
      <ArtistModal {...props} />
    </Modal>
  )
}
