import Head from "next/head";
import { useRouter } from "next/router";
import { auth, provider } from "../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
const Auth = () => {
  const router = useRouter();
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result) {
        localStorage.setItem("user", JSON.stringify(auth.currentUser));
        router.push("/verify");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Head>
        <title>Login - Hasanul Haque Banna</title>
      </Head>
      <section className="section bd_grid" id="contact">
        <div className="circle contact_circleOne"></div>
        <div className="circle contact_circleThree"></div>
        <div className="loginContainer bd_grid">
          <h1 className="login_title">Login with google</h1>

          <button className="button loginButton" onClick={signIn}>
            Login With Google
          </button>
        </div>
      </section>
    </>
  );
};

export default Auth;
