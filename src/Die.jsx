import "./Die.css"

export default function Die(props) {
  return (
    <div onClick={props.holdDice} className={props.isHeld ? "die held" : "die"}>
      {props.value === 1 && <div className="middle-middle"></div>}
      {props.value === 2 && (
        <>
          <div className="top-left"></div>
          <div className="bottom-right"></div>
        </>
      )}
      {props.value === 3 && (
        <>
          <div className="top-left"></div>
          <div className="middle-middle"></div>
          <div className="bottom-right"></div>
        </>
      )}
      {props.value === 4 && (
        <>
          <div className="top-left"></div>
          <div className="top-right"></div>
          <div className="bottom-left"></div>
          <div className="bottom-right"></div>
        </>
      )}
      {props.value === 5 && (
        <>
          <div className="top-left"></div>
          <div className="top-right"></div>
          <div className="middle-middle"></div>
          <div className="bottom-left"></div>
          <div className="bottom-right"></div>
        </>
      )}
      {props.value === 6 && (
        <>
          <div className="top-left"></div>
          <div className="top-middle"></div>
          <div className="top-right"></div>
          <div className="bottom-left"></div>
          <div className="bottom-middle"></div>
          <div className="bottom-right"></div>
        </>
      )}
    </div>
  )
}
