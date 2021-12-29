import Head from "next/head";
import { useRouter } from "next/router";
import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
const UserVerify = () => {
  const router = useRouter();
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result) {
        router.push("/admin");
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
          <h1 className="login_title">Login with OTP</h1>

          <button className="button loginButton" onClick={signIn}>
            Login With Google
          </button>
        </div>
      </section>
    </>
  );
};

export default UserVerify;
