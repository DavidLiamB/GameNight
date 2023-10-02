import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

class PlayerService {
  constructor() {
    console.log('service');
  }

  buttonPressed(name, num) {
    let playersButton = AppState.Players.find(player => player.name == name)
    // @ts-ignore
    playersButton.score += num
  }

  createPlayer(newPlayerData) {
    const newPlayer = new Player(newPlayerData.name, newPlayerData.face)
    AppState.Players.push(newPlayer)
  }
}

export const playerService = new PlayerService()