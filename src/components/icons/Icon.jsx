/*
example
<Icon icon="fas fa-iconname" />
*/
import {DefaultColor} from '../config';
export function Icon({
    ...props
  }) {
    return (
      <i  htmlFor={props.for} className={props.icon+" label"} style={{fontSize:(props.fontSize?props.fontSize:20),color:(props.color?(props.active?props.activeColor:props.color):(props.active?"#2F9FDE":DefaultColor))}}></i>
    );
  }