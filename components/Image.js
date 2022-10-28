import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineHeart , AiFillHeart} from 'react-icons/ai'
import { db } from '../db/usersDB';
import { useSelector } from 'react-redux'





const Image = React.forwardRef((props, ref) => {
	
	const { username } = useSelector((state) => state.users)
	const [liked, setLiked] = useState(props.likedPictures.includes(props.id) ? true : false)

	useEffect(() => {
		const getLikedImages = async () => {
			if (username)
			{
				db.get(username, (err, res) => {
					if (res)
					{
						setLiked(res.liked.includes(props.id) ? true : false);
					}
				})
			}
		}
		getLikedImages();
	}, [username])
	const imageLikedHandler = async (e, id) => {
		
		let table = [];
		db.get(username, async function(err, res) {
			if (err)
			{
				table.push(id)
				db.put(username, {liked: table})
			}
			else
			{
				if (res)
				{
					if (res.liked.length)
						table = res.liked;
					table.push(id);
				}
			}
			table = table.filter((value, index, self) => {
				return self.indexOf(value) === index;
			})
			db.put(username, {liked: table})
		})
		setLiked(true)
		return ;
	}

	const imageUnlikeHandler = async (e, id) =>
	{
		setLiked(false);
		let deltable;
		db.get(username, async function(err, res) {
			if (err)
			{
				console.log(err);
			}
			else if (res)
			{
				deltable = res.liked;
				deltable.splice(deltable.indexOf(props.id), 1);
			}
			db.put(username, {liked: deltable})
		})
	}

	let likedButton = liked ? <AiFillHeart onClick={e => imageUnlikeHandler(e, props.id)}/> : <AiOutlineHeart onClick={e => imageLikedHandler(e, props.id)}/>;
	return (
		<>
			<article className="shadow-md bg-white rounded-3xl p-5" ref={ref}>
				<img
				src={props.urls.small}
				alt={props.user.name}
				loading="lazy"
				className="h-52 w-full object-cover rounded-3xl md:h-80"/>
				<article className="flex flex-wrap items-center justify-between">
					<div className="pt-5 flex items-center justify-start">
						<img
						src={props.user.profile_image.large}
						alt={props.user.name}
						loading="lazy"
						className="w-20 rounded-full shadow"
						/>
						<ul className="ml-3">
							<li className="font-bold text-slate-800">
								{props.user.name.slice(0, 10)}
							</li>
						</ul>
					</div>
					<div>
						<ul className="text-slate-600 text-sm text-right">
							<li>{props.likes}k vues</li>
							<li style={{verticalAlign: "middle", display: "inline-block"}}>{props.likes}{likedButton}</li>
						</ul>
					</div>
				</article>
			</article>
		</>
)})

export default Image;