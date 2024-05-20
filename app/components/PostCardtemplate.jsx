"use client";

import { postCard } from "@/utils/postcard.js";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { fn } from "@/utils/utilityfunctions";

const PostCardTemplate = () => {
  return (
    <>
      <main>
        {postCard.map((singleCard) => {
          const { id, img1, name, description, img2 } = singleCard;

          return (
            <div key={id} className=" bg-white p-5 mb-4 ms-4 rounded-xl">
              <div className="flex justify-between">
                <div className="flex gap-4 items-center justify-center">
                  <Image src={img1} alt="profile-pic" width={fn.rem(40)} height={fn.rem(40)}/>
                  <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-emGrey">8 minutes ago</p>
                  </div>
                </div>

                <button className=" border-emGrey rounded-3xl px-5 border">Following</button>
              </div>

              <p className="my-4">{description}</p>

              <div>
                <Image src={img2} alt="img" />
              </div>

              <div className="flex justify-between mt-2">
                <div className="flex gap-4">
                  <Icon icon="solar:heart-linear" width={fn.rem(40)}/>
                  <Icon icon="iconamoon:comment-thin" width={fn.rem(40)}/>
                </div>

                <div>
                  <Icon icon="streamline:mail-send-email-message" width={fn.rem(40)}/>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};
export default PostCardTemplate;
