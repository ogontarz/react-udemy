import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
	render() {
		const imgs = this.props.images.map((image) => {
			return <ImageCard key={image.id} image={image} />;
		});
		return <div className="image-list">{imgs}</div>;
	}
}

export default ImageList;
