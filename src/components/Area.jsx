import { useState } from "react"
import "./Area.css"

const Area = ({ tweetContent, setTweetContent }) => {
    const [tweetLength, setTweetLength] = useState(0)

    return (
        <div className="textarea-container">
            <textarea 
                name="tweet_content" 
                id="tweet_content" 
                className="tweet-textarea"
                maxLength={280} 
                onChange={(e) => {
                    setTweetLength(e.target.value.length)
                    setTweetContent(e.target.value)
                }} 
                value={tweetContent}
                placeholder="Write your message here..."
            />
            <p className="character-count">{tweetLength}/280</p>
        </div>
    )
}

export default Area