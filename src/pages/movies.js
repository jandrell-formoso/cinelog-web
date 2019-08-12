import React, { useEffect } from "react"
import Core from "@cinelog/core"

const MovieList = () => {
  useEffect(() => {
    Core.init({
      host: "https://api.themoviedb.org",
      env: "development",
      config: {
        apiVersion: "3",
      },
    })
  }, [])
  return (
    <div>
      <h1>Movie List</h1>
      <h3>Link:</h3>
    </div>
  )
}

export default MovieList
