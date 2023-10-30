import './index.css'

const ImageItem = props => {
  const {imageDetails} = props
  const {thumbnailUrl, imageClick} = imageDetails

  const onClickImage = () => {
    imageClick(thumbnailUrl)
  }

  return (
    <li className="image-item">
      <button type="button" className="image-button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ImageItem
