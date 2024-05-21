/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Button, Form, InputGroup } from "rsuite";
import Images from "@/app/components/ImageWrapper";
import { Icon } from "@iconify/react";
import logo from "@/public/logo.png";
import { fn } from "@/utils/utilityfunctions";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {register, handleSubmit, reset } = useForm()


  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState("");

  const handleSignupForm = async (data, e) => {
    e.preventDefault();
    const response = await fetch('api/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json', 
      },
      body: JSON.stringify(data),
    });
    console.log(response);

    (response.ok) ? console.log('registration succcessful') : console.log('User registration failed');;
  };

  // console.log("Name: ", name);
  // console.log("Email: ", email);
  // console.log("Password: ", password);
  // console.log("Confirm Password : ", confirmPassword);

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
          <h6 className={"text-h6"}>Sign up for free</h6>
        </div>

        {/* form */}
        <Form onSubmit={handleSubmit(handleSignupForm)} style={{ maxWidth: fn.rem(300) }}>
          {/* email */}
          <Form.Group
            controlId={"email"}
          >
            <InputGroup inside>
              <InputGroup.Addon className={"text-blue-500"}>
                <Icon icon="arcticons:huawei-email" />
              </InputGroup.Addon>
              <Form.Control type={"email"} name="email" placeholder="Email" {...register ('email')}/>
            </InputGroup>
          </Form.Group>

          {/* user name */}
          <Form.Group
            controlId={"username"}
            onChange={(e) => {
              setName(e.target.value);
            }}
          >
            <InputGroup inside>
              <InputGroup.Addon className={"text-blue-500"}>
                <Icon icon="ri:user-line" />
              </InputGroup.Addon>
              <Form.Control name="username" placeholder="Username" {...register ('username')}/>
            </InputGroup>
          </Form.Group>

          {/* password */}
          <Form.Group
            controlId={"password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          >
            <InputGroup inside>
              <InputGroup.Addon className={"text-blue-500"}>
                <Icon icon="mdi:password-outline" />
              </InputGroup.Addon>
              <Form.Control
                type={"password"}
                name="password"
                placeholder="Password" {...register ('password')}
              />
            </InputGroup>
          </Form.Group>

          {/* confirm password */}
          <Form.Group
            controlId={"confirm_password"}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          >
            <InputGroup inside>
              <InputGroup.Addon className={"text-blue-500"}>
                <Icon icon="mdi:password-outline" />
              </InputGroup.Addon>
              <Form.Control
                type={"password"}
                name="confirm_password"
                placeholder="Confirm Password" {...register ('confirmPassword')}
              />
            </InputGroup>
          </Form.Group>
          {/* submit button */}
          <div>
            <button
              className={"bg-emBlue text-white w-full rs-btn rs-btn-default"}
            >
              {" "}
              Sign up {" "}
            </button>
          </div>

          {/* error message  */}
          {/* {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )} */}

          <div className={"w-full text-xs"}>
            <p className={"my-3"}>
              Alreaday have an account?{" "}
              <Link href={"/Auth/signin"} className={"text-emBlue font-bold"}>
                Sign In
              </Link>
            </p>
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

export default SignUp;
