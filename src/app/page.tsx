import Hero from '../components/Hero';
import Middle from '../components/Middle';
import Reviews from '../components/Reviews';
import Banner from '@/components/Banner';
export default function Home() {
  return (
  <>
  <Banner />
  <Hero />
  <Middle />
  <Reviews placeId='ChIJM5c600P0ekgRl0VIb2Y1zbM' apiKey='AIzaSyDnz-zIzO94j_lJOGf6zFGFqRHxV8er5_w' />
  </>
  )
  }
