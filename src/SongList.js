import React, { Fragment } from 'react'

const SongList = (props) => {

    const sortedSongs = (songs, ascending) => {
        let songsOrdered = songs.sort((a, b) => (a.artist > b.artist) ? 1 : ((b.artist > a.artist) ? -1 : 0));
        if (!ascending) {
            songsOrdered.reverse();
        }
        return songsOrdered
    }

    return (
        <Fragment>
            {sortedSongs(props.songs, props.ascending).map(song => {
                return <tr key={song.name}>
                    <td>{song.name}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.rating}</td>
                </tr>
            })}
        </Fragment>
    )
}

export default SongList
