import React from "react"
import PropTypes from "prop-types"
import { Field, reduxForm } from "redux-form"

class ImgInput extends React.Component {
  static propTypes = {
    previewLogoUrl: PropTypes.string,
    mimeType: PropTypes.string,
    maxWeight: PropTypes.number,
    maxWidth: PropTypes.number,
    maxHeight: PropTypes.number,
    // redux-form porps
    handleSubmit: PropTypes.func.isRequired
  };
  static defaultProps = {
    previewLogoUrl: "https://imgplaceholder.com/400x300",
    mimeType: "image/jpeg, image/png",
    maxWeight: 1000000,
    maxWidth: 1000000,
    maxHeight: 1000000
  };
  validateImageWeight = imageFile => {
    if (imageFile && imageFile.size) {
      // Get image size in kilobytes
      const imageFileKb = imageFile.size / 1024;
      const { maxWeight } = this.props

      if (imageFileKb > maxWeight) {
        return `Image size must be less or equal to ${maxWeight}kb`;
      }
    }
  }
  validateImageWidth = imageFile => {
    if (imageFile) {
      const { maxWidth } = this.props;

      if (imageFile.width > maxWidth) {
        return `Image width must be less or equal to ${maxWidth}px`
      }
    }
  };
  validateImageHeight = imageFile => {
    if (imageFile) {
      const { maxHeight } = this.props

      if (imageFile.height > maxHeight) {
        return `Image height must be less or equal to ${maxHeight}px`
      }
    }
  }
  validateImageFormat = imageFile => {
    if (imageFile) {
      const { mimeType } = this.props;

      if (!mimeType.includes(imageFile.type)) {
        return `Image mime type must be ${mimeType}`
      }
    }
  }
  handlePreview = imageUrl => {
    const previewImageDom = document.querySelector(".preview-image")
    previewImageDom.src = imageUrl
  };
  handleChange = (event, input) => {
    event.preventDefault()
    let imageFile = event.target.files[0]
    if (imageFile) {
      const localImageUrl = URL.createObjectURL(imageFile)
      const imageObject = new window.Image()

      imageObject.onload = () => {
        imageFile.width = imageObject.naturalWidth
        imageFile.height = imageObject.naturalHeight
        input.onChange(imageFile)
        URL.revokeObjectURL(imageFile)
      };
      imageObject.src = localImageUrl
      this.handlePreview(localImageUrl)
    }
  }

  renderFileInput = ({ input, type, meta }) => {
    const { mimeType } = this.props
    return (
      <div>
        <input
          name={input.name}
          type={type}
          accept={mimeType}
          onChange={event => this.handleChange(event, input)}
        />
        {meta && meta.invalid && meta.error && (
          <span className='red'>{meta.error}</span>
        )}
      </div>
    )
  }

  render() {

    const {
      previewLogoUrl,
      maxWidth,
      maxHeight,
      maxWeight,
      handleSubmit
    } = this.props;
    return (
      <div
        style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
        Name="card small"
      >
        <div className="card-image">
          <img
            src={ previewLogoUrl }
            alt='preview'
            className="preview-image"
            style={{ height: "30vw", objectFit: "cover" }}
          />
        </div>
        <div Name="card-content">
          <span>
            {`Image has to be JPEG or PNG, with max of ${ maxWidth } px width,
            ${ maxHeight } px height and ${ maxWeight } kb size`}
          </span>
        </div>
        <div Name="card-action">
          <Field
            name="image"
            type="file"
            validate={[
              this.validateImageWeight,
              this.validateImageWidth,
              this.validateImageHeight,
              this.validateImageFormat
            ]}
            component={ this.renderFileInput }
          />

        </div>
      </div>
    )
  }
}

export default ImgInput
