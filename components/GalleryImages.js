import { useEffect, useState, useRef, useCallback } from "react"
import Image from "../components/Image.js"
import { db } from "../db/usersDB.js";
import ImagesStyles from '../styles/GalleryImages.module.css';
import useGetImages from "./useGetImages.js";
import { useSelector } from 'react-redux'

export default function GalleryImages() {

	const [images, setImages] = useState([]);
	const [pageNumber, setPagenumber] = useState(1);
	const { gallery, error, hasMore, loading } = useGetImages(pageNumber);
	const { username } = useSelector((state) => state.users)

	const observer = useRef();
	// ================================================================================================
	const lastImageElementRef = useCallback(node => {
		if (loading) return
		if (observer.current) observer.current.disconnect()
		observer.current = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting && hasMore)
			{
				setPagenumber(prevPageNumber => prevPageNumber + 1)
			}

		})
		if (node) observer.current.observe(node)
	}, [loading, hasMore]);
	// ================================================================================================
	useEffect(() => {
		const getLikedImages = async () => {
			if (username)
			{
				// const data = await db.get(username);
				db.get(username, (err, res) => {
					if (res)
					{
						console.log(res.liked)
						setImages(res.liked);
					}
				})
			}
		}
		getLikedImages();
	}, [username]);

	return (
		<>
			{!gallery ? (<h1 className="flex items-center justify-center h-screen font-bold text-4xl text-center text-slate-800">Loading...</h1>) :
				(<div>
					<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
						{gallery.map((image, index) => {
							if (gallery.length === index + 1)
								return (
									<Image key={index} {...image} ref={lastImageElementRef} likedPictures={images}/>
									// <div key={index} ref={lastImageElementRef}>{index}</div>
								)
							else
								return (
									<Image key={index} {...image} likedPictures={images}/>
									// <div key={index}>{index}</div>
								)
						})}			
					</div>
					<div>{loading && 'Loading...'}</div>
					<div>{error && 'Error'}</div>
				</div>)
			}
		</>
	)
}
