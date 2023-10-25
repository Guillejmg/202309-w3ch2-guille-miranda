import { Character } from "./character";

class Fighter extends Character{
  constructor(selector:string){
    super(selector);
    this.template='Fighter'
  }
}
