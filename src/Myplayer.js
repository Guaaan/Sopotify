import { Component, createRef, useRef, useState } from "react";

class MyPlayerClass extends Component {

    constructor() {
        super();

        this.state = {
            songs: [
                { "id": 1, "category": "game", "name": "Mario Castle", "url": "files/mario/songs/castle.mp3" },
                { "id": 2, "category": "game", "name": "Mario Star", "url": "files/mario/songs/hurry-starman.mp3" },
                { "id": 3, "category": "game", "name": "Mario Overworld", "url": "files/mario/songs/overworld.mp3" },
                { "id": 4, "category": "game", "name": "Mario stage 1", "url": "files/mario/songs/stage1.mp3" },
                { "id": 5, "category": "game", "name": "Mario stage 2", "url": "files/mario/songs/stage2.mp3" },
                { "id": 6, "category": "game", "name": "Zelda Castle", "url": "files/mario/songs/zeldacastle.mp3" },
                { "id": 7, "category": "game", "name": "Zelda outworld", "url": "files/mario/songs/zeldaoutworld.mp3" },
            ],
            selectedSong: null,
            playing: false,
        }
        this.player = createRef(null);
    }

    componentDidMount(){
        console.log("mounted component...");
        this.selectSong(0);
    }

    componentWillUnmount(){
        console.log("unmounted component...");
    }

    componentDidUpdate(){
        console.log("updated component...");
    }

    selectSong = (index) => { // Seleccionar una cacion
        //console.log("Seleccionando cancion: " + index);
        const song = this.state.songs[index];
        this.player.src = `https://assets.breatheco.de/apis/sound/${song.url}`;
        this.setState({
            selectedSong: index
        });
    }

    playSong = () => {
        this.player.play();
        this.setState({
            playing: !this.state.playing
        });
    }

    puaseSong = () => {
        this.player.pause();
        this.setState({
            playing: !this.state.playing
        });
    }

    nextSong = () => {
        //selectSong(selectedSong === null ? 0 : selectedSong + 1);
        this.selectSong(this.state.selectedSong + 1);
        this.playSong();
        this.setState({
            playing: true
        });
    }

    prevSong = () => {
        this.selectSong(this.state.selectedSong - 1);
        this.playSong();
        this.setState({
            playing: true
        });
    }

    render() {
        return (
            <>
               <div className="container">
                <h1>Spotify</h1>
                <ul className="list-group">
                    {
                        this.state.songs.map((song, index) => {
                            return (
                                <li key={index} className={"list-group-item" + (this.state.selectedSong === index ? " active" : "")} onClick={() => this.selectSong(index)}>
                                    {song.name}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="botones">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" onClick={this.prevSong}>
                            <i className="fas fa-backward"></i>
                        </button>
                        <button type="button" className={"btn btn-secondary" + (this.state.playing === true ? " d-none" : " d-block")} onClick={this.playSong}>
                            <i className="fas fa-play"></i>
                        </button>
                        <button type="button" className={"btn btn-secondary" + (this.state.playing === false ? " d-none" : " d-block")} onClick={this.puaseSong}>
                            <i className="fas fa-pause"></i>
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={this.nextSong}>
                            <i className="fas fa-forward"></i>
                        </button>
                </div>
                </div>

                <audio ref={(t) => this.player = t} src=""></audio>
                </div>
            </>
        )
    }
}

export default MyPlayerClass;