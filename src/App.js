import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumPicker: [],
            albums:[],


        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(albumPicker => {
                this.setState({albumPicker})
                console.log(this.state.albumPicker)
            })
    }

    optionHandler(event) {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${event.target.value}`)
            .then(res => res.json())
            .then(albums => {
                this.setState({albums})
                console.log(albums)
            })
    }

    render() {
    return (
        <div className="App">
          <h1>Select an album:</h1>
            <select name="" id="" onChange={this.optionHandler.bind(this)}>
                <option value="">Choose Album...</option>
                {this.state.albumPicker.map(album =>{
                    return(
                        // *what would be the best practice for value ?
                    <option key={album.id} value={album.id}>{album.title}</option>
                    )
                })}
            </select>

            <div>
                {this.state.albums.map(album => {
                    return(
                        <img key={album.id} src={album.thumbnailUrl} alt={album.title}/>
                    )

                })}

            </div>
        </div>
    );
  }

}

export default App;


