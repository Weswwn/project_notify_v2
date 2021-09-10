import React, { useEffect } from 'react';

interface Props {
    className?: string;
}

export function TwitterWidget({ className = '' }: Props) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, [])

    return (
        <section className={`twitterContainer ${className}`}>
            <div className="twitter-embed">
                <a
                    className="twitter-timeline"
                    data-theme="dark"
                    data-tweet-limit="5"
                    data-chrome="noheader nofooter noborders"
                    href="https://twitter.com/weswwn"
                >
                    Tweets by Weswwn
        </a>
            </div>
        </section>
    )
}