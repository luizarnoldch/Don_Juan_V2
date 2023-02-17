type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <div>{import.meta.env.VITE_SOME_KEY}</div>
    </div>
  )
}
export default Home
