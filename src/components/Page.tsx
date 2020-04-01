import * as React from 'react';
import { Link } from "react-router-dom";

const Page = () => {
  /**
   * You can't useEffect server side because is a no-op
   * https://github.com/gatsbyjs/gatsby/issues/13947#issuecomment-491214724
   */

  return (
    <div>
      <h1>THIS IS A PAGE! todos in the state)</h1>
      <p>111</p>
      <Link to="/">Home</Link>
    </div>
  );
}


export default Page
