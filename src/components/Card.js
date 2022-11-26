function Card(props) {
    return (
        <section>
            <img src={require('../assets/' + props.img)} alt='location' className='photo-location'/>
            <div>
                <span className='location-container'>
                    <img src={require('../assets/location-pin.png')} alt='location pin symbol' className='location-pin'/>
                    <p className='location-country'>{props.country}</p>
                    <a href={props.link} className='location-link'>View on Google Maps</a>
                </span>
                <h1 className='location-name'>{props.location}</h1>
                <p className='trip-date'>{props.startDate}</p>
                <p>{props.description}</p>
            </div>
        </section>
    )
}

export default Card;