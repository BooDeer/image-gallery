import GalleryStyles from '../styles/Gallery.module.css'
import { BsFilterRight } from 'react-icons/bs';
import NavBar from '../components/navBar';
import GalleryImages from '../components/GalleryImages';
export default function Gallery() {
	return (
		<div className={GalleryStyles.container}>
			{/* <NavBar /> */}
			<GalleryImages />
		</div>
	)
}