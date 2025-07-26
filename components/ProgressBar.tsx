import React from 'react'

export interface ProgressBarRef {
  complete: () => void
}

const ProgressBar = React.forwardRef<ProgressBarRef>((_, ref) => {
  const [progress, setProgress] = React.useState(1)
  const interval = React.useRef<NodeJS.Timeout>(null)

  React.useEffect(() => {
    interval.current = setInterval(() => {
      setProgress(prev => {
        let next = prev

        if (prev < 80) {
          next = prev + 8
        } else if (prev < 95) {
          next = prev + Math.random() * 2
        } else {
          if (interval.current) clearInterval(interval.current)
          return prev
        }

        // 👇 修正精度：最多保留一位小数
        return Math.min(parseFloat(next.toFixed(1)), 95)
      })
    }, 300)

    return () => {
      if (interval.current) clearInterval(interval.current)
    }
  }, [])

  React.useImperativeHandle(ref, () => ({
    complete() {
      interval.current && clearInterval(interval.current)
      setProgress(100)
    },
  }))

  return (
    <div className='flex-1 relative max-w-lg md:mx-0 mx-7 z-10'>
      <div
        className='inline-block mb-2 py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg transition-all ease-linear'
        style={{
          marginInlineStart: `calc(${progress}% - 20px)`,
        }}
      >
        {progress}%
      </div>
      <div className='flex w-full h-2 bg-gray-200 rounded-full overflow-hidden' role='progressbar'>
        <div
          className='flex flex-col justify-center rounded-full overflow-hidden bg-blue-500 text-xs text-white text-center whitespace-nowrap transition-all ease-linear'
          style={{
            width: progress + '%',
          }}
        ></div>
      </div>
    </div>
  )
})

export default ProgressBar
