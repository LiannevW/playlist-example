import React from 'react'
import SongList from './SongList'
import SongForm from './SongForm'

class SongOverview extends React.Component {

    constructor() {
        super()
        this.state =
        {
            sort: {
                ascending: true,
                column: 'name'
            },
            songs: [{
                name: 'd',
                artist: 'a',
                genre: 'd',
                rating: '2'
            }, {
                name: 'e',
                artist: 'b',
                genre: 'e',
                rating: '4'
            }, {
                name: 'a',
                artist: 'c',
                genre: 'a',
                rating: '4'
            }, {
                name: 'b',
                artist: 'd',
                genre: 'b',
                rating: '4'
            }, {
                name: 'c',
                artist: 'e',
                genre: 'c',
                rating: '4'
            }]
        }
    }

    render() {
        const addSong = (song) => {
            this.setState((prevState) => {
                const updatedSongs = prevState.songs.concat(song)
                return {
                    songs: updatedSongs
                }
            })
        }


        const sortBy = (type) => {
            this.setState({
                songs: this.state.songs,
                sort: {
                    ascending: !this.state.sort.ascending,
                    column: type
                }
            });
        }

        return (
            <div>
                <SongForm addSong={addSong} />
                <div>
                    <table>
                        <tbody>
                            <tr className="song-header">
                                <th className="song-row__item" onClick={() => sortBy('name')}>name</th>
                                <th className="song-row__item" onClick={() => sortBy('artist')}>artist</th>
                                <th className="song-row__item">Genre</th>
                                <th className="song-row__item">Rating</th>
                            </tr>
                            <SongList songs={this.state.songs} sort={this.state.sort} />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default SongOverview;
