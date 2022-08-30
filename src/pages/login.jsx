import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState, useEffect } from 'react'

import { AuthForm } from '../components/common/Global'
import { SplitElement } from '../components/common/SplitElement'
import { WrapNextImage } from '../components/Header/StyledHeader'

const Login = () => {
  const [passwordType, setPasswordType] = useState('password')
  const rememberMe = useRef(null)
  const router = useRouter()
  const errorString = router.query.error

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      return
    }
    setPasswordType('password')
  }

  useEffect(() => {
    if (errorString) {
      alert('Login failed!!')
      window.history.pushState({}, document.title, '/login')
    }
  }, [errorString])

  const handleSubmitForm = e => {
    e.preventDefault()
    e.target.submit()
  }

  return (
    <AuthForm className="flex flex-col items-center justify-center">
      <h1 className="font-black text-head1 text-gray">Sign In</h1>
      <p className="font-medium text-base text-gray mt-[10px] mb-[30px]">
        Welcome back, you&apos;ve been missed!
      </p>
      <div className="p-10 shadow-lg rounded-[20px]">
        <div className="flex justify-between flex-col lg:flex-row gap-5">
          <button className="flex items-center gap-[25px] justify-center bg-gray/5 h-[52px] px-[30px] rounded-[10px]">
            <Image
              src="/assets/icons/icon-google.svg"
              alt="Sign In With Google"
              width={16}
              height={16}
            />
            <span className="font-medium text-base text-gray">
              Log in with Google
            </span>
          </button>
          <button className="flex items-center gap-[25px] justify-center bg-gray/5 h-[52px] px-[30px] rounded-[10px]">
            <Image
              src="/assets/icons/icon-apple.svg"
              alt="Sign In With Apple"
              width={16}
              height={16}
            />
            <span className="font-medium text-base text-gray">
              Log in with Apple
            </span>
          </button>
        </div>
        <SplitElement />
        <form action="/api/login" method="POST" onSubmit={handleSubmitForm}>
          <div className="relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-5">
              <WrapNextImage className="w-4 h-4">
                <Image
                  src="/assets/icons/icon-@mail.svg"
                  alt="Icon Email"
                  layout="fill"
                />
              </WrapNextImage>
            </div>
            <input
              type="text"
              name="email"
              className="border border-gray/20 rounded-[10px] w-full h-[52px] pl-[46px] focus:outline-none placeholder:text-14 placeholder:font-medium placeholder:text-gray/60"
              placeholder="Your Email"
            />
          </div>
          <div className="relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-5">
              <WrapNextImage className="w-4 h-4">
                <Image
                  src="/assets/icons/icon-password.svg"
                  alt="Icon Password"
                  layout="fill"
                />
              </WrapNextImage>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer">
              <WrapNextImage className="w-4 h-4">
                <Image
                  src={
                    passwordType === 'password'
                      ? '/assets/icons/icon-eyeoff.svg'
                      : '/assets/icons/icon-eye.svg'
                  }
                  layout="fill"
                  alt="Icon Show Password"
                  onClick={togglePassword}
                />
              </WrapNextImage>
            </div>
            <input
              type={passwordType}
              name="password"
              className="border border-gray/20 rounded-[10px] w-full h-[52px] pl-[46px] focus:outline-none placeholder:text-14 placeholder:font-medium placeholder:text-gray/60 my-5"
              placeholder="Input Password"
            />
          </div>
          <div className="px-5 flex justify-between items-center flex-row">
            <div className="gap-[10px] cursor-pointer flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer checked:bg-primary focus:outline-none"
                id="remember-check"
                ref={rememberMe}
              />
              <label
                htmlFor="remember-check"
                className="text-14 font-medium text-gray cursor-pointer"
              >
                Remember Me
              </label>
            </div>
            <Link href="/forgot-password">
              <a className="text-gray text-14 font-medium">Forgot Password?</a>
            </Link>
          </div>
          <button
            type="submit"
            className="w-full my-[30px] h-10 text-base flex items-center justify-center text-white rounded-[10px] font-medium bg-primary"
          >
            Sign In
          </button>
        </form>

        <Link href="/register">
          <a className=" text-base font-medium flex justify-center items-center">
            <span className="text-gray">You haven&apos;t any account?</span>
            <span className="text-primary ml-[15px]">Sign Up</span>
          </a>
        </Link>
      </div>
    </AuthForm>
  )
}

export default Login
