import './scss/core.scss';
import React, { Component } from 'react';

function App() {
  return (
    <div className="App-background">
      <h1 className="Title">Title</h1>
      <div 
        className="component-bg" 
        draggable
        onDragStart={this.handleDragStart}
        onDrag={this.handleDrag}
        onDragEnd={this.handleDragEnd}
        >
          Content
      </div>
    </div>
  );
}

export default App;
