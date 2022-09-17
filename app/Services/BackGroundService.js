import { appState } from "../AppState.js";
import { BackGround } from "../Models/BackGround.js";
import { SandboxServer } from "./AxiosService.js"



class BackGroundService {
  async getBackGround() {
    const res = await SandboxServer.get('api/images')
    // console.log('Get results', res.data);

    appState.background = new BackGround(res.data)
    console.log('Appstate.background after model formating', appState.background);
  }


}
export const backGroundService = new BackGroundService()