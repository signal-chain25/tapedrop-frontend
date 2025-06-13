const pb = new PocketBase("https://tapedrop.pockethost.io");

const artistList = {
  artists: [],
  async init() {
    const records = await pb.collection('artists').getFullList({
      expand: 'label',
      sort: 'name',
    });
    this.artists = records;
  }
};
