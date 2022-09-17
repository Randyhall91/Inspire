import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { SandboxServer } from "./AxiosService.js"




class QuoteService {
  async getQuote() {
    const res = await SandboxServer.get('api/quotes')
    // console.log(res.data);
    appState.quote = new Quote(res.data)
  }




}

export const quoteService = new QuoteService()