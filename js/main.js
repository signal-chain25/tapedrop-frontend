const pb = new PocketBase("https://tapedrop.pockethost.io");

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
      } catch (e) {
        console.error("Failed to load artists:", e);
      }
    }
  }));
});
