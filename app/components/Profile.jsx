import React from 'react'
import PostCardTemplate from '@/app/components/PostCardtemplate'
import PostCreation from '@/app/components/PostCreation'

const Profile = () => {
  return (
    <>
      <main>
        {/* searc input section  */}
        <section>
          <PostCreation />
        </section>

        {/* post card section  */}
        <section>
          <PostCardTemplate />
        </section>
      </main>
    </>
  )
}

export default Profile