import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'


export default function Map() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <h1 className="text-4xl font-bold  text-slate-900 sm:text-6xl">
            Our Service Area
            </h1>
        <iframe className='rounded-xl' src="https://www.google.com/maps/d/u/0/embed?mid=19f48IIk8vnlN2dmE-3cBslxzTgs2fYM&ehbc=2E312F&noprof=1" 
         width={500}
         height={500} >
          
        </iframe>
             <div className="mx-auto max-w-2xl">
          <div className="hidden sm:py-10 sm:mb-8 sm:flex sm:justify-center">
           
          </div>
          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Why Book a Dog Visit?
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
                Some text here
            </p>
           
           
          </div>
        </div>
       
        </div>
      </div>
    </div>
  )
}
