

/**@param {{img?: string, author?: string}} data */
export class BackGround {
  constructor(data) {
    this.img = data.largeImgUrl
    this.author = data.author
  }
}