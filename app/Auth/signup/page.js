/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Images from "@/app/components/ImageWrapper";
import { Icon } from "@iconify/react";
import logo from "@/public/logo.png";
import { fn } from "@/utils/utilityfunctions";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "rsuite";
import { useRouter } from "next/navigation";

const SignUp = () => {
  // states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const router = useRouter();
  // using react hook form "useForm()" method
  const { register, handleSubmit } = useForm(); /** destructuring */

  // this is the function that would handle the onSubmit action set in our <form></form> tag.
  const handleMyForm = async(e) => {
    // console.log(data);
    // const response = await fetch("api/register", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // console.log(response);

    // response.ok
    //   ? console.log("Registration successful")
    //   : console.log("User registration failed");

    // e.preventDefault();
    // if(!name || !email || !password ) {
    //   setError('All fields are required');
    //   return
    // }
    try {
      const response = await fetch("api/register", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(name, email, password),
        });

        if(response.ok) {
          const form = e.target;
          // form.reset()
        } else {
          console.log('User registration failed');
        }
    } catch (error) {
      console.log('Error during registration: ', error);
    }
  };

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
        <form
          onSubmit={handleSubmit(handleMyForm)}
          style={{ maxWidth: fn.rem(300) }}
        >
          {/* email */}
          <div className="my-2 flex items-center border-2 border-emGrey rounded-md overflow-hidden bg-emBgColor">
            <div className={`text-2xl px-2 text-emBlue`}>
              <Icon icon="ic:outline-email" />
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder={`Email`}
              className="block w-full bg-transparent p-1 border-collapse"
              {...register("email")}
            />
          </div>

          {/* user name */}
          <div className="my-2 flex items-center border-2 border-emGrey rounded-md overflow-hidden bg-emBgColor">
            <div className={`text-2xl px-2 text-emBlue`}>
              <Icon icon="lets-icons:user" />
            </div>
            <input
            onChange={(e) => setName(e.target.value)}
              id="username"
              type="text"
              placeholder={`Username`}
              className="block w-full bg-transparent p-1"
              {...register("username")}
            />
          </div>

          {/* password */}
          <div className="my-2 flex items-center border-2 border-emGrey rounded-md overflow-hidden bg-emBgColor">
            <div className={`text-2xl px-2 text-emBlue`}>
              <Icon icon="tabler:lock" />
            </div>
            <input
            onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder={`Password`}
              type="password"
              className="block w-full bg-transparent p-1"
              {...register("password")}
            />
          </div>

          {/* confirm password */}
          <div className="my-2 flex items-center border-2 border-emGrey rounded-md overflow-hidden bg-emBgColor">
            <div className={`text-2xl px-2 text-emBlue`}>
              <Icon icon="tabler:lock" />
            </div>
            <input
              id="confirm_password"
              placeholder={`Confirm Password`}
              type="password"
              className="block w-full bg-transparent p-1"
              {...register("confirm_password")}
            />
          </div>

          {/* submit button */}
          <div>
            <Button type={"submit"} className={"bg-emBlue text-white w-full"}>
              Sign up
            </Button>
          </div>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <div className={"w-full text-xs"}>
            <p className={"my-3"}>
              Alreaday have an account?
              <Link
                href={"/Auth/signin"}
                className={"text-emBlue font-bold ml-1"}
              >
                Sign In
              </Link>
            </p>
            <p className={"text-emGrey"}>
              By signing up you accept our Privacy Policy, Terms & Licensing
              Agreement. Protected by reCAPTCHA. Google Privacy Policy & Terms
              apply.
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default SignUp;
