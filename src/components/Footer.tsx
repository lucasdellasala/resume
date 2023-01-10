import { useTranslation,  } from 'react-i18next';

function Footer(props: { content: any }) {
    const {t } = useTranslation("global");
    const { list } = props.content;

    return (
        <div className='section'>
            <div className='content media'>
                {list.map((_: any, i: number) => {
                    const url = t(`socialMedia.list.${i}.url`).toString();
                    const alt = t(`socialMedia.list.${i}.alt`).toString();
                    const src = t(`socialMedia.list.${i}.img`).toString();
                    const className = t(`socialMedia.list.${i}.className`).toString();
                    return (
                        <a href={url} target="_blank" rel="noreferrer" key={`${url}-footer-badge`}>
                            <div className='social-media-container grow-25'>
                                <img src={src} className={`social-media-logo ${className}`} alt={alt} />
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Footer;