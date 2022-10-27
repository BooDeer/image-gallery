import React from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineHeart } from 'react-icons/ai'

const Image = React.forwardRef((props, ref) => (
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
							<li style={{verticalAlign: "middle", display: "inline-block"}}>{props.likes}<AiOutlineHeart onClick={() => {
								console.log("hehe u clicked me wlh")
							}}/></li>
						</ul>
					</div>
				</article>
			</article>
		</>
))

export default Image;