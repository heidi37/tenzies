import './Die.css'

export default function Die(props) {
  return (
    <div onClick={props.holdDice} className={props.isHeld ? "die held" : "die"}><h2>{props.value}</h2></div>
  )
}
