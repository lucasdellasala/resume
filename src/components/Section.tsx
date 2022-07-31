import Card from './Card';

function Section(props: { content: any, type: string }) {
    const { content: { title, items }, type } = props;
    return <div className='section'>
        <h2>{title}</h2>
        <div className={`content ${type}`}>
            {items.map((item: any, index: number) => {

                if(type==='education'){
                    if(index===0){
                        return <Card item={item} additionalClassName='first-child'/>
                    } else if(index===(items.length-1)){
                        return <Card item={item} additionalClassName='last-child'/>
                    } else {
                        return <Card item={item} additionalClassName='middle-child'/>
                    }
                }
                return <Card item={item}/>
            })}
        </div>
    </div>
}


export default Section;