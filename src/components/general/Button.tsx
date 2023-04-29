import React from 'react'
import Link from 'next/link'
import style from '@/styles/components/general/Button.module.scss'

interface ButtonProps {
  title: string,
  target?: string,
  linkTo?: string,
  onClick?: () => void,
}

const Button = (props: ButtonProps) => {
  const onClick = () => {
    const onClickProp = props.onClick
    if (onClickProp == null || onClickProp == undefined) return
    onClickProp();
  }

  if (props.onClick != null) {
    return (
      <button
        className={style.btn}
        onClick={onClick}>
        {props.title}
      </button>
    )
  }
  return (
    <Link
      className={style.btn}
      href={props.linkTo ?? '/'}
      target={props.target}>
      {props.title}
    </Link>
  )
}


export default Button