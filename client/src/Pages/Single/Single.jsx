import "./Single.css"
import Blog from '../../Components/Blog/Blog'
import Sidebar from '../../Components/Sidebar/Sidebar'

export default function Single() {
  return (
    <div className='single'>
        <Blog />
        <Sidebar/>
    </div>
  )
}
