
import Images from "@/app/components/ImageWrapper"
import authimg from '@/public/authImg.png'

const layout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* column 1  */}
        <section className="bg-emBgColor md:flex items-center justify-center p-10 hidden">
          <Images src={authimg} alt='auth-img' width='100%' height='100%' objectFit={'contain'} />
        </section>


        {/* column 2  */}
        <section className="flex items-center justify-center bg-white">
          {/*insert children here */}
          {children}
        </section>
      </div>
    </>
  )
}
export default layout


