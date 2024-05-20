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
        <div className={"text-center flex flex-col items-center mb-5"}>
          <Images
            src={logo}
            alt={logo}
            width={fn.rem(100)}
            height={fn.rem(50)}
            objectFit={"contain"}
          />
          <h1 className={"text-h1 font-semibold"}>Welcome to EM</h1>
          <h6 className={"text-h6"}>Sign in here</h6>
        </div>
        {/* form */}

        <Form style={{ maxWidth: fn.rem(300) }}>
          {/* email */}
          <Form.Group controlId={"email"}>
            <InputGroup inside>
              <InputGroup.Addon className={"text-blue-500"}>
                <Icon icon="arcticons:huawei-email" />
              </InputGroup.Addon>
              <Form.Control type={"email"} name="email" placeholder="Email" />
            </InputGroup>
          </Form.Group>

          {/* password */}
          <Form.Group controlId={"password"}>
            <InputGroup inside>
              <InputGroup.Addon className={"text-blue-500"}>
                <Icon icon="ri:user-line" />
              </InputGroup.Addon>
              <Form.Control
                type={"password"}
                name="password"
                placeholder="Password"
              />
            </InputGroup>
          </Form.Group>

          {/* submit button */}
          <div>
            <Button className={"bg-emBlue text-white w-full"}>Sign in</Button>
          </div>

          {/* error message  */}
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            Error Message
          </div>

          <div className={"w-full text-xs"}>
            <div></div>
            <p className={"text-emGrey"}>
              By signing up you accept our Privacy Policy, Terms & Licensing
              Agreement. Protected by reCAPTCHA. Google Privacy Policy & Terms
              apply.
            </p>
          </div>
        </Form>
      </section>
    </>
  );
};
export default page;
