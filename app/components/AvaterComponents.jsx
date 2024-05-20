import { fn } from "@/utils/utilityfunctions";
import Image from "next/image";
import { Icon } from "@iconify/react";
import profile from '@/public/profile.png'

const AvatarComponent = () => {
    return (
        <div className={`flex items-center gap-2`}>
            <div style={{ width: `fit-content` }} className={`relative rounded-full overflow-hidden`}>
                <Image
                    width={100}
                    height={100}
                    src={profile}
                    alt={`avatar-img`}
                />
            </div>
            <div>
                <p className={`font-semibold text-h5`}>John Doe</p>
                <p>0 Friends</p>
            </div>

            <div>
                <Icon className={'text-emBlue'} fontSize={fn.rem(28)} icon='line-md:edit' />
            </div>
        </div>
    );
};
export default AvatarComponent;