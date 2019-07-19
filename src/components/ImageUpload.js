import React from 'react';
import Axios from 'axios';
import { getPortPromise } from 'portfinder';

class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    _handleSubmit=(e)=> {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      var newForm = new FormData(e.target)
      console.log(newForm);
      for (var value of newForm.values()) {
        console.log(value); 
     }
     newForm.append('date', new Date());
     newForm.append('time',new Date().getTime());
     var response = Axios.post(`http://localhost:8000/upload`, newForm )
      .then(res => {
        console.log(res);
        //console.log("response",res.data);
        this.props.totalPosts(res.data);
      })
     
    }
  
    _handleImageChange=(e)=> {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      }
  
      return (
        <div className="previewComponent">
          <form onSubmit={this._handleSubmit}>
            <input name="filename" className="fileInput" 
              type="file" 
              onChange={this._handleImageChange} />
            <button className="submitButton" 
              type="submit" 
              onClick={this._handleSubmit}>Upload Image</button>
               <label>
                  Description:
                  <input type="text" name="description" />
              </label>

              <label>
                  Posted By:
                  <input type="text" name="name" />
              </label>
              <label>
                    Select Categories
                <select name ="categeory">
                    <option value="Cat">Cats</option>
                    <option value="Dog">Dogs</option>
                    <option selected value="bird">Birds</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Other">Others</option>
                </select>
            </label>
            <input type="submit" value="Submit" />      
          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </div>
      )
    }
  }
  export default ImageUpload;