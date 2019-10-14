import React from 'react'

const PostcodeSearch = ({ postcodeChange, postcodeSearch, postcode, latitude, longitude }) => {
  return (
    <form onSubmit={postcodeSearch} >
      <label htmlFor="postcodeInput">Postcode: 
        <input type="text" id="postcodeInput" value={postcode} onChange={postcodeChange} />
      </label>
      <input type="submit" value="Submit" />
      <p>latitude: {latitude}</p>
      <p>longitude: {longitude}</p>
    </form>
  )
}

export default PostcodeSearch