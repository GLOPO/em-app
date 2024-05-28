import GridLayout from './components/GridLayout'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import SideBar from './components/SideBar'

const page = () => {
  return (
    <>
      <main >
        <nav>
          <Navbar />
        </nav>

        <GridLayout sideBar={<SideBar />} postView={<Profile />}/>
      </main>
    </>
  )
}

export default page