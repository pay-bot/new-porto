import React, { useEffect, useState } from 'react'
import TypeIt from 'typeit-react'

export default function CustomTypeIt({ children }) {
  const [countVsCode, setCountVsCode] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCountVsCode(localStorage.getItem('vsCodeCount'))
    }
  }, [])
  return countVsCode ? (
    <span className=''>{children}</span>
  ) : (
    <TypeIt
      options={{
        cursor: false,
        speed: 35,
        // lifeLike: true,
        // loop: true,
        loopDelay: 5000,
        // startDelete: true,
        startDelay: 1000,
        // deleteSpeed: 35,
        // waitUntilVisible: true,
      }}
    >
      {children}
    </TypeIt>
  )
}
