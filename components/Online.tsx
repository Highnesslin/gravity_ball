import { useEffect, useState } from 'react'

const Online = function () {
  const [online, setOnline] = useState<number | null>(null)

  // useEffect(() => {
  //   let timeout: NodeJS.Timeout
  //   const updateOnline = async () => {
  //     const res = await fetch('/api/online')
  //     const data = await res.json()
  //     setOnline(data.online)

  //     timeout = setTimeout(() => {
  //       updateOnline()
  //     }, 20 * 1000)
  //   }

  //   updateOnline()

  //   return () => timeout && clearTimeout(timeout)
  // }, [])

  return (
    <main className='flex flex-col items-center justify-center px-4'>
      <div className='max-w-sm w-full text-center'>
        {/* <h1 className='text-3xl font-extrabold text-sky-700 mb-4'>👥 Players Online Now</h1> */}
        <p className='text-base font-bold text-sky-500'>{online === null ? 'Loading...' : `👥 Players Online Now ${online}`}</p>
        {/* <p className='mt-2 text-gray-600'>Join the fun and play Gravity Ball now!</p> */}
      </div>
    </main>
  )
}

export default Online
