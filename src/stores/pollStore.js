import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "python or JS",
    answerA: "js",
    answerB: "python",
    votesA: 9,
    votesB: 15,
  },
  {
    id: 2,
    question: "Favorite Pet",
    answerA: "KFC",
    answerB: "Mcdonalds",
    votesA: 11,
    votesB: 15,
  },
]);

export default PollStore;
