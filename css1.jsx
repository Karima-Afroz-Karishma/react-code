import { useState } from "react";

function Card() {

    const[cardStyle ,setCardstyle]=useState(
    {
       width: "200px",
       border: "1px solid #c1b5b5",
       margin:"20px",
       boxShadow: "1px 2px 3px 0px #e1bfbf"

    }
    );
    const[textColor,settextcolor]= useState('black')

    const updatetheme =(bgColor,textColor)=>{
        setCardstyle({...cardStyle, backgroundColor:bgColor,text:textColor})
        settextcolor(textColor)
       


    }

  return (
    <div>
      <h1 style={{ color: "red", padding: "50px" }}>Inline Style react js</h1>
      <button onClick={()=>updatetheme('gray','green')}>Gray Theme</button>
      <button onClick={()=>updatetheme('white','black')}>Default Theme</button>
      <div style={cardStyle}>
        <img
          src="data:image/jpeg;base64,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"
          alt="a boy"
          width="200"
          height="200"
        />

        <div style={{color:textColor}}>
          <h1>Anil Patel</h1>
          <p>Software DEveloper</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
