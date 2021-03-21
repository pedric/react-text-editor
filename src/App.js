import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import EditorBlock from './EditorBlock';
import DisplayBlock from './DisplayBlock';

class App extends Component {

  constructor(){
    super()
    this.state = {
      textBlocks: []
    }
  }

  componentDidUpdate(){
    // console.log('update');
  }

  componentDidMount(){
    const firstBlock = {
      element: 'h1',
      content: '',
    }
    this.setState({ textBlocks: [...this.state.textBlocks, firstBlock ] });
  }

  upDateContent(index, contentValue){
    // console.log(
    //   'change handler in app', 
    //   this.state.textBlocks[index]
    // );
    let blocks = [...this.state.textBlocks];
    let block = {...blocks[index]};
    block.content = contentValue;
    blocks[index] = block;
    this.setState({ textBlocks: blocks });
  //   handleChange = (e) => {
  //     this.setState(prevState => ({
  //         items: {
  //             ...prevState.items,
  //             [prevState.items[1].name]: e.target.value,
  //         },
  //     }));
  // };
  
  }

  render(){
    const content = this.state.textBlocks.length > 0 
    ? this.state.textBlocks.map(block => `<${block.element}>${block.content}</${block.element}>`)
    : null ;

    // console.log(this.state.textBlocks);


    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} alt='react logo' />
          <h1>React text editor</h1>
        </header>
        <main className="layout">
          <section className="layout__block-50">
            {
              this.state.textBlocks.length 
              ? this.state.textBlocks.map( (block, index) => <EditorBlock key={index} index={index} onChangeHandler={this.upDateContent.bind(this)} elementType={block.element} content={block.content} />)
              : null
            }
          </section>
          <aside className="layout__block-50">
            {
              content != null && content.length > 0
              ? <DisplayBlock content={content} />
              : null
            }
          </aside>
        </main>
      </div>
    );
  }
}

export default App;
