<script>
  export let poll;
  import Card from "../shared/Card.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  //reactive  values
  $: totalVotes = poll.votesA + poll.votesB;
  //handling vote
  const handleVote = (option, id) => {
    dispatch("vote", { option, id });
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
      <div class="percent percent-a" />
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div
      class="answer"
      on:click={() => {
        handleVote("B", poll.id);
      }}
    >
      <div class="percent percent-b" />
      <span>{poll.answerB} ({poll.votesB})</span>
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
</style>
