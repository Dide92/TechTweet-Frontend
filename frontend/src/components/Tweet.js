import React from 'react'

function Tweet({tweets}) {
    return (
        <div className="tweets">
            {tweets.map((t) => (
                <div key={t.id}>
                    <p> {t.title}</p>
                    <p> {t.author}</p>
                    <img src={t.image} />
                    <p> {t.description}</p>
                    <p> {t.linkedin}</p>
                    <p> {t.github}</p>
                </div>
            ))}      
        </div>
    )

}

export default Tweet;