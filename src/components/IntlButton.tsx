import { useTranslation } from 'react-i18next';     

function IntlButton(){
    const {i18n} = useTranslation("global");

    return (
        <div className="IntlButtonContainer section">
            <button className={`zoom IntlButton ${i18n.language === 'es'? 'selected': 'unselected'}`} onClick={()=>i18n.changeLanguage("es")}>
                <img className="flag" src="https://user-images.githubusercontent.com/55720621/211216205-470ca6ab-c298-4bd2-8523-80e66c64af03.png"/>
            </button>
            <button className={`zoom IntlButton ${i18n.language === 'en'? 'selected': 'unselected'}`} onClick={()=>i18n.changeLanguage("en")}>
                <img className="flag" src="https://user-images.githubusercontent.com/55720621/211216204-9296f695-1029-4c7d-bdbc-1ab93dbd2ef8.png"/>
            </button>
        </div>
    )
}

export default IntlButton;
