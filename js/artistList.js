document.addEventListener('alpine:init', () => {
  Alpine.data('artistList', () => ({
    artists: [],
    async init() {
      const pb = new PocketBase('https://tapedrop.pockethost.io');

      try {
        const records = await pb.collection('artist').getFullList({
          expand: 'label',
          sort: 'name',
        });
        this.artists = records;
      } catch (err) {
        console.error('Error loading artists:', err);
      }
    },
  }));
});
