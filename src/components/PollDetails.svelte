<script>
  export let poll;
  import Card from "../shared/Card.svelte";
  import PollStore from "../stores/PollStore";
  import Button from "../shared/Button.svelte";
  import { tweened } from "svelte/motion";
  // import { createEventDispatcher } from "svelte";
  // const dispatch = createEventDispatcher();
  //reactive  values
  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 / totalVotes) * poll.votesA) || 0;
  $: percentB = Math.floor((100 / totalVotes) * poll.votesB) || 0;

  //tweened %

  const tweenedA = tweened(0);
  const tweenedB = tweened(0);

  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  $: console.log($tweenedA);
  //tweened works like a store so you dont need to subscribe but you can use the $ sign shortcut

  //handling vote
  const handleVote = (option, id) => {
    //dispatch("vote", { option, id });

    PollStore.update((currentPolls) => {
      let copiedPolls = [...currentPolls];
      let upvotedPollIndex = copiedPolls.findIndex((poll) => poll.id === id);

      copiedPolls[upvotedPollIndex][`votes${option}`]++;

      return copiedPolls;
    });
  };

  const handleDelete = (id) => {
    console.log("deleting");
    PollStore.update((currentPolls) => {
      let copiedPolls = [...currentPolls];
      return copiedPolls.filter((poll) => poll.id !== id);
    });
  };
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total Votes: {totalVotes}</p>
    <div
      class="answer"
      on:click={() => {
        handleVote("A", poll.id);
      }}
    >
      <div class="percent percent-a" style="width:{$tweenedA}%" />
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div
      class="answer"
      on:click={() => {
        handleVote("B", poll.id);
      }}
    >
      <div class="percent percent-b" style="width:{$tweenedB}%" />
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
    <div class="delete">
      <!-- <Button
        on:click={() => {
          console.log("hi");
          //handleDelete(poll.id);
        }}
        >Delete
      </Button> -->

      <Button
        on:click={() => {
          handleDelete(poll.id);
        }}>Delete</Button
      >
    </div>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a {
    border-left: 4px solid rgba(217, 27, 66, 0.2);
    background: rgba(217, 27, 66, 0.2);
  }
  .percent-b {
    border-left: 4px solid rgba(69, 196, 150, 0.2);
    background: rgba(69, 196, 150, 0.2);
  }
  .delete {
    margin-top: 30px;
    text-align: center;
  }
</style>
