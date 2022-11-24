function Card() {
    return (
        <section>
            <img src={require('../assets/Mount-Fuji.png')} alt='location' className='photo-location'/>
            <div>
                <span className='location-container'>
                    <img src={require('../assets/location-pin.png')} alt='location pin symbol' className='location-pin'/>
                    <p className='location-country'>JAPAN</p>
                    <a href='https://www.google.com/maps/@43.8395009,-79.3916043,15z' className='location-link'>View on Google Maps</a>
                </span>
                <h1 className='location-name'>Mount Fuji</h1>
                <p className='trip-date'>12 Jan, 2021 - 24 Jan, 2021</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,716 meters. Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </section>
    )
}

export default Card;