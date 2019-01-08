import React from 'react'
// import axios from 'axios';
// import { Image, Video, Transformation, CloudinaryContext } from "cloudinary-react";

// const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/dly4mslmg`
const MY_CLOUD_NAME = `dly4mslmg`
const CLOUDINARY_UPLOAD_PRESET = 'hknbr8bn'
// var myWidget = window.cloudinary.createUploadWidget({
//   cloudName: 'my_cloud_name',
//   uploadPreset: CLOUDINARY_UPLOAD_PRESET
// }, (error, result) => { console.log(error, result) })
class Cloudinary extends React.Component {
  state = {photo: ""}
  
  myWidget = window.cloudinary.createUploadWidget({
    cloudName: MY_CLOUD_NAME,
  uploadPreset: CLOUDINARY_UPLOAD_PRESET
  }, (error, result) => {
    if (result && result.event === "success") {
      debugger
      this.setState({
        photo: result.info.url
      }, () => {console.log("img updated!", result.info.url)}
      )
    }
  
  });
  
  
  handleChange = (e) => {
    debugger
    console.log(e)
    var file = e.target.files[0]
    var formData = new FormData();
    formData.append('file', file)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  }
    // axios.post({
    //   url: CLOUDINARY_URL,
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   data: formData
    // }).then(res => {
    //   console.log(res)
    //   imgPreview.src = res.data.secure_url
    // })
    //   .catch(err => console.log(err))
    // }

      // <img src="http://fillmurray.com/g/300/300" id="img-preview" alt="test"/>
      // <label class="file-upload-container" for="file-upload" onChange={(e)=>handleChange(e)}>
      //   <input id="file-upload" type="file" style={{"display": "none"}}/>
      // </label> <br/>
      // <button id="upload_widget" class="cloudinary-button" onClick={}>Upload files</button>


  handleClick = (event) => {
      this.myWidget.open()
  }
  render(){
    return (<div className="card">
      <button onClick={this.handleClick} id="upload_widget" className="cloudinary-button ui button">Image</button>
      {this.state.photo.length > 0 ? <img src={this.state.photo} alt="testing" /> : null}
    </div>)
  }
}
export default Cloudinary