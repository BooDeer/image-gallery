import GalleryStyles from '../styles/Gallery.module.css'
import { BsFilterRight } from 'react-icons/bs';
import NavBar from '../components/navBar';
import GalleryImages from '../components/GalleryImages';
import { useRouter } from 'next/router';
import { db } from '../db/usersDB'
import { useSelector, useDispatch } from 'react-redux'
import { addUsername } from '../store/currUser';
import { useEffect } from 'react';

export default function Gallery() {
	const router = useRouter()
	const dispatch = useDispatch();

	useEffect(() => {
		if (router.query.user)
		{
			dispatch(addUsername(router.query.user))
			if (router.query.user != 'muser1' && router.query.user != 'muser2')
				router.push("/")
		}
	}, [router.query.user])

	return (
		<div className={GalleryStyles.container}>
			{/* <NavBar /> */}
			{router.query.user ? <GalleryImages /> : <p>Please login <a href='http://localhost:3000'>here</a></p>}
		</div>
	)
}
