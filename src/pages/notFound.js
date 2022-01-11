import React from "react"
import Error from "../components/error/error";

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