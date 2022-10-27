import { useEffect, useState } from "react"
import axios from 'axios'
export default function useGetImages(pageNumber) {

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [gallery, setGallery] = useState([]);
	const [hasMore, setHasmore] = useState(false);

	useEffect(() => {
		setLoading(true);
		setError(false);
		axios.get(`https://api.unsplash.com/photos?client_id=${process.env.api_key}&page=${pageNumber}&per_page=30`).then( res => {
			setGallery(prevImages => {
			// 	const obj =  [...prevImages, ...res.data]
			// 	obj.filter((value, index, self) =>
			// 	index === self.findIndex((t) => (
			// 	  t.id === value.id
			// 	))
			//   )
			//   console.log(`object's length`,obj.length)
			// 	return obj
			console.log(`array's length ====>`, prevImages.length)
				return [...prevImages, ...res.data]
			})
			setHasmore(res.data.length > 0);
			setLoading(false);
		}).catch(e => {
			setError(true);
		})
	}, [pageNumber])
	return { loading, error, gallery, hasMore }
}