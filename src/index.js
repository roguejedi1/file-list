import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image';
import Time from "./Time"
import FileIcon from "./FileIcon"
import FileName from "./FileName"
import CommitMessage from "./CommitMessage"

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
)

FileList.propTypes = {
  files: propTypes.array
}

const FileListItem = ({file}) => (
  <tr className="file-list-item" key={file.id}>
    <span><FileIcon file={file} /></span>
    <span><FileName file={file}/></span>
    <span><CommitMessage commit={file.latestCommit}/></span>
    <span className="age">
      <Time time={file.updated_at}/>
    </span>
  </tr>
)

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
}

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2022-09-09 21:21:21',
    latestCommit: {
      message: 'initial commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: '2022-09-09 21:21:21',
    latestCommit: {
      message: 'initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: '2022-09-09 21:21:21',
    latestCommit: {
      message: 'Add Readme'
    }
  }
]

ReactDOM.render(
  <FileList files={testFiles}/>,
  document.querySelector('#root')
)