import GalleryStyles from '../styles/Gallery.module.css'
import { BsFilterRight } from 'react-icons/bs';


export default function NavBar() {
	return (
		<div className={GalleryStyles.topnav}>
			<div>
				<label>
					<select name="sortby" id="sortby"  className={GalleryStyles.labeless}>
						<option value="popular">Popular</option>
						<option value="recent">Recent</option>
						<option value="oldest">Oldest</option>
						<option value="liked">Liked</option>
					</select>
				</label>
			</div>
			<div className={GalleryStyles.topnavCentered}>
				<button>
					All
				</button>
				<button>
					Animation
				</button>
				<button>
					Branding
				</button>
				<button>
					Illustration
				</button>
				<button>
					Mobile
				</button>
				<button>
					Print
				</button>
				<button>
					Product Design
				</button>
				<button>
					Typography
				</button>
				<button>
					Web Design
				</button>
			</div>
			<div className={GalleryStyles.topnavRight}>
				<button>
					<BsFilterRight style={{marginRight: "10px"}}/>
					Filter
				</button>
			</div>
	</div>
	)
}