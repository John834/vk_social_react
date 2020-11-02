import React from 'react';
import uc from './UserCount.module.css';

const Count = (props) => {
  return (
    <div className={uc.counts}>
        <div className={uc.count}>{props.count}</div>
        <div className={uc.label}>{props.label}</div>
      </div>
  )
}

const UserCount = (props) => {
  let counts = props.data.map((c, index) => <Count count={c.count} label={c.label} key={`${c}_${index}`} />)

  return (
    <div className={uc.user__counts}>
      { counts }
    </div>
  )
}

export default UserCount;