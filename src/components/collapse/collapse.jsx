import React from "react"
import './collapse.css';

export default class Collapse extends React.Component {
  render() {
    return (
      <div className="global-div-collapse">
        <details className="details" key={this.props.id}>
          <summary className="summary">
            {this.props.title}
            <i className="fas fa-chevron-down" id="chevron"></i>
          </summary>
          <p className="contents">{this.props.contents}</p>
        </details>            
      </div>
    )
  }
}