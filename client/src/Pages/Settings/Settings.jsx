import './Settings.css'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className='settingsUpdateTitle'>Update Your Account</span>
                <span className='settingsDeleteTitle'>Delete Your Account</span>
            </div>
            <form className='settingsForm'>
                <div className="settingsPP">
                    <img 
                        src="https://i.pinimg.com/originals/20/8e/6f/208e6f7e7706aff3aa683d4061c9e54d.jpg" 
                        alt="profilepic" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='xyz' />
                <label>Email</label>
                <input type="email" placeholder='xyz@gmail.com' />
                <label>Password</label>
                <input type="password" />
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
    </div>
  )
}
