import React from 'react'
import styles from './button.module.css'
function Button(props) {
  const {text,style,onClick} = props
  return (
    <button style={style} className={styles.butn} onClick={onClick}>{text}</button>
  )
}

export default Button