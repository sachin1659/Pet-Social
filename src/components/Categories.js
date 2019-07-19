import React from 'react';
import MainComponent from './MainComponent';

class Post extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        
        return (
            <div className="contnt_2">
                        <div className="rght_cate">
                        <div className="rght_cate_hd" id="rght_cat_bg">
                            Categories
                        </div>
                        <div className="rght_list">
                            <ul>
                         {this.props.category ? this.props.category.map((x, i) => { 
                      return      <li>
                                <a href="#">
                                <span className="list_icon">
                                    <img src={`http://localhost:8000/${x.fileName}`} alt="up" />
                                </span>{" "}
                                    {x.categeory}
                                </a>
                            </li>
                            }):null}  
                           
                            </ul>
                        </div>
                        </div>
                    </div>
                )
            } 
        
    
}
export default Post;