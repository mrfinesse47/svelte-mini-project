<script>
  import PollDetails from "./PollDetails.svelte";
  export let polls = []; //the default
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <div>
      <PollDetails {poll} on:vote />
      if you dont assign a handler its forwarded to the parent
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
