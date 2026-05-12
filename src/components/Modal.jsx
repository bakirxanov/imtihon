import React from 'react'

const Modal = ({ children, openModal, setOpenModal }) => {
  return (
    <div onClick={(e) => e.target.id === 'wrapper' && setOpenModal(false)} id='wrapper' className={`${openModal ? "" : "scale-0"} fixed duration-300 top-0 right-0 left-0 bottom-0 cursor-pointer backdrop-blur-2xl flex items-center justify-center p-4`}>
        <div className='absolute w-100 h-25 rounded-2xl bg-white'>{children}</div>
    </div>
  )
}

export default Modal