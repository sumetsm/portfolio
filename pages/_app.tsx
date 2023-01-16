import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='grid grid-cols-12 gap-6'>
    <div className='col-span-3 bg-white'>
      Sidebar
    </div>
    <div className='col-span-9 bg-white'>
      <Component {...pageProps} />
    </div>
  </div>
}
