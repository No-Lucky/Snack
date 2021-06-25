import "./style/style.less"
import GameController from "./modules/GameController";

const gameController = new GameController();
gameController.init();
gameController.start();
