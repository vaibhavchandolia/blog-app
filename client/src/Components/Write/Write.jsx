import './Write.css'

export default function Write() {
  return (
    <div className='write'>
        <img 
            className='writeImg'
            src="https://www.gamespot.com/a/uploads/scale_super/1603/16030002/4111613-mha-01.png" 
            alt="" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display: "none"}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Write your blog...' 
                    type='text' 
                    className='writeInput writeText'>
                </textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}
