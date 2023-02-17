import { Outlet } from 'react-router-dom'

type Props = {}

const CajeroLayout = (props: Props) => {
  return (
    <div>
      CajeroLayout
      <Outlet />
    </div>
  )
}

export default CajeroLayout
