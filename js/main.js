// Load PocketBase directly via IIFE
(async () => {
  const script = document.createElement("script");
  script.src = "https://unpkg.com/pocketbase@0.18.4/dist/pocketbase.umd.js";
  script.onload = init;
  document.head.appendChild(script);

  function init() {
    const pb = new PocketBase("https://tapedrop.pockethost.io");

    window.artistList = {
      artists: [],
      async init() {
        const records = await pb.collection('artists').getFullList({
          expand: 'label',
          sort: 'name',
        });
        this.artists = records;
      }
    };
  }
})();
