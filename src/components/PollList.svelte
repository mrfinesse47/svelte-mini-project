<script>
  import PollDetails from "./PollDetails.svelte";
  import PollStore from "../stores/PollStore";
  //import { onDestroy, onMount } from "svelte";

  //   export let polls = []; //the default

  //   const unSub = pollStore.subscribe((data) => {
  //     polls = data;
  //   });

  //   //   onMount(() => {
  //   //     //get data here usually
  //   //   });

  //   onDestroy(() => {
  //     console.log("comp destroyed");
  //     unSub(); //prevents memory leak
  //   });
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <!-- using the $ sign you need not sub/unsub -->
    <div>
      <PollDetails {poll} />
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
