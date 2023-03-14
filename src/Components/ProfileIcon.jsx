import React from 'react'
import {TbGridDots} from "react-icons/tb"

import profile from "../assets/profile-200x200.jpg"
import profileRing from "../assets/profile-ring.svg"

function ProfileIcon() {
  return (
    <div className='flex gap-2'>
        <span  className='h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]'>
            <TbGridDots size={20} color="#5f6368" />
        </span>
        <span className='h-10 w-10 relative flex justify-center items-center rounded-full cursor-pointer hover:bg-black/[0.05]' >
            <img className='absolute hidden hover:block' src={profileRing} alt="" />
            <span className='h-8 w-8 bg-red-500 rounded-full overflow-hidden flex items-center justify-center' ><h1>B</h1>
                {/* <img className='h-full w-full object-cover' src={profile} alt="" /> */}
            </span>
        </span>
    </div>
  )
}

export default ProfileIcon