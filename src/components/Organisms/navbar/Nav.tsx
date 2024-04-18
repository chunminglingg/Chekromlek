import Logo from '@/components/Atoms/Logo/Logo'
import Link from 'next/link'
import React from 'react'

function navbar() {
  return (
    <nav className="fixed top-0 z-40 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
    <div className="px-3 py-3 lg:px-5 lg:pl-3 flex justify-between">
      <Link href={"#"}>
        <Logo />
      </Link>
      <div className="flex flex-row gap-4 items-center ">
        <button className="text-white">Hello</button>
        <Link href={"#"}>hello</Link>
      </div>
    </div>
    </nav>
  )
}

export default navbar