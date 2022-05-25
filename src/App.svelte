<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  //tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail.item;
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabchange={tabChange} />
  {#if activeItem === "Current Polls"}
    <p>poll list comp goes here</p>
  {:else if activeItem === "Add New Poll"}
    <p>add new poll comp goes here</p>{/if}
</main>
<Footer />

<style>
  main {
    max-width: 60rem;
    margin: 2.5rem auto;
  }
</style>
