import React from "react";
// console.log(references);
const ReferText = ({ num, title, descBasic, descApple, descVer, descStar, definition }) => {
  return (
    <li>
      <span>{num}</span>
      <span>{title}</span>
      <span>{descBasic}</span>
      <span>{descApple}</span>
      <span>{descVer}</span>
      <span>{descStar}</span>
      <span>{definition}</span>
    </li>
  );
};

const ReferCont = ({ references }) => {
  return (
    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {references.map((refer, idx) => (
              <ReferText
                key={idx}
                num={refer.num}
                title={refer.title}
                descBasic={refer.descBasic}
                descApple={refer.descApple}
                descVer={refer.descVer}
                descStar={refer.descStar}
                definition={refer.definition}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ReferCont;
