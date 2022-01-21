import React, {useState} from 'react'
import memesData from '../memesData'

export const Meme = () => {

    const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

    const getMemeImage = () => {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const randomMeme = memesArray[randomNumber];

        setMemeImage(randomMeme.url);
    }


    return (
        <div>
            <div className='form'>
                <div className='input'>
                <input type="text" placeholder='Upper Text' />
                <input type="text" placeholder='Bottom Text'/>
                </div>
                <div className='button' onClick={getMemeImage}>
                <input type="button" value="Generate a new meme image" />
                </div>
            </div>

            <div className='meme-image'>
                <img src={memeImage} className='meme' />  {/* <-- this is the image that will be generated */}
            </div>

        </div>
    )
}

export default Meme