import React, { Component } from 'react'
import { EditorState } from 'draft-js'
import { EditorContainer, Editor } from '@djsp/core'
import InsertBlock from './InsertBlock'

export default class App extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onChange = editorState => this.setState({ editorState })

  render() {
    return (
      <div>
        <EditorContainer
          editorState={this.state.editorState}
          onChange={this.onChange}>
          <InsertBlock onChange={this.onChange} />
          <Editor />
        </EditorContainer>
      </div>
    )
  }
}
