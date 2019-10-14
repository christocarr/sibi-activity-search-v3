import React from 'react'

const PostcodeSearch = ({ postcodeChange, postcodeSearch, postcode }) => {
  return (
    <form onSubmit={postcodeSearch} >
      <label htmlFor="postcodeInput">Postcode: 
        <input type="text" id="postcodeInput" value={postcode} onChange={postcodeChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default PostcodeSearch