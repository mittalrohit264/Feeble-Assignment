import React from 'react';
import './styles.css';

// type -> Primary | Secondary

export default function Button({
  onClick,
  type = 'Primary',
  disableHover = false,
  icon,
  children
}) {
  return (
    <div
      onClick={onClick}
      className={`button-wrapper ${type} ${disableHover ? 'no-hover' : ''}`}
    >
        {icon && <img src={icon} className='icon' />}
        {icon && <span className='icon-seperator'>|</span>}
      <span className={`button-label ${type}-label`}>
        {children}
      </span>
    </div>
  );
}
