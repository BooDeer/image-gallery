import GalleryStyles from '../styles/Gallery.module.css'
import { BsFilterRight } from 'react-icons/bs';
import NavBar from '../components/navBar';
import GalleryImages from '../components/GalleryImages';
import { useRouter } from 'next/router';
import { db } from '../db/usersDB'
import { useSelector, useDispatch } from 'react-redux'
import { addUsername } from '../store/currUser';

export default function Gallery() {
	const router = useRouter()
	const { username } = useSelector((state) => state.users);
	const dispatch = useDispatch();
	if (router.query.user)
	{
		dispatch(addUsername(router.query.user))
	}

	return (
		<div className={GalleryStyles.container}>
			{/* <NavBar /> */}
			<GalleryImages />
		</div>
	)
}