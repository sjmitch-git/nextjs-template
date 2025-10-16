import { Loading } from '@ui'

export default function LoadingSpinner() {
  return (
    <div className='flex justify-center items-center h-32'>
      <Loading
        loadingColor='info'
        size='lg'
      />
    </div>
  )
}
