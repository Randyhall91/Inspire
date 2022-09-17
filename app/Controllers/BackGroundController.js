import { appState } from "../AppState.js";
import { backGroundService } from "../Services/BackGroundService.js";
import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";

function _drawBackGround() {
  let bg = appState.background
  console.log('Draw: Background data pulled from appstate', appState.background);

  // document.querySelector('body').style.backgroundImage = `url(${bg.img})`

  // setText('author', bg.author)
}


export class BackGroundController {
  constructor() {
    this.getBackGround()
    appState.on('background', _drawBackGround())

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