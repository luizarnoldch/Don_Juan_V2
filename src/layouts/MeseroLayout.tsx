import { Outlet } from 'react-router-dom'

type Props = {}

const MeseroLayout = (props: Props) => {
  return (
    <div>
      MeseroLayout
      <Outlet />
    </div>
  )
}

export default MeseroLayout
