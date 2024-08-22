import { makeAutoObservable } from "mobx";
import { question } from "./types";

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  gameIsStarted: boolean = false;
  questionsObj: question[] = [];
  currentquestionId: number = 0;

  start() {
    this.gameIsStarted = true;
  }
  setQuestionsObj(data: question[]) {
    this.questionsObj = data;
  }
  nextQuestion() {
    this.currentquestionId++;
  }

  get currentQuestion() {
    return (
      this.questionsObj[this.currentquestionId]?.question ?? [
        "Вопросов больше нет.",
        "Спасибо за внимание.",
      ]
    );
  }

  get currentAnswers() {
    return this.questionsObj[this.currentquestionId]?.answers ?? [];
  }
}
export const store = new Store();
