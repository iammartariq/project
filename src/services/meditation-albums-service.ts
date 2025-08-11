import { MEDITATION_ALBUMS, TRACKS, MUSICS, ALBUM } from '../graphql/queries';
import client from '../lib/apollo-client';

export const fetchMeditationAlbums = async (section, groupBy, page, limit) => {
  const authToken = localStorage.getItem('authToken');

  try {
    const response = await client.query({
      query: MEDITATION_ALBUMS,
      variables: {section, groupBy, page, limit},
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
      fetchPolicy: 'network-only',
    });

    return response.data.meditationAlbums;
  } catch (error) {
    return { errors: 'Failed to fetch meditation albums' };
  }
};

export const fetchAlbum = async (slug) => {
  const authToken = localStorage.getItem('authToken');

  try {
    const response = await client.query({
      query: ALBUM,
      variables: {slug},
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
      fetchPolicy: 'network-only',
    });

    return response.data.album;
  } catch (error) {
    return { errors: 'Failed to fetch album' };
  } 
};


export const fetchTracks = async (section, groupBy, page, limit) => {
  const authToken = localStorage.getItem('authToken');

  try {
    const response = await client.query({
      query: TRACKS,
      variables: {section, groupBy, page, limit},
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
      fetchPolicy: 'network-only',
    });

    return response.data.tracks;
  } catch (error) {
    return { errors: 'Failed to fetch tracks' };
  } 
}

export const fetchMusics = async (section, page, limit) => {
  const authToken = localStorage.getItem('authToken');

  try {
    const response = await client.query({
      query: MUSICS,
      variables: {section, page, limit},
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
      fetchPolicy: 'network-only',
    });

    return response.data.musics;
  } catch (error) {
    return { errors: 'Failed to fetch musics' };
  } 
}