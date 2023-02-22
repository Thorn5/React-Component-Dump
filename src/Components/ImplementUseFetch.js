import React from 'react'
import useFetch from "./useFetch"

const ImplementUseFetch = () => {
    const url = ("https://cdn.contentful.com/spaces/75958qusqnzq/environments/master/entries"+process.env.REACT_APP_API_ACCESS_TOKEN)

    console.log(process.env.API_ACCESS_TOKEN);
    // console.log(url);

    const {data, loading, error} = useFetch(url)

  return (
    <div>ImplementUseFetch</div>
  )
}

export default ImplementUseFetch
