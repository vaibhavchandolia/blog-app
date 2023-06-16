import './Blog.css'

export default function Blog() {
  return (
    <div className='blog'>
        <div className="blogWrapper">
            {/* <div className="banner">
            </div> */}
            <img className='banner-img' src="https://www.gamespot.com/a/uploads/scale_super/1603/16030002/4111613-mha-01.png" alt="banner" />
            <div className="blogContainer">

            <h1 className="blogTitle">Lorem ipsum dolor sit 
                <div className="blog-edit">
                    <i className="blogPostIcon far fa-edit"></i>
                    <i className="blogPostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="blogPostInfo">
                <span className="blogPostAuthor">Author: <b>Vaibhav</b></span>
                <span className="blogPostDate">1 hour ago</span> 
            </div>
            <p className="blogContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Veniam blanditiis porro eligendi iure, eius magni ipsa natus ducimus ipsum, 
                magnam ab perspiciatis consequuntur ullam molestias eaque nam fuga reprehenderit adipisci!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Veniam blanditiis porro eligendi iure, eius magni ipsa natus ducimus ipsum, 
                magnam ab perspiciatis consequuntur ullam molestias eaque nam fuga reprehenderit adipisci!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Veniam blanditiis porro eligendi iure, eius magni ipsa natus ducimus ipsum, 
                magnam ab perspiciatis consequuntur ullam molestias eaque nam fuga reprehenderit adipisci!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Veniam blanditiis porro eligendi iure, eius magni ipsa natus ducimus ipsum, 
                magnam ab perspiciatis consequuntur ullam molestias eaque nam fuga reprehenderit adipisci!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Veniam blanditiis porro eligendi iure, eius magni ipsa natus ducimus ipsum, 
                magnam ab perspiciatis consequuntur ullam molestias eaque nam fuga reprehenderit adipisci!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Veniam blanditiis porro eligendi iure, eius magni ipsa natus ducimus ipsum, 
                magnam ab perspiciatis consequuntur ullam molestias eaque nam fuga reprehenderit adipisci!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Veniam blanditiis porro eligendi iure, eius magni ipsa natus ducimus ipsum, 
                magnam ab perspiciatis consequuntur ullam molestias eaque nam fuga reprehenderit adipisci!</p>
            </div>
        </div>
    </div>
  )
}
