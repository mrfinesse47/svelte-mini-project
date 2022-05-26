<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PollList from "./components/PollList.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Tabs from "./shared/Tabs.svelte";
  //tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail.item;
  };
  let polls = [
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
  ];

  $: console.log("renders");

  const handleAdd = (e) => {
    const poll = e.detail;
    polls = [poll, ...polls];
    activeItem = "Current Polls";
  };

  const handleVote = ({ detail }) => {
    const { id, option } = detail;
    let copiedPolls = [...polls];
    let upvotedPollIndex = copiedPolls.findIndex((poll) => poll.id === id);

    copiedPolls[upvotedPollIndex][`votes${option}`]++;
    polls = copiedPolls;
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabchange={tabChange} />
  {#if activeItem === "Current Polls"}
    <PollList {polls} on:vote={handleVote} />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 60rem;
    margin: 2.5rem auto;
  }
</style>
