import React, { Fragment } from 'react'

const SongList = ({ songs, sort }) => {

    const sortedSongs = (songs, sort) => {
        const { column, ascending } = sort
        let songsOrdered = songs.sort((a, b) => (a[column] > b[column]) ? 1 : ((b[column] > a[column]) ? -1 : 0));
        if (!ascending) {
            songsOrdered.reverse();
        }
        return songsOrdered
    }

    return (
        < Fragment >
            {sortedSongs(songs, sort).map(song => {
                return <tr key={song.name}>
                    <td>{song.name}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.rating}</td>
                </tr>
            })}
        </Fragment >
    )
}

export default SongList
