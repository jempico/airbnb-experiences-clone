
export default function Card({picture, status, rating, reviews, country, title, price}){
    return(
        <div className="card">
            <div className="card_top">
                <img className="card_photo" src={picture} alt=""/>
                <div className="card_photo_badge">{status}</div>
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