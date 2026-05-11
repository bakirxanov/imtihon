import React from 'react'

const DeleteModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="absolute inset-1 flex items-center justify-center  backdrop-blur">

      
      <div className="
        bg-[#1E293B] p-6 rounded-xl w-[300px] text-white text-center

         
        
      ">

        <h2 className="text-lg mb-4">Delete this todo?</h2>

        <div className="flex justify-center gap-3">

          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-500 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 rounded-lg"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  )
}

export default DeleteModal