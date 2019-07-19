import React from 'react';
import MainComponent from './MainComponent';
import Axios from 'axios';

class Post extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        
        return (    
                    <div className="contnt_2">
                     {console.log("this.props.posts",this.props.posts)}
                       {this.props.posts ? this.props.posts.map((x, i) => { 
                       return  (
                        <div className="div_a">
                        <div className="div_title">
                        {x.description}
                        </div>
                        <div className="btm_rgt">
                        <div className="btm_arc">{x.category}</div>
                        </div>
                        <div className="div_top">
                        <div className="div_top_lft">
                            <img src="images/img_6.png" />
                        </div>
                        
                        <div className="div_top_rgt">
                            <span className="span_date">{x.date}</span>
                            <span className="span_time">11:15am</span>
                        </div>
                        </div>
                        <div className="div_image">
                        <img src={`http://localhost:8000/${x.fileName}`} alt="pet" />
                        </div>
                        <div className="div_btm">
                        <div className="btm_list">
                            <ul>
                            <li>
                                <a href="#">
                                <span className="btn_icon">
                                    <img src="images/icon_001.png" alt="share" />
                                </span>Share
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <span className="btn_icon">
                                    <img src="images/icon_002.png" alt="share" />
                                </span>Flag
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <span className="btn_icon">
                                    <img src="images/icon_004.png" alt="share" />
                                </span>4 Comments
                                </a>
                            </li>
                            <li onClick={this.incrLikes}>
                                <a href="#">
                                <span className="btn_icon">
                                    <img src="images/icon_003.png" alt="share" />
                                </span>Likes
                                </a>
                            </li>
                            <div
                                className="like_count"
                                style={{ marginRight: 10 }}
                            >
                                <span className="lft_cnt" />
                                <span className="mid_cnt">10</span>
                                <span className="rit_cnt" />
                            </div>
                            <li>
                                <a href="#">
                                <span className="btn_icon">
                                    <img src="images/icon_003.png" alt="share" />
                                </span>Unlike
                                </a>
                            </li>
                            <div className="like_count">
                                <span className="lft_cnt" />
                                <span className="mid_cnt">4</span>
                                <span className="rit_cnt" />
                            </div>
                            </ul>
                        </div>
                        </div>
                    </div>   
                        );
                       }):null} 
                    </div>
                );
            } 
        
    
}
export default Post;