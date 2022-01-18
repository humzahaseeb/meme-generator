import React from 'react'

export const Meme = () => {
    return (
        <div className='form'>
            <div className='input'>
                <input type="text" placeholder='Upper Text' />
                <input type="text" placeholder='Bottom Text'/>
            </div>
            <div className='button'>
                <input type="button" value="Generate a new meme image" />
            </div>
        </div>
    )
}

export default Meme