import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react"; 
//use session hook is another extremely useful hook given to us by nextdoc allows us to access the currently authenticated user any were

const Home: NextPage = () => {
const { data } = useSession();
console.log("HERE IS DATA",data);
return( 
  <div>
    <button onClick={() => signIn("google")}>Sign In</button> 
    </div> 
 
    );
};

export default Home;
   //CallBack function (just saying sign us in with google)