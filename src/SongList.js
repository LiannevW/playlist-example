import React from 'react'

const SongList = (props) => {
    const renderTableRow = () => {
        return props.songs.map(song => {
            return <tr key={song.name}>
                <td>{song.name}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                <td>{song.rating}</td>
            </tr>
        })
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr className="song-header">
                        <th className="song-row__item">Song</th>
                        <th className="song-row__item">Artist</th>
                        <th className="song-row__item">Genre</th>
                        <th className="song-row__item">Rating</th>
                    </tr>
                    {renderTableRow()}
                </tbody>
            </table>

        </div>
    )
}

export default SongList
