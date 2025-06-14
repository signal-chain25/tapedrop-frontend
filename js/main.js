console.log("main.js loaded");

const pb = new window.PocketBase("https://tapedrop.pockethost.io");

document.addEventListener('alpine:init', () => {
  Alpine.data('artistList', () => ({
    artists: [],
    async init() {
      try {
        const records = await pb.collection('artist').getFullList({
          expand: 'label',
          sort: 'name',
        });
        this.artists = records;
      } catch (error) {
        console.error("Failed to load artists:", error);
      }
    }
  }));
});
