import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    async onSearchSubmit(term) {
        const userResponse = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID paonAu4H4KeeY_qKsyTn4Js_M9C8w-kqBZXfyraLrdk' 
            }
        });

        console.log(userResponse.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onUserInput={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;