function Card() {
    return (
        <section>
            <img src={require('../assets/Mount-Fuji.png')} alt='location' className='photo-location'/>
            <div>
                <span className='location'>
                    <p>JAPAN</p>
                    <p>View on Google Maps</p>
                </span>
                <h1>Mount Fuji</h1>
                <h3>12 Jan, 2021 - 24 Jan, 2021</h3>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,716 meters. Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </section>
    )
}

export default Card;