import React from 'react'
import SongList from './SongList'
import SongForm from './SongForm'

class SongOverview extends React.Component {

    constructor() {
        super()
        this.state =
        {
            sort: {
                ascending: true
            },
            songs: [{
                name: 'd',
                artist: 'd',
                genre: 'd',
                rating: '2'
            }, {
                name: 'e',
                artist: 'e',
                genre: 'e',
                rating: '4'
            }, {
                name: 'a',
                artist: 'a',
                genre: 'a',
                rating: '4'
            }, {
                name: 'b',
                artist: 'b',
                genre: 'b',
                rating: '4'
            }, {
                name: 'c',
                artist: 'c',
                genre: 'c',
                rating: '4'
            }]
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


    sortBy = e => {
        this.setState({
            songs: this.state.songs,
            sort: {
                ascending: !this.state.sort.ascending
            }
        });
    }

    render() {
        return (
            <div>
                <SongForm addSong={this.addSong} />
                <div>
                    <table>
                        <tbody>
                            <tr className="song-header">
                                <th className="song-row__item" onClick={this.sortBy}>Song</th>
                                <th className="song-row__item">Artist</th>
                                <th className="song-row__item">Genre</th>
                                <th className="song-row__item">Rating</th>
                            </tr>
                            <SongList songs={this.state.songs} ascending={this.state.sort.ascending} />
                        </tbody>
                    </table>

                </div>

            </div>
        );
    }
}

export default SongOverview;
