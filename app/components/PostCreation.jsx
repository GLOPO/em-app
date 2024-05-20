"use client";

import React, {useState, useEffect} from "react";
import { Icon } from "@iconify/react";
import { fn } from "@/utils/utilityfunctions";
import Image from "next/image";
import profile from "@/public/profile.png";
import { Form, InputGroup } from "rsuite";
import { usePathname } from "next/navigation";

const PostCreation = () => {
  const pathName = usePathname()
  console.log(pathName);

  const [postCreationVisibility, setPostCreationVisibility] = useState(true)
  useEffect(() => {
    pathName === '/profile' ? setPostCreationVisibility(false) : setPostCreationVisibility(true);
  }, [pathName])

  return (
    <>
      <main className=" bg-white p-5 mb-4 ms-4 rounded-xl " hidden = {postCreationVisibility} >
        {/* search  */}
        <div className="flex gap-6">
          <Image src={profile} alt={`avatar-img`} />

          {/* input  */}
          <div width={"100%"}>
            <Form width={'100%'}>
              <Form.Group controlId={"email"} width={'100%'}>
                <InputGroup
                  className={"rounded-full overflow-hidden"}
                  style={{
                    width: '100%',
                    border: "1px solid #83979B",
                    backgroundColor: "#83979B50",
                  }}
                  inside
                >
                  <Form.Control
                    width= '100%'
                    className={"bg-transparent py-3"}
                    name="email"
                    placeholder="What do you want to ask or share?"
                  />
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
        </div>

        {/* like, comment, share  */}
        <div className="flex justify-between mt-2">
          <div className="flex gap-2 items-center ">
            <Icon icon="uit:image-v" width={fn.rem(30)} height={fn.rem(30)} />
            <p>Image</p>
          </div>

          <button className=" bg-emBlue text-white rounded-3xl px-8 border">
            Post
          </button>
        </div>
      </main>
    </>
  );
};

export default PostCreation;
