import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";



function getTime() {
  let hour = new Date().getHours()
  let minutes = new Date().getMinutes()

  if (hour >= 12) {
    hour = hour - 12
    hour.toString()
    setText('time', (hour + ':' + minutes.toString().padStart(2, '0') + ' PM'))
  } else {
    setText('time', (hour + ':' + minutes + ' AM'))
  }

}


export class TimeController {
  constructor() {
    getTime()
    setInterval(getTime, 1000)
  }


}