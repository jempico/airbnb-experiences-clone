
export default function Card(experience){
    console.log(experience.status);
    return(
        <div className="card">
            <div className="card_top">
                <img className="card_photo" src="./experiences/katie-zaferes.png" alt=""/>
                <div className="card_photo_badge">{experience.status}</div>
            </div>
            <div className="card_bottom">
                <div className="card_rating">
                    <img className="rating_star" src="star.png" alt=""/>
                    <p className="rating_title">5.0 <span className="country">(6) · USA</span></p>
                </div>
                <p className="card_description">Life lessons with Katie Zaferes</p>
                <p className="card_price"><span className="price">From $136</span> / person</p>
            </div>

        </div>


    )
}