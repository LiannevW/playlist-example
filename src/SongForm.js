import React, { Fragment } from 'react'

class SongForm extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            artist: '',
            genre: '',
            rating: ''
        }
    }

    render() {
        const onSubmit = e => {
            e.preventDefault();
            this.props.addSong(this.state)
            this.setState({
                name: '',
                artist: '',
                genre: '',
                rating: ''
            })

        }

        const handleChange = e => {
            const { name, value } = e.target
            this.setState({
                [name]: value
            })
        };

        return (
            <Fragment>
                <h1>SongForm</h1>
                <form onSubmit={onSubmit}>
                    <input
                        name="name"
                        onChange={handleChange}
                        placeholder="name"
                        value={this.state.name}
                    />
                    <br />
                    <input
                        name="artist"
                        onChange={handleChange}
                        placeholder="artist"
                        value={this.state.artist}
                    />
                    <br />
                    <select
                        name="genre"
                        onChange={handleChange}
                        value={this.state.genre}
                    >
                        <option value="">-- Please Choose a destination --</option>
                        <option value="pop">Pop</option>
                        <option value="jazz">Jazz</option>
                        <option value="rock and roll">Rock and roll</option>
                    </select>
                    <br />
                    <input
                        name="rating"
                        onChange={handleChange}
                        placeholder="rating"
                        value={this.state.rating}
                        type="number"
                    />
                    <br />
                    <button>Add song</button>
                </form>
            </Fragment>
        )
    }

}

export default SongForm
