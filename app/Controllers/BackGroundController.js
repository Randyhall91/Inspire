import { appState } from "../AppState.js";
import { backGroundService } from "../Services/BackGroundService.js";
import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";

function _drawBackGround() {
  let bg = appState.background
  // console.log('Draw: Background data at controller', appState.background);
  // @ts-ignore
  document.querySelector('body').style.backgroundImage = `url(${bg.img})`

  // @ts-ignore
  setText('author', bg.author)
}


export class BackGroundController {
  constructor() {
    this.getBackGround()
    // setTimeout(() => { _drawBackGround(); }, 350);
    appState.on('background', _drawBackGround)

  }


  async getBackGround() {
    try {
      await backGroundService.getBackGround()
    } catch (error) {
      console.error('[GetBackGround]', error);
      Pop.error(error)
    }
  }

}