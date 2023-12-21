import { TUniversity } from '../../hooks/university/useUniversity'

type TProps = TUniversity

const CardUniversity = (props: TProps) => {
    const {no, name, web_pages} =props
  return (
    <div className='glass-card space-y-4'>
        <h3>No: {no}</h3>
        <p>Nama: {name}</p>
        <p>Website : {web_pages}</p>
    </div>
  )
}

export default CardUniversity