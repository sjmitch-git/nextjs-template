'use client'

import { useTheme } from '@lib/contexts/ThemeContext'
import { Switch, Spinner } from '@ui'
import { useEffect, useState } from 'react'

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || theme === null) {
    return (
      <div className='flex items-center'>
        <div className='w-[67px] h-10 text-info'>
          <Spinner width={40} />
        </div>
      </div>
    )
  } else {
    return (
      <Switch
        switchOffColor='info'
        switchOffContent='☼'
        switchOnColor='warning'
        switchOnContent='☾'
        shape='circle'
        checked={theme === 'dark'}
        defaultChecked={theme === 'dark'}
        onChange={toggleTheme}
        className='text-dark dark:text-light'
      />
    )
  }
}

export default ToggleTheme
