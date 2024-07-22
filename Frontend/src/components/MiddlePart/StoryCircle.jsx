import { Avatar } from '@mui/material'
import React from 'react'

const StoryCircle = () => {
  return (
    <div>
      <div className='flex flex-col items-center mr-4 cursor-pointer'>
          <Avatar sx={{width:"4rem", height:"4rem"}} src='https://cdn.pixabay.com/photo/2021/06/04/10/29/man-6309454_640.jpg'
          >
            
            
          </Avatar>
          <p>codewithlenn</p>
        </div>
    </div>
  )
}

export default StoryCircle
