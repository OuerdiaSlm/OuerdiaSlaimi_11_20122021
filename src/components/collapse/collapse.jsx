import React from "react"
import './collapse.css';
import arrow from '../../images/arrow.png'; 

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