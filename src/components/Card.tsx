function Card(props: {item: any, additionalClassName?: string}) {
    const { item, additionalClassName } = props;
    const className = additionalClassName? `section-item ${additionalClassName}` : 'section-item';
    return (
        <div className={className}>
            <h3>{item.title}</h3>
            <p>{item.info}</p>
            <p>{item.detail}</p>
        </div>
    )
}

export default Card;
