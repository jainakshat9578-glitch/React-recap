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
const About = () => {
  console.log("About rendering")
  return (
    <div>
      About
    </div>
  )
}

export default React.memo(About)
// export default React.memo(About,(prevProp,nextProp)=>{
//   //  return prevProp.users===nextProp.users
//    // ab har baar name change hone pr re-render hoga baaki nhi hoga

//   //  return prevProp.users.id === nextProp.users.id
//    // ab about  re-render nhi hoga kyuki id pe check lagaya hai or id toh same hai hamesha
//    // toh ye condition hamesha true hai isliye no-re-render !
//   })