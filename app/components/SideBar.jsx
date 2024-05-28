"use client";

import React, {useState, useEffect} from "react";
import { Icon } from "@iconify/react";
import AvaterComponents from "./AvaterComponents";
import { fn } from "@/utils/utilityfunctions";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathName = usePathname();
  const [activityVisibility, setActivityVisibility] = useState(true)

  useEffect(() => {
    pathName != '/profile' ? setActivityVisibility(false) : setActivityVisibility(true)
  }, [pathName])

  return (
    <section className={`bg-white rounded-lg p-4`}>
      <AvaterComponents />
      <hr className={`my-5`} />

      {/* bio  */}
      <section>
        <p className={`text-h6 font-semibold`}>Bio</p>
        <p className={`text-sm`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          voluptatem beatae consectetur, recusandae cupiditate fugit dolore
          expedita tempore est quae ipsam minima quo nisi animi esse distinctio
          velit temporibus. Omnis.
        </p>
      </section>

      {/* info  */}
      <hr className={`my-5`} />
      <section>
        <p className={`text-h6 font-semibold`}>Info</p>
        <div className={`flex flex-col gap-4`}>
          <div className={`flex items-center gap-4`}>
            <Icon
              className={`text-emBlue`}
              fontSize={fn.rem(41)}
              icon="bx:map"
            />
            <p>Lagos, Nigeria</p>
          </div>
          <div className={`flex items-center gap-4`}>
            <Icon
              className={`text-emBlue`}
              fontSize={fn.rem(41)}
              icon="ph:briefcase-light"
            />
            <p>Realtor</p>
          </div>
        </div>
      </section>
      <hr className={`my-5`} />

      {/* activity  */}
      <section hidden= {activityVisibility}>
        <p className={`text-h6 font-semibold`}>Activities</p>
        <div className={`flex flex-col gap-4`}>
          <div className="flex justify-between">
            <div className={`flex items-center gap-4`}>
              <Icon
                className={`text-emBlue`}
                fontSize={fn.rem(41)}
                icon="fluent:people-community-16-regular"
              />
              <p>Followers</p>
            </div>
            <p>1000</p>
          </div>
          <div className="flex justify-between">
            <div className={`flex items-center gap-4`}>
              <Icon
                className={`text-emBlue`}
                fontSize={fn.rem(41)}
                icon="fluent:people-28-regular"
              />
              <p>Following</p>
            </div>
            <p>1000</p>
          </div>
          <div className="flex justify-between">
            <div className={`flex items-center gap-4`}>
              <Icon
                className={`text-emBlue`}
                fontSize={fn.rem(41)}
                icon="solar:chat-square-like-outline"
              />
              <p>Likes</p>
            </div>
            <p>1000</p>
          </div>
        </div>
      <hr className={`my-5`} />
      </section>

      {/* socials  */}
      <section>
        <p className={`text-h6 font-semibold`}>Socials</p>
        <div className={`flex flex-col gap-4`}>
          <div className={`flex items-center gap-4`}>
            <Icon
              className={`text-emBlue`}
              fontSize={fn.rem(41)}
              icon="prime:twitter"
            />
            <p>Twitter</p>
          </div>
          <div className={`flex items-center gap-4`}>
            <Icon
              className={`text-emBlue`}
              fontSize={fn.rem(41)}
              icon="mingcute:linkedin-line"
            />
            <p>Linkedin</p>
          </div>
        </div>
      </section>
    </section>
  );
};
export default SideBar;
