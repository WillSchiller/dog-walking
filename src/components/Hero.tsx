import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Hero() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
       <div className="mx-auto max-w-2xl">
          <div className="hidden sm:py-10 sm:mb-8 sm:flex sm:justify-center">
         
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            15 & 30-Minute Dog Visits
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Our dog visits are so popular because we charge on a per visit basis and not per dog. Ideal if you own multiple dogs.
            </p>
            <div className="mt-10 flex items-center justify-center px-100 gap-x-6">
              <a
                href="#"
                className="rounded-md bg-rose-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Book now
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
           
          </div>
        </div>
          <Image
            src="/dog2.jpg"
            alt="Product screenshot"
            className="rounded-full mx-auto"
            width={500}
            height={500}
          />
       
        </div>
      </div>
    </div>
  )
}
