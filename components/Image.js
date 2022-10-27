import React from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineHeart } from 'react-icons/ai'
import { db } from '../db/usersDB';
import { useSelector } from 'react-redux'

const Image = React.forwardRef((props, ref) => {
	
	const { username } = useSelector((state) => state.users)
	const imageLikedHandler = async () => {
		if (db.status == "open")
		{
			console.log("username: ", username)
			 db.get(username, async (err, res)  => {
				console.log("reached the error exception and inserting the id of: ", props.id, "for the user ", username)
				if (err)
					await db.put(username, props.id)
				else
					await db.put(username, res)
				if (res)	
					console.log(res)
			})

		}
		return ;
	}

	return (
		<>
			<article className="shadow-md bg-white rounded-3xl p-5" ref={ref}>
				<img
				src={props.urls.small}
				alt={props.user.name}
				// loading="lazy"
				className="h-52 w-full object-cover rounded-3xl md:h-80"/>
				<article className="flex flex-wrap items-center justify-between">
					<div className="pt-5 flex items-center justify-start">
						<img
						src={props.user.profile_image.large}
						alt={props.user.name}
						// loading="lazy"
						className="w-20 rounded-full shadow"
						/>
						<ul className="ml-3">
							<li className="font-bold text-slate-800">
								{props.user.name}
							</li>
						</ul>
					</div>
					<div>
						<ul className="text-slate-600 text-sm text-right">
							<li>{Math.floor(Math.random() * 20)}k vues</li>
							<li style={{verticalAlign: "middle", display: "inline-block"}}>{props.likes}<AiOutlineHeart onClick={imageLikedHandler}/></li>
						</ul>
					</div>
				</article>
			</article>
		</>
)})

export default Image;