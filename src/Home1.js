// import React from 'react'
// import { useAuth0 } from "@auth0/auth0-react";

// export const Home1 = () => {
    
//   const { loginWithRedirect } = useAuth0();
//   const { logout } = useAuth0();
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   return (
//     <div>
//       {isAuthenticated &&   <h2>{user.email}</h2>}
//       {isAuthenticated ? (   <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//       Log Out
//     </button>):(<button onClick={() => loginWithRedirect()}>Log In</button>)}
    

    
//     </div>
//   )
// }
