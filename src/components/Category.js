import React from 'react';
import Axios from 'axios';
import { getPortPromise } from 'portfinder';

class Category extends React.Component {
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
     var response = Axios.post(`http://localhost:8000/save_categeory`, newForm )
      .then(res => {
        console.log(res);
        this.props.totalCategories(res.data);
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
            <input name="categeory_image" className="fileInput" 
              type="file" 
              onChange={this._handleImageChange} />
            <button className="submitButton" 
              type="submit" 
              onClick={this._handleSubmit}>Upload Image</button>
               <label>
                  Name:
                  <input type="text" name="categeory" />
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
  export default Category;