import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      result: []
     }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=> res.json())
    .then(result=>{
      this.setState({
        result
      })
    })
  }
  
  render() { 
    return ( 
      <div>
        {this.state.result.map(post=><div>
          <h1>{post.title}</h1>
          </div>
        )}
      </div>
     );
  }
}
 

export default App;
