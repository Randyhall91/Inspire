import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";



function getTime() {
  let hours = new Date().getHours()
  let minutes = new Date().getMinutes()

  let min = ''
  console.log(minutes);

  if (minutes < 10) {
    min = ('0' + minutes)
  }

  if (hours >= 12) {
    let pm = hours - 12
    setText('time', (pm + ':' + minutes + 'PM'))
  }

}


export class TimeController {
  constructor() {
    getTime()


  }


}