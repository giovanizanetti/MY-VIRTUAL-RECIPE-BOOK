import React, { Component } from 'react'
import { storage } from '../../../config/fbConfig'
import Placeholder from '../../../images/placeholder.png'
import { connect } from 'react-redux'
import { setImgUrl } from '../../../actions/image'

class ImgUpLoad extends Component {
  state = {
    image: null,
    url: '',
    progress: 0,
    showPercentage: false
  }

  handleChange = e => {
    e.target.files[0]
    && this.setState({
      image: e.target.files[0]
    })
  }

  handleUpload = () => {
    const { image } = this.state
    const uploadTask = storage.ref(`recipeImgs/${ image.name }`).put(image)
    uploadTask.on('state_changed',
    // progress
    (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      this.setState({ progress, showPercentage: true })
    },
    // error
    (error) => console.log(error),
    // complete
    () => {
      storage.ref('recipeImgs').child(image.name).getDownloadURL()
      .then(url => {
        this.setState({ url })
        this.props.setImgUrl(this.state.url)
      })
    })
  }

  render() {
    let { selectedRecipe } = this.props
    const { progress, showPercentage, image, url } = this.state
    const selectedRecipeImage = selectedRecipe && selectedRecipe.image
    return (
      <div className='container'>
        <br />
        <br />
        <div className='container' style={{display:'flex', justifyContent: 'center'}}>
          <input
            type="file"
            onChange={ this.handleChange }
          />
          { image &&
            <button type='button' onClick={ this.handleUpload } className='btn-small blue'>Upload</button>
          }
        </div>
        <div style={{display: 'flex'}}>
          <div className="progress" style={{height: '1rem', background: '#F3F3F3'}}>
            <div
              className="determinate blue"
              style={{
                width: `${progress}%`,
              }}
              ></div>
          </div>
          <span style={{margin: '.2rem'}}> { showPercentage && progress + '%' }</span>

        </div>
        <img
          className='responsive-img'
          src={ url || selectedRecipeImage || Placeholder }
          alt='recipe'
          height='300'
          width='400'
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedRecipe: state.selectedRecipe
  }
}

export default connect(mapStateToProps, { setImgUrl })(ImgUpLoad)
