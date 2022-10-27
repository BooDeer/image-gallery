import { useEffect, useState, useRef, useCallback } from "react"
import Image from "../components/Image.js"
import ImagesStyles from '../styles/GalleryImages.module.css';
import useGetImages from "./useGetImages.js";

export default function GalleryImages() {

	const [images, setImages] = useState([]);
	const [pageNumber, setPagenumber] = useState(1);
	const { gallery, error, hasMore, loading } = useGetImages(pageNumber);

	// const observer = useRef();
	// const lastImageElementRef = useCallback(node => {
	// 	if (loading) return
	// 	if (observer.current) observer.current.disconnect()
	// 	observer.current = new IntersectionObserver(entries => {
	// 		if (entries[0].isIntersecting && hasMore)
	// 		{
	// 			setPagenumber(prevPageNumber => prevPageNumber + 1)
	// 		}
	// 	})



	// 	if (node) observer.current.observe(node)
	// }, [loading, hasMore]);
	// useEffect(() => {
	// 	const fetchImages = async()  => {
	// 		console.log(process.env.api_key)
	// 		const response = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.api_key}`);
	// 		const data = await response.json();
	// 		setImages(data);
	// 		console.log(data.length)
	// 	}
	// 	fetchImages();
	// }, [])

	const getNextPage = () => {
		if (hasMore)
		{
			setPagenumber(prevPageNumber => prevPageNumber + 1)
			// useGetImages(pageNumber);
		}
	}

	const getPreviousPage = () => {
		if (pageNumber > 1)
		{
			setPagenumber(prevPageNumber => prevPageNumber - 1);
		}
	}

	return (
		<>

			{!gallery ? (<h1 className="flex items-center justify-center h-screen font-bold text-4xl text-center text-slate-800">Loading...</h1>) :
				(<div>
					<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
						{gallery.map((image, index) => {
							if (gallery.length === index + 1)
								return (
									<Image key={image.id} {...image}/>
									// <div key={index}>{index}</div>
								)
							else
								return (
									<Image key={image.id} {...image}/>
									// <div key={index}>{index}</div>
								)
						})}			
					</div>
					<div>{loading && 'Loading...'}</div>
					<div>{error && 'Error'}</div>
					<div>
						<button onClick={getPreviousPage}>Previous</button>
						<button onClick={getNextPage}>Next</button>
					</div>
				</div>)
			}
		</>
	)
}
