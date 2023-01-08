import { useTranslation } from 'react-i18next';     

function setSelectedClassName(actualLng: string, compare: string) {
    return actualLng.startsWith(compare)? 'selected' : 'unselected';
}

function IntlButton(){
    const {i18n} = useTranslation("global");
    return (
        <div className="IntlButtonContainer section">
            <button className={`zoom IntlButton ${setSelectedClassName(i18n.language, 'es')}`} onClick={()=>i18n.changeLanguage("es")}>
                <img
                    className="flag"
                    src="https://user-images.githubusercontent.com/55720621/211216205-470ca6ab-c298-4bd2-8523-80e66c64af03.png"
                    alt='argentina flag'
                    />
            </button>
            <button className={`zoom IntlButton ${setSelectedClassName(i18n.language, 'en')}`} onClick={()=>i18n.changeLanguage("en")}>
                <img
                className="flag"
                src="https://user-images.githubusercontent.com/55720621/211216204-9296f695-1029-4c7d-bdbc-1ab93dbd2ef8.png"
                alt='united kingdom flag'
                />
            </button>
        </div>
    )
}

export default IntlButton;
