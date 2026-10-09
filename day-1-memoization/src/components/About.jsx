// import React from 'react'

// 1st way for react.memo()
// const About = React.memo(() => {
//  // React-Memo-> ab jab jab app or parent re-render hoga toh ye about render nhi hoga kyuki isse wrap kr diya na, jab isme changes honge tab toh re-render hoga!
//   console.log("About rendering")
//   return (
//     <div>
//       About
//     </div>
//   )
// })

// export default About


import React from 'react'

// 2nd way to use react.memo()
const About = ({users}) => {
  console.log("About rendering")
  return (
    <div>
      About
    </div>
  )
}

export default React.memo(About,(prevProp,nextProp)=>{
   const same = prevProp.users.name === nextProp.users.id

   console.log(same ? "no-re-render" : "re-render")

   return same;
  })