'use strict';

// Require our models. Running each module registers the model into sequelize
// do all of your relationships here
const User = require('./users');
//EXAMPLE
// const Playlist = require('./playlist');
// const Artist = require('./artist');
// const Album = require('./album');
// const Song = require('./song');
//
// // Form the associations
//
// Song.belongsTo(Album);
// Album.hasMany(Song);
// Album.belongsTo(Artist); // "Album Artist" is a thing, even if there are
//                          // other artists on the album.
// Artist.belongsToMany(Song, { through: 'artistSong' });
// Song.belongsToMany(Artist, { through: 'artistSong' });
//
// Song.belongsToMany(Playlist, { through: 'playlistSong' });
// Playlist.belongsToMany(Song, { through: 'playlistSong' });

// exported just in case, but can also be fetched via db.model('Album') etc.

module.exports = {
  User
};
