document.addEventListener('alpine:init', () => {
  Alpine.data('artistList', () => {
    const pb = new window.PocketBase('https://tapedrop.pockethost.io');

    return {
      artists: [],
      async init() {
        try {
          const records = await pb.collection('artist').getFullList({
            expand: 'label',
            sort: 'name',
          });
          this.artists = records;
        } catch (err) {
          console.error('Failed to fetch artists:', err);
        }
      }
    };
  });
});
