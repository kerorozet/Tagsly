import { Link } from "react-router-dom"

function Home() {
  return <div> <Link to={{
    pathname: '/slider',
  }}> Your Page </Link> </div>

}

export default Home
