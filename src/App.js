import React from "react"
import Header from "./components/Header"

export default function App(){
    const [meme, setMeme]  = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/4xgqu.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useState(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data))
    }, [])

    function getRandomImage(){
        let images_stock = allMemeImages.data.memes
        const randomIndex = Math.floor(Math.random() * images_stock.length)
        let selectedImage = images_stock[randomIndex]
        let image_url = selectedImage.url
        setMeme(prevMeme => ({...meme, randomImage: image_url}))
    }

    function handleChange(event){
        const {name, value} = event.target
        return(
            setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
            }))
        )
    }
    return(
        <div>
            <Header />
            <main>
                <div className="main-div">
                    <input
                        name="topText"
                        type="text"
                        placeholder="Top Text"
                        className="div-input"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        name="bottomText"
                        type="text"
                        placeholder="Bottom Text"
                        className="div-input"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    <button onClick={getRandomImage} className="div-btn">Get a new Meme Image</button>
                </div>
                <div className="meme">
                    <img src={meme.randomImage} className="meme-img" alt="A Meme u know!"/>
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            </main>
            
        </div>
    )
}