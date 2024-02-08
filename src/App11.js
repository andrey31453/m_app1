import React from 'react'
import s from './styles.module.scss'
console.log('styles: ', s)

export default ({ children }) => {
  const ifs = true
  return (
    <div
      className={`${s.btn} ${ifs ? s.primary : s.secondary}`}
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      <h1>App 111111</h1>

      {children}
    </div>
  )
}
