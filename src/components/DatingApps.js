import React, { useState } from "react";


function DatingApps() {

    const [count, setCount] = useState(0)

    function handleLikesClick() {
        setCount(count + 1)
    }

    function handleDislikesClick() {
        setCount(count + 1)
    }

    
    return (
    <div>
        <div>
            <h2 className="dapps-tittle">Dating Apps</h2>
        </div>
            <div className="logo-container">
                <div>
                    <img className="tinder-logo" src="tinderlogo.png"></img>
                    <h3 className="tinder-title">Tinder</h3>
                        <p className="tinder-info">Most people think Tinder is only for hook-ups, but I found my ex of 4.5 years on it.
                        It's true that most people therer are looking just for some fun, so it's kind of annoying to endless swipe left until you 
                        find jewel. I have also made some cool friends from there over the years. Unfurtunatelly they will bann you if a memeber report
                        you without investigating the issue first.</p>
                        <p className="tinder-info">PROS: Endless options, annonimus, works in almost any country, easy to use, diversity.</p>
                        <p className="tinder-info">CONS: You can't filter your preferences, to many people looking for hook-ups, some men can be disrespectful.</p>
                        <button className="like-button" onClick={handleLikesClick}> Like: {count}</button>
                </div>
                <div>
                    <img className="hinge-logo" src="hingelogo.jpg"></img>
                    <h3 className="hinge-title">Hinge</h3>
                        <p className="hinge-info">Hinge is definetely one of my favorites, most people here are looking for relationships and the crowd is a little bit more
                        mature, late 20s, 30s and 40s. It work pretty good for women in their free version, and you don't have to swipe forever. You can also see how many
                        people is liking you.</p>
                        <p className="hinge-info">PROS: Many options, you can filter preferences, works in a lot of countries, not endelss swiping.</p>
                        <p className="hinge-info">CONS: Only gives you 8 likes for day on its free version, you can go back on your choce if you regret it for free,is not annonimus, sometimes people matches but not talk.</p>
                        <button className="like-button" onClick={handleLikesClick}> Like: {count}</button>
                </div>
                <div>
                     <img className="bumble-logo" src="bumblelogo.jpg"></img>
                     <h3 className="bumble-title">Bumble</h3>
                        <p className="bumble-info">Bumble in my opinion is almost the same as Tinder, the only difference is that women have to start conversations.
                        So it's ideal for shy men and for women who like to feel more in control about who they talked. You can find a mix of people here, depending on their 
                        age range you'll find more people looking for hooks-ups or relationships.</p>
                        <p className="bumble-info">PROS: Endless options, works in a lot of countries, has travel mode, gives women more control in the conversations, its annonimus.</p>
                        <p className="bumble-info">CONS: You can't filter your preferences, conversations expire after 24 hours if there are no interactions in the first 24 hours.</p>
                        <button className="like-button" onClick={handleLikesClick}> Like: {count}</button>
                </div>
                <div>
                    <img className="cmb-logo" src="cmblogo.png"></img>
                    <h3 className="cmb-title">Coffee meets Bagel</h3>
                       <p className="bumble-info">This is by far the app that I liked the less. They charge you for absolutely everything, it's pretty obvious that the app was made
                        to bleed people out of money and not to give a nice user experience. Total scam. They only give you few options to swipe from for free a day, and while they
                        say they give you those options base on your preferences, they put the most attractive users in the paying section of the app.</p>
                        <p className="bumble-info">PROS: You can filter your preferences.</p>
                        <p className="bumble-info">CONS: Everything else.</p>
                        <button className="like-button" onClick={handleLikesClick}> Like: {count}</button>
                </div>
                <div>
                    <img className="fb-logo" src="fblogo.png"></img>
                    <h3 className="fb-title">Facebook Dating</h3>
                        <p className="fb-info">Alse works a bit like Tinder, but it uses you FB profile to find matches. I only used it for a day so I don't have lot of experience.
                        Looked a bit trashy for my taste.</p>
                        <p className="fb-info">PROS: Works for everyone thta has a FB account, works in almost every country, many options.</p>
                        <p className="fb-info">CONS: Not my type of crowd but try it yourself and let me know!</p>
                        <button className="like-button" onClick={handleLikesClick}> Like: {count}</button>
                </div>
            </div>
    </div>
    )
}

export default DatingApps