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

    const text = "I want to sign the CitizenGO campaign: Get updates from CitizenGO on WhatsApp";

    return (
        <div className="box-container">
            <h3 className="box-title">Share Link Generator for Twitter Bombing <a href={`https://api.whatsapp.com/send/?phone=19787966635&text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer" style={{ color: "black", textDecoration: "none", cursor: "pointer" }}> Emails</a></h3>
            <p className="box-instructions">Write the content of the Tweet here. Remember that exactly as you write it, it will be shared by the members of your list.
                Remember to mention the local account and add the link to the petition with the corresponding UTM.
                <br />
                <br />
                You can do it here: Link to <a href="https://url-shortener.citizengo.org/" target="_blank" rel="noopener noreferrer">https://url-shortener.citizengo.org</a>
            </p>
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
