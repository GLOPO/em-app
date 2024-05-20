"use client";

import { Button, Form, InputGroup } from "rsuite";
import Images from "@/app/components/ImageWrapper";
import { Icon } from "@iconify/react";
import logo from "@/public/logo.png";
import { fn } from "@/utils/utilityfunctions";
import Link from "next/link";

const page = () => {

  return (
    <>
      <section>
            {/* header */}
            <div className={'text-center flex flex-col items-center mb-5'}>
                <Images src={logo} alt={logo} width={fn.rem(100)} height={fn.rem(50)} objectFit={'contain'} />
                <h1 className={'text-h1 font-semibold'}>Forgot Password</h1>
                <h6 className={'text-h6'}>Enter email address to recover password</h6>
            </div>
            {/* form */}

            <Form style={{ maxWidth: fn.rem(400) }}>
                {/* email */}
                <Form.Group controlId={"email"} >
                    <InputGroup inside>
                        <InputGroup.Addon className={'text-blue-500'}>
                            <Icon icon='arcticons:huawei-email'  />
                        </InputGroup.Addon>
                        <Form.Control type={'email'} name='email' placeholder='Email' />
                    </InputGroup>
                </Form.Group>

                {/* submit button */}
                <div>
                  <Button className="bg-emBlue text-white w-full rounded-full">Register Password</Button>
                </div>
                {/* <div>
                    <Button className={'bg-emBlue text-white w-full'}>Recover Password</Button>
                </div> */}
            </Form>
        </section>
    </>
  )
}

export default page