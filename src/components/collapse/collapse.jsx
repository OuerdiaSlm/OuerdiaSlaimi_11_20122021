import React from "react"
import './collapse.css';

export default class Collapse extends React.Component {
  constructor(props) {
    super(props)
  }

 

  render() {
    return (
      <div className="global-div-collapse">
        {/* <img src={aboutIMG} className="about-banner"/> */}
        <details className="details" key={this.props.id} onClick={this.openCollapse}>
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