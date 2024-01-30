"use client";

import Link from './Link'
import SocialIcon from '@/components/social-icons'

export default function Footer() {

  return (
        <footer>
        <div className="mt-5 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href='#' size={6} />
          <SocialIcon kind="github" href='#' size={6} />
          <SocialIcon kind="linkedin" href='#' size={6} />
          <SocialIcon kind="twitter" href='#' size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">DogWalking.com</Link>
        </div>
      </div>
      </footer>
      

  )
}
