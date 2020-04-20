import React from 'react'
import SongList from './SongList'
import SongForm from './SongForm'

class SongOverview extends React.Component {

    constructor() {
        super()
        this.state =
        {
            songs: []
        }

    }

    addSong = (song) => {
        this.setState((prevState) => {
            const updatedSongs = prevState.songs.concat(song)
            return {
                songs: updatedSongs
            }
        })
    }

    render() {
        return (
            <div>
                <SongForm addSong={this.addSong} />
                <SongList songs={this.state.songs} />
            </div>
        );
    }
}

export default SongOverview;
