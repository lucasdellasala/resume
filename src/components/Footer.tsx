

function Footer(props: { content: any }) {
    const { list } = props.content;
    return (
        <div className='section'>
            <div className='content media'>
                {list.map((item: any) => {
                    return (
                        <a href={item.url} target="_blank" rel="noreferrer">
                            <div className='social-media-container'>
                                <img src={item.img} className="social-media-logo" alt={item.alt} />
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Footer;