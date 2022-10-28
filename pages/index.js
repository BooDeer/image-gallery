import AuthStyles from '../styles/Auth.module.css'
import { BsGoogle } from 'react-icons/bs';
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from 'next/router'
import Auth from '../components/Auth';



export default function Home() {
	return (
		<Auth />
	)
}
