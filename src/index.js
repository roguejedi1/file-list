import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image';
import Time from "./Time"

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
    <td><FileIcon file={file} /></td>
    <td><FileName file={file}/></td>
    <td><CommitMessage commit={file.latestCommit}/></td>
    <td className="age">
      <Time time={file.updated_at}/>
    </td>
  </tr>
)

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
}

function FileIcon({file}){
  let icon = 'fa-file-text-o'

  if(file.type === 'folder'){
    icon = 'fa-folder'
  }

  return (
    <td className="file-icon">
      <i className={`fa ${icon}`}/>
    </td>
  )
}

FileIcon.propTypes = {
  icon: PropTypes.object.isRequired
}

function FileName({file}){
  return (
    <>
      <td className="file-name">{file.name}</td>
    </>
  )
}

FileName.propTypes = {
  file: PropTypes.object.isRequired
}

const CommitMessage = ({commit}) => {
  return (
    <td className="commit-message">
      {commit.message}
    </td>
  )
}

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
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