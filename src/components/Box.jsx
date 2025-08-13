import { useState } from "react"
import Area from "./Area"
import Link from "./Link"
import "./Box.css"

const Box = () => {
    const [tweetContent, setTweetContent] = useState("")
    const [twitterLink, setTwitterLink] = useState("")
    const [facebookLink, setFacebookLink] = useState("")

    const extractFirstUrl = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/i
        const match = text.match(urlRegex)
        return match ? match[0] : ""
    }

    const createTwitterShareLink = () => {
        const baseUrl = "https://twitter.com/intent/tweet"
        const text = encodeURIComponent(tweetContent)
        return `${baseUrl}?text=${text}`
    }

    const createFacebookShareLink = () => {
        const baseUrl = "https://www.facebook.com/sharer/sharer.php"
        const pageUrl = extractFirstUrl(tweetContent)
        const textWithoutUrl = tweetContent.replace(pageUrl, "").trim()

        const params = new URLSearchParams()
        if (pageUrl) params.set("u", pageUrl)
        if (textWithoutUrl) params.set("quote", textWithoutUrl)

        return `${baseUrl}?${params.toString()}`
    }
    
    return (
        <div className="box-container">
            <h3 className="box-title">Your awesome Tweet</h3>
            <Area tweetContent={tweetContent} setTweetContent={setTweetContent} />
            <div className="buttons-container">
                <button 
                    className="share-button twitter-button"
                    onClick={() => setTwitterLink(createTwitterShareLink())}
                >
                    Create Twitter link
                </button>
                <button 
                    className="share-button facebook-button"
                    onClick={() => setFacebookLink(createFacebookShareLink())}
                >
                    Create Facebook link
                </button>
            </div>
            <div className="links-container">
                <div className="link-section">
                    <h4 className="link-title">Twitter Link:</h4>
                    <div className="link-content">
                        <Link link={twitterLink} />
                    </div>
                </div>
                <div className="link-section">
                    <h4 className="link-title">Facebook Link:</h4>
                    <div className="link-content">
                        <Link link={facebookLink} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box
