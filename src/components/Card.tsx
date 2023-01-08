import { useTranslation } from 'react-i18next';

function Card(props: { additionalClassName?: string, type: string, i: number }) {
    const {t} = useTranslation("global");
    const { additionalClassName, type, i } = props;
    const className = additionalClassName ? `section-item ${additionalClassName}` : 'section-item';
    return (
        <div className={`${className} grow-10`}>
            <div className={'section-item-child'}>
                <h3>{t(`${type}.items.${i}.title`)}</h3>
                <p>{t(`${type}.items.${i}.info`)}</p>
                <p>{t(`${type}.items.${i}.detail`)}</p>
            </div>
        </div>
    )
}

export default Card;
