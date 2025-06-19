import { Image } from '@/lf-components/Image'

type StageRowProps = {
  name: string
  src: string
  status: string
  now?: string
  next?: string
}

export const StageRow = (props: StageRowProps) => {
  const { name, src, status, now, next } = props
  return (
    <div className='flex bg-now py-2 px-1 gap-2'>
      <div className='flex flex-col gap-1 w-1/3'>
        <Image src={src} alt={name} />
        <div className='text-font'>{status}</div>
      </div>
      <div className='flex flex-col gap-1 w-2/3 justify-between'>
        <div>
          <div className='text-sm text-font'>LIVE</div>
          <div className='text-md pl-2 font-bold text-font leading-[1.2]'>{now}</div>
        </div>
        <div>
          <div className='text-sm text-font'>NEXT</div>
          <div className='text-md pl-2 font-bold text-font leading-[1.2]'>{next}</div>
        </div>
      </div>
    </div>
  )
}
