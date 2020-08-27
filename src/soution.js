import React, {Component} from 'react';

const url = "https://jsonplaceholder.typicode.com/posts"

const options = {
  method: "GET"
}

class App extends Component {

  state = { 
    result: []
   }

   componentDidMount = async() => {
    let data = await fetch(url,options)
    let result = await data.json()
    this.setState((prevState, props)=>({result}))
  }
  
  render() { 
    return ( 
      <div>
        {this.state.result.map((post, key)=>(
        <ul key={key}>
          <li>{post.title}</li>
        </ul>
        ))}
      </div>
     );
  }
}
 

export default App;
