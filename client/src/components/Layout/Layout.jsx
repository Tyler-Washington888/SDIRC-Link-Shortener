import React from 'react'

function Layout() {
  return (
    <div className='screen'>
        <div className='navigation'>
        </div>
        <div className='body'>
            {props.children}
        </div>
    </div>
  )
}

export default Layout