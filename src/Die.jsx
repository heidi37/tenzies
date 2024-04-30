import "./Die.css"

export default function Die(props) {
  return (
    <div onClick={props.holdDice} className={props.isHeld ? "die held" : "die"}>
      {props.value === 1 && <div class="middle-middle"></div>}
      {props.value === 2 && (
        <>
          <div class="top-left"></div>
          <div class="bottom-right"></div>
        </>
      )}
      {props.value === 3 && (
        <>
          <div class="top-left"></div>
          <div class="middle-middle"></div>
          <div class="bottom-right"></div>
        </>
      )}
      {props.value === 4 && (
        <>
          <div class="top-left"></div>
          <div class="top-right"></div>
          <div class="bottom-left"></div>
          <div class="bottom-right"></div>
        </>
      )}
      {props.value === 5 && (
        <>
          <div class="top-left"></div>
          <div class="top-right"></div>
          <div class="middle-middle"></div>
          <div class="bottom-left"></div>
          <div class="bottom-right"></div>
        </>
      )}
      {props.value === 6 && (
        <>
          <div class="top-left"></div>
          <div class="top-middle"></div>
          <div class="top-right"></div>
          <div class="bottom-left"></div>
          <div class="bottom-middle"></div>
          <div class="bottom-right"></div>
        </>
      )}
    </div>
  )
}
