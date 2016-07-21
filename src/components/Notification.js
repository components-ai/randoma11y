import React, { PropTypes } from 'react'

const Notification = ({ children }) => (
  <div className='bg-black near-white tc pv2 fixed left-0 top-0 right-0'>
    <p className='fw6 ttu tracked mv0'>{children}</p>
  </div>
)

Notification.propTypes = {
  children: PropTypes.object
}

export default Notification
