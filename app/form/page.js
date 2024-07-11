"use client"
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
})

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    console.log("Form submitted with data:"); // Add logging to check data submission
    // Simulate asynchronous process
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    alert("Form Submitted") // This prints the submitted data to the console
    reset(); // Reset the form fields
  };

  return (
    <main className="flex justify-center items-center h-screen flex-col gap-5">
      <Link href="/" className="text-blue-500 mb-4">
        Back to Home
      </Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-5'
      >
        <div>
          <label className='block mb-1' htmlFor="username">Enter Your Name</label>
          <input
            id="username"
            {...register("username")}
            type='text'
            className="p-2 border border-gray-300 rounded"
          />
          {errors.username && <p className='text-red-500' aria-live="polite">{errors.username.message}</p>}
        </div>
        <div>
          <label className='block mb-1' htmlFor="email">Enter Your Email</label>
          <input
            id="email"
            {...register("email")}
            type='email'
            className="p-2 border border-gray-300 rounded"
          />
          {errors.email && <p className='text-red-500' aria-live="polite">{errors.email.message}</p>}
        </div>
        <div>
          <label className='block mb-1' htmlFor="password">Enter Your Password</label>
          <input
            id="password"
            {...register("password")}
            type='password'
            className="p-2 border border-gray-300 rounded"
          />
          {errors.password && <p className='text-red-500' aria-live="polite">{errors.password.message}</p>}
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className='bg-blue-500 text-white p-2 rounded'
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </main>
  )
}

export default FormPage
