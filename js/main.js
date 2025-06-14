document.addEventListener('alpine:init', () => {
  const pb = new PocketBase('https://tapedrop.pockethost.io');

  Alpine.data('artistList', () => ({
    artists: [],
    async init() {
      try {
        const records = await pb.collection('artist').getFullList({
          expand: 'label',
          sort: 'name'
        });
        this.artists = records;
      } catch (e) {
        console.error('PocketBase fetch failed:', e);
      }
    }
  }));
});
