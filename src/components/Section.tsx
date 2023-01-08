import { useTranslation } from 'react-i18next';
import Card from './Card';

function Section(props: { content: any, type: string }) {
    const {t} = useTranslation("global");
    const { content: { items }, type } = props;
    return <div className='section'>
        <h2>{t(`${type}.title`)}</h2>
        <div className={`content ${type}`}>
            {items.map((item: { key: string }, index: number) => {
                if(type==='education'){
                    if(index===0){
                        return <Card additionalClassName='first-child' type={type} i={index} key={item.key}/>
                    } else if(index===(items.length-1)){
                        return <Card additionalClassName='last-child' type={type} i={index} key={item.key}/>
                    } else {
                        return <Card additionalClassName='middle-child' type={type} i={index} key={item.key}/>
                    }
                }
                return <Card type={type} i={index} key={item.key}/>
            })}
        </div>
    </div>
}


export default Section;