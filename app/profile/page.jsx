import GridLayout from '@/app/components/GridLayout'
import Navbar from '@/app/components/Navbar'
import Profile from '@/app/components/Profile'
import SideBar from '@/app/components/SideBar'

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