import React from 'react'
import "../App.css"
import { Input } from '../components/ui/input'
export const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium">Username</label>
            <Input type="text" id="username" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <Input type="password" id="password" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
        </form>
      </div>
    </div>
    </>
  )
}
