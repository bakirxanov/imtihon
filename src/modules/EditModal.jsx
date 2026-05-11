import React, { useState } from 'react'

const EditModal = ({ onCancel, onSave, currentText }) => {

    const [text, setText] = useState(currentText)

    function handleSave() {
        if (text.trim() === "") return
        onSave(text)
    }

    return (
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur bg-black/40">

            <div className="bg-[#1E293B] p-6 rounded-xl w-[300px] text-white text-center">

                <h2 className="text-lg mb-4">Edit Todo</h2>

                
                <input
                    type="text"
                    value={text}
                    
                    className="w-full px-3 py-2 rounded-lg bg-[#0F172A] text-white outline-none mb-4"
                />

                <div className="flex justify-center gap-3">

                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-500 rounded-lg"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-green-600 rounded-lg"
                    >
                        Save
                    </button>

                </div>

            </div>

        </div>
    )
}

export default EditModal