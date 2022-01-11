import React from "react"
import Error from "../components/error/error";
import Header from "../components/header/header";



class NotFound extends React.Component{
  render() {
    return (
        <section className="all-components-without-footer">
          <Error/>
        </section>
    )
  }
}
export default NotFound;