import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import styles from './user.less'

function Food ({ avatar, name, category, energy }) {
  return (<div className={styles.food}>
    <div className={styles.header}>
      <div className={styles.headerinner}>
        <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }} />
        <h5 className={styles.name}>{name}</h5>
        <p>{category}</p>
        <p>{energy}</p>
      </div>
    </div>
    <div className={styles.footer}>
      <Button type="ghost" size="large">View Profile</Button>
    </div>
  </div>)
}

Food.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  energy: PropTypes.number,
}

export default Food
