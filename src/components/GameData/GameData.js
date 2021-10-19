import React, { Component } from 'react';
import GameListing from './GameListing';

// So, I placed games at the top to try and get the TS to accept the ES6 when code renders at bottom of GameData.js
export default class GameData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
        };
    }

    componentDidMount() {
        var axios = require("axios").default;
        var options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
            params: {tag: '3d.mmorpg.fantasy.pvp', platform: 'pc'},
            headers: {
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
              'x-rapidapi-key': ''
            }
          };
          
          axios.request(options).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        
        fetch(options)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    games: data.release_date
                })
            })
            .catch((error) => console.log(error));
    }

    renderItems() {
        return this.state.games.map((items) => (
            <GameListing key={items.id} items={items}/>
        ));
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
};
