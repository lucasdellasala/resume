function Hero(props: { content: any }){
    const { title, subtitle, img, detail} = props.content;
    return (
        <div className='section hero'>
            <div className='profile-pic-container'>
            <img src={img} className="profile-pic" alt="profile pic" />
            </div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{detail}</p>
        </div>
    )
}

export default Hero;