import { useTranslation } from "react-i18next";

function Card(props: {
  additionalClassName?: string;
  type: string;
  i: number;
}) {
  const { t } = useTranslation("global");
  const { additionalClassName, type, i } = props;
  const className = additionalClassName
    ? `section-item ${additionalClassName}`
    : "section-item";

  const children = type === "work" && i === 0 && (
    <div className={"section-item-sub-child"}>
      <h4 style={{padding: 0, margin: "0.5em 0em"}}>
        <a className={"zoom"} href={t(`${type}.items.${i}.children.link`) as string}> {/* TODO: fix later */}
          {t(`${type}.items.${i}.children.title`)}
        </a>
      </h4>
      <p style={{padding: 0, margin: 0}}>{t(`${type}.items.${i}.children.detail`)}</p>
    </div>
  );

  return (
    <div className={`${className} grow-10`}>
      <div className={"section-item-child"}>
        <h3>{t(`${type}.items.${i}.title`)}</h3>
        <p>{t(`${type}.items.${i}.info`)}</p>
        <p>{t(`${type}.items.${i}.detail`)}</p>
        {children}
      </div>
    </div>
  );
}

export default Card;
