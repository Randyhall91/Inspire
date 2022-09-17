


export class Quote {
  constructor(data) {
    this.author = data.author
    this.content = data.content
  }


  get QuoteTemplate() {
    return/*html*/`
    <h4>${this.content}</h4>
          <p class="on-hover">-${this.author}</p>
    `
  }

}