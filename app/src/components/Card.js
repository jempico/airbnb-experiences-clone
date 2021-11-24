
export default function Card({picture, openSpots, rating, reviews, country, title, price, online}){
    let status_badge;
    if (openSpots === 0) { 
        status_badge = "SOLD OUT"
    } else if (online) {
        status_badge = "ONLINE"
    } 
    
    return(
        <div className="card">
            <div className="card_top">
                <img className="card_photo" src={picture} alt=""/>
               {status_badge && <div className="card_photo_badge">{status_badge}</div>}
            </div>
            <div className="card_bottom">
                <div className="card_rating">
                    <img className="rating_star" src="star.png" alt=""/>
                    <p className="rating_title">{rating} <span className="grey">({reviews}) · </span><span className="grey">{country}</span></p>
                </div>
                <p className="card_description">{title}</p>
                <p className="card_price"><span className="bold">From ${price}</span> / person</p>
            </div>

        </div>


    )
}