import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumPicker: []

        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(albumPicker => {
                this.setState({albumPicker})
            })
    }

    render() {
    return (
        <div className="App">
          <h1>Select an album:</h1>
            <select name="" id="">
                {this.state.albumPicker.map(album =>{
                    return(
                    <option key={album.id} value="album.id">{album.title}</option>
                    )
                })}


            </select>
        </div>
    );
  }

}

export default App;


