import GalleryStyles from '../styles/Gallery.module.css'

export default function Gallery() {
	return (
		<div className={GalleryStyles.container}>
			<div>
				<div>
					<label>
						<select name="cars" id="cars">
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="opel">Opel</option>
							<option value="audi">Audi</option>
						</select>
					</label>
				</div>
			</div>
		</div>
	)
}