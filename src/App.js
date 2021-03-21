import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import EditorBlock from './EditorBlock';
import DisplayBlock from './DisplayBlock';
import DropZone from './DropZone';
import AddNewBlock from './AddNewBlock';

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
    let blocks = [...this.state.textBlocks];
    let block = {...blocks[index]};
    block.content = contentValue;
    blocks[index] = block;
    this.setState({ textBlocks: blocks });
  }

  updateElement(index, el){
    let blocks = [...this.state.textBlocks];
    let block = {...blocks[index]};
    block.element = el;
    blocks[index] = block;
    this.setState({ textBlocks: blocks });
  }

  addNewBlock(){
    console.log('add new block');
    const newBlock = {
      element: 'p',
      content: '',
    }
    this.setState({ textBlocks: [...this.state.textBlocks, newBlock ] });
  }

  deleteBlock(index){
console.log('splica detta index', index)
    const blocks = [...this.state.textBlocks];
    blocks.splice(index,1);
    this.setState({textBlocks: blocks});
  }

  render(){
    // const content = this.state.textBlocks.length > 0 
    // ? this.state.textBlocks.map(block => `<${block.element}>${block.content}</${block.element}>`)
    // : null 


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
              ? this.state.textBlocks.map( 
                (block, index) => 
                <>
                <div key={`textblock_${index}`}>
                  <EditorBlock 
                    index={index} 
                    onChangeHandler={this.upDateContent.bind(this)}
                    deleteHandler={this.deleteBlock.bind(this)}
                    elementType={block.element} 
                    content={block.content}
                    updateElement={this.updateElement.bind(this)}
                  />
                </div>
                  <DropZone index={index} />
                </>
                )
              : null
            }
            <AddNewBlock handleClick={this.addNewBlock.bind(this)} />
          </section>
          <aside className="layout__block-50">
            
              <DisplayBlock blocks={this.state.textBlocks} />
            
          </aside>
        </main>
      </div>
    );
  }
}

export default App;
