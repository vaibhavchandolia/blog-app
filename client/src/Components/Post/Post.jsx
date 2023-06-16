import "./Post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" 
            src="https://e0.pxfuel.com/wallpapers/578/65/desktop-wallpaper-hunter-x-hunter-2011-episode-122-anime-review-netero-vs-the-king-100-type-guanyin-bodhisattva.jpg" 
            alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum, dolor sit amet
            </span>
            <hr />
            <span className="postDate">
                1 hour ago
            </span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Culpa autem aut quisquam maiores. Veniam cupiditate, rerum aliquam aspernatur 
        assumenda iure, omnis eligendi incidunt odit iste nemo accusamus impedit vero doloremque!
        </p>
    </div>
  )
}
