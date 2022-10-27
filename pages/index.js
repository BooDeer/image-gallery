import Head from 'next/head'
import AuthStyles from '../styles/Auth.module.css'
import { BsGoogle } from 'react-icons/bs';
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from 'next/router'
import { db } from '../db/usersDB';



export default function Home() {
	const router = useRouter()


	const validateForm = (e) => {
		e.preventDefault();
		console.log("Reached here")
		// alert(`So your name is ${e.target.email.value}?`);
		if (e.target.email.value == "muser3" && e.target.password.value == "mpassword3")
		{
			toast('👻 Ce compte a été bloqué.', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				});
		}
		else if ((e.target.email.value == "muser1" && e.target.password.value == "mpassword1") || ((e.target.email.value == "muser2" && e.target.password.value == "mpassword2")))
			router.push({
				pathname: "/gallery",
				query: {user: e.target.email.value}
			})
		else
		{
			toast('🤔 Informations de connexion invalides.', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				});
		}
	}
  return (
    <div className={AuthStyles.floatContainer}>
		<div className={AuthStyles.floatChild}>
			{/* <h1>left part</h1> */}
			<div className={AuthStyles.centerdiv}>
				<h1>Welcome back</h1>
				<p className={AuthStyles.welcomeMsg}>Welcome back! Please enter your details</p>
			</div>
			<form onSubmit={validateForm} >
				<label for="email">Email</label>
				<input  className={AuthStyles.inputBoxes} type="text" id="email" name="email" placeholder='Enter your email'/> 
				<label for="password">Password</label>
				<input className={AuthStyles.inputBoxes}  type="password" id="password" name="password" placeholder='********'/>

				<input type="checkbox" id="remembermonth" name="remembermonth" value="remembermonth" className={AuthStyles.checkBox}/><p className={AuthStyles.checkBox}>Remember for 30 days </p>
				<a href='#' className={AuthStyles.forgotPw}>Forgot password</a>

				<button className={[AuthStyles.buttonStyle, AuthStyles.signIN].join(" ")}>SIGN IN</button>
				<button className={[AuthStyles.buttonStyle, AuthStyles.googleSign].join(" ")}><BsGoogle /> Sign in with Google</button>

				<p className={AuthStyles.welcomeMsg}>Don't have an account? <a className={AuthStyles.forgotPw} href="#">Sign up for free</a></p>
			</form>
		</div>
		<div className={[AuthStyles.floatChild, AuthStyles.rightchild].join(" ")}>
			<div className={AuthStyles.card}>
				<h2 className={AuthStyles.cardValue}>"We've been using untilted to kick start every new project and can't imagine working without it"</h2>
				<h2 className={AuthStyles.cardValue}>Houssam</h2>
				<p>student at 1337</p>
			</div>
		</div>
		<ToastContainer />
	</div>
  )
}
