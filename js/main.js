const pb = new PocketBase("https://tapedrop.pockethost.io");

const artistList = {
  artists: [],
  async init() {
    const records = await pb.collection('artist').getFullList({
      expand: 'label',
      sort: 'name',
    });
    this.artists = records;
  }
};
