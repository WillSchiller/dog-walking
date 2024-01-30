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

export default function Middle() {
  return (
    <div className="overflow-hidden bg-rose-300 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
    
          <Image
            src="/dog3.jpg"
            alt="Product screenshot"
            className="rounded-xl mx-auto"
            width={500}
            height={700}
          />
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
