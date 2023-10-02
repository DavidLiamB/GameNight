import { playerService } from "../services/PlayerService.js";
import { setHTML } from "../utils/Writer.js";
import { AppState } from "../AppState.js";
import { getFormData } from "../utils/FormHandler.js";

function _drawPlayers() {
  let content = ''
  AppState.Players.forEach(player => {
    content += player.makePlayer
  })
  setHTML('players', content)
}
export class PlayerController {
  constructor() {
    console.log("sup lossser");
    _drawPlayers()
  }

  buttonPressed(name, num) {
    playerService.buttonPressed(name, num)
    _drawPlayers()
  }

  createPlayer(event) {
    event.preventDefault()
    const form = event.target
    const newPlayer = getFormData(form)
    playerService.createPlayer(newPlayer)
    _drawPlayers()
  }
}