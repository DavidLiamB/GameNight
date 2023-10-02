export class Player {
  constructor(name, face) {
    this.name = name
    this.face = face
    this.score = 0
  }

  get makePlayer() {
    return /*html*/`
    <div class="col-12 d-flex align-items-center justify-content-evenly">
          <div class="d-flex align-items-center">
            <img
              src="${this.face}"
              alt="${this.name}" class="">
            <p>${this.name}</p>
          </div>
          <div class="d-flex align-items-center">
            <button onclick="app.PlayerController.buttonPressed('${this.name}', -1)" class="btn" type="button">-</button>
            <p>${this.score}</p>
            <button onclick="app.PlayerController.buttonPressed('${this.name}', 1)" class="btn" type="button">+</button>
          </div>
        </div>
        `
  }
}