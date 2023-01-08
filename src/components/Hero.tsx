import { useTranslation } from 'react-i18next';

function Hero(props: { content: any }){
    const {t} = useTranslation("global");

    return (
        <div className='section hero'>
            <div className='profile-pic-container'>
            <img src={t("hero.img").toString()} className="profile-pic" alt="profile pic" />
            </div>
            <h1>{t("hero.title")}</h1>
            <h2>{t("hero.subtitle")}</h2>
            <p>{t("hero.detail")}</p>
        </div>
    )
}

export default Hero;