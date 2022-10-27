import GalleryStyles from '../styles/Gallery.module.css'
import { BsFilterRight } from 'react-icons/bs';
import NavBar from '../components/navBar';
import GalleryImages from '../components/GalleryImages';
import { useRouter } from 'next/router';

export default function Gallery() {
	const router = useRouter()
	return (
		<div className={GalleryStyles.container}>
			{/* <NavBar /> */}
			{/* {console.log(router.query)} */}
			<GalleryImages />
		</div>
	)
}