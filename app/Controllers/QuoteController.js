import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { quoteService } from "../Services/QuoteService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawQuote() {
  // @ts-ignore
  setHTML('quote', appState.quote.QuoteTemplate)
}


export class QuoteController {
  constructor() {
    this.getQuote()
    appState.on('quote', _drawQuote)
  }


  async getQuote() {
    try {
      await quoteService.getQuote()
    } catch (error) {
      console.error('[GetQuote]', error);
      Pop.error(error)
    }
  }

}