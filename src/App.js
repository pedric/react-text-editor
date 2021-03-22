import React, { Component } from 'react';
import _ from 'lodash';
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

  componentDidMount(){
    const firstBlock = {
      element: 'h1',
      content: '',
    }
    this.setState({ textBlocks: [...this.state.textBlocks, firstBlock ] });
  }

  upDateContent(index, contentValue){
    contentValue = contentValue.replace(/\n/g, '<br/>');
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
    const newBlock = {
      element: 'div',
      content: '',
    }
    this.setState({ textBlocks: [...this.state.textBlocks, newBlock ] });
  }

  deleteBlock(index){
    const blocks = [...this.state.textBlocks];
    blocks.splice(index,1);
    this.setState({textBlocks: blocks});
  }

  handleDrop = (e) => {
    e.preventDefault();
    let blocks = _.cloneDeep( this.state.textBlocks );
    let elementToMove = blocks[e.dataTransfer.getData('index')];
    blocks.splice(e.dataTransfer.getData('index'),1);
    blocks.splice(e.target.getAttribute('data-index'),0,elementToMove);
    this.setState({ textBlocks: blocks });
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} alt='react logo' />
          <h1>React text editor</h1>
        </header>
        <main className="layout">
          <section className="layout__block-50">
            {
              this.state.textBlocks.length >= 0 
              ? this.state.textBlocks.map( 
                (block, index) => 
                <React.Fragment key={`fragment_${index}`}>
                <div>
                  <EditorBlock
                    index={index} 
                    onChangeHandler={this.upDateContent.bind(this)}
                    deleteHandler={this.deleteBlock.bind(this)}
                    elementType={block.element} 
                    content={block.content}
                    updateElement={this.updateElement.bind(this)}
                  />
                </div>
                  <DropZone handleDrop={this.handleDrop.bind(this)} index={index} />
                </React.Fragment>
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
