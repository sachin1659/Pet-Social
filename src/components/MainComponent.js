import React from 'react';
import Modal from 'react-responsive-modal';
import ImageUpload from './ImageUpload';
import Post from './Post';
import Axios from 'axios';
import Category from './Category';
import Categories from './Categories';

class MainComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                show: false,
                showInvite: false,
                totalPosts: '',
                category: ''
        }
    }
    onOpenModal = () => {
        this.setState({show: true});
    };
  
    onCloseModal = () => {
        this.setState({show: false});
    };

    openInviteModal = () => {
        this.setState({showInvite: true});
    }
    closeInviteModal = () => {
        this.setState({showInvite: false});
    }
    totalPosts = (posts) => {
        this.setState({totalPosts: posts});
    }
    totalCategory = (category) => {
        this.setState({category: category});
    }

    componentDidMount(){
        var response = Axios.post(`http://localhost:8000/retrive`,[])
        .then(res => {
            var x = res.data.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.date) - new Date(a.date);
              });
              this.setState({totalPosts: x});
        })
        var response1 = Axios.post(`http://localhost:8000/findsave_categeory`, [] )
        .then(res1 => {
            this.setState({category: res1.data})
        })
    }
    latestfirst = () =>{
        var response = Axios.post(`http://localhost:8000/retrive`, [] )
        .then(res => {
            var x = res.data.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.date) - new Date(a.date);
              });
              this.setState({totalPosts: x});
            })
    }
    oldestfirst = () =>{
        var response = Axios.post(`http://localhost:8000/retrive`,[])
        .then(res => {
            this.setState({totalPosts: res.data});
        })
    }
	render(){
	   return (
        <div>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link
            href="css/bootstrap-responsive.css"
            rel="stylesheet"
            type="text/css"
        />
        <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="navbar-inner">
            <div className="container">
                <button
                type="button"
                className="btn btn-navbar"
                data-toggle="collapse"
                data-target=".nav-collapse"
                >
                {" "}
                <span className="icon-bar" /> <span className="icon-bar" />{" "}
                <span className="icon-bar" />{" "}
                </button>
                <a className="brand" href>
                PPL
                </a>
                <div className="pro_info pull-right">
                <div className="pro_icn">
                    <img src="images/pic_small.png" />
                </div>
                <div className="pro_txt">
                    Me<b className="caret" />
                </div>
                <ul
                    className="dropdown-menu"
                    role="menu"
                    aria-labelledby="dLabel"
                >
                    <li>
                    <a tabIndex={-1} href="#">
                        My Profile
                    </a>
                    </li>
                    <li>
                    <a tabIndex={-1} href="#">
                        Message Box
                    </a>
                    </li>
                    <li>
                    <a tabIndex={-1} href="#">
                        Change Language
                    </a>
                    </li>
                    <li className="divider" />
                    <li>
                    <a tabIndex={-1} href="#">
                        <input type="text" placeholder="search" />
                    </a>
                    </li>
                </ul>
                </div>
                <div className="nav-collapse collapse">
                <ul className="nav">
                    <li className="active">
                    {" "}
                    <a href>Home</a>{" "}
                    </li>
                    <li className>
                    {" "}
                    <a href>E-Coupons</a>{" "}
                    </li>
                    <li className>
                    {" "}
                    <a href>E-Brands</a>{" "}
                    </li>
                    <li className>
                    {" "}
                    <a href>Resuse Market</a>{" "}
                    </li>
                    <li className>
                    {" "}
                    <a href>Lost and Found</a>{" "}
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        
        <div className="container">
            <div className="content">
            <div className="content_rgt">
                <div className="rght_btn">
                {" "}
                <span className="rght_btn_icon">
                    <img src="images/btn_iconb.png" alt="up" />
                </span>{" "}
                <span className="btn_sep">
                    <img src="images/btn_sep.png" alt="sep" />
                </span>{" "}
                <a href="#" onClick={this.onOpenModal}>Upload Post</a>{" "}
                </div>
                <div className="rght_btn">
                {" "}
                <span className="rght_btn_icon">
                    <img src="images/btn_icona.png" alt="up" />
                </span>{" "}
                <span className="btn_sep">
                    <img src="images/btn_sep.png" alt="sep" />
                </span>{" "}
                <a href="#" onClick={this.openInviteModal}>Invite Friends</a>{" "}
                </div>
                <Categories category={this.state.category}/>
                <div className="rght_cate">
                <div className="rght_cate_hd" id="opn_cat_bg">
                    Featured
                </div>
                <div className="sub_dwn">
                    <div className="feat_sec">
                    <div className="feat_sec_img">
                        <img src="images/feat_img1.png" alt="image" />
                    </div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                        <div className="btm_arc">Cats</div>
                    </div>
                    </div>
                    <div className="feat_sec">
                    <div className="feat_sec_img">
                        <img src="images/feat_img2.png" alt="image" />
                    </div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                        <div className="btm_arc">Dogs</div>
                    </div>
                    </div>
                    <div className="feat_sec">
                    <div className="feat_sec_img">
                        <img src="images/feat_img3.png" alt="image" />
                    </div>
                    <div className="feat_txt">Lorem Ipusum Text</div>
                    <div className="btm_rgt">
                        <div className="btm_arc">Rabbits</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="content_lft">
                <div className="contnt_1">
                <div className="list_1">
                    <ul>
                    <li>
                        <input type="checkbox" className="chk_bx" />
                        Friends
                    </li>
                    <li>
                        <input type="checkbox" className="chk_bx" />
                        Flaged
                    </li>
                    </ul>
                </div>
                <div className="post_div">
                    <div className="post_list">
                    <ul>
                        <li onClick={this.latestfirst}>
                        <a href="#">
                            <span className="list_img">
                            <img src="images/img_1.png" />
                            </span>Latest First
                        </a>
                        </li>
                        <li onClick={this.oldestfirst}>
                        <a href="#">
                            <span className="list_img">
                            <img src="images/img_2.png" />
                            </span>Oldest First
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <span className="list_img">
                            <img src="images/img_3.png" />
                            </span>Most Pet
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <span className="list_img">
                            <img src="images/img_4.png" />
                            </span>Most Clicks
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <span className="list_img">
                            <img src="images/img_5.png" />
                            </span>Most Commented
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="post_txt">4 New Post Updates</div>
                </div>
                </div>
                <Post posts={this.state.totalPosts}/>
            </div>
            </div>
            <div className="clear" />
        </div>
        
            <Modal open={this.state.show} onClose={this.onCloseModal} center>
                <div >
                    <ImageUpload totalPosts={this.totalPosts} />  
                </div>
        </Modal> 
        <Modal open={this.state.showInvite} onClose={this.closeInviteModal} center>
                <div >
                    <Category totalCategories={this.totalCategory} />  
                </div>
        </Modal>    
        </div>
        
    
    );
    }
}
export default MainComponent;