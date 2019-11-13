import React from 'react';
import { Link } from 'react-router-dom';
import { loading } from "../utility";
class EditUserProfleForm extends React.Component {
    constructor(props){
        super(props);
        this.state = Object.assign({
            id: '',
            username: '',
            gender: '',
            birthday: '',
            about: '',
            imageUrl: undefined,
            imageFile: undefined,
        }, this.props.user);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.removeProfilePicture = this.removeProfilePicture.bind(this);
    }

    update(field) {
        return event => {
            this.setState({ [field]: event.target.value })
        };
    }

    handleSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append('user[username]', this.state.username);
        formData.append('user[id]', this.state.id);
        formData.append('user[gender]', this.state.gender);
        formData.append('user[birthday]', this.state.birthday);
        formData.append('user[about]', this.state.about);

        if (this.state.imageFile){
            formData.append('user[profile_pic]', this.state.imageFile)
        }
        this.props.updateUser(formData);
        this.props.fetchAllUsers();
        this.props.history.push(`/users/${this.state.id}`);
    }

    handleFile(event){
        const file = event.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
                imageFile: file,
                imageUrl: fileReader.result
            })
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    removeProfilePicture(event){
        event.preventDefault();
        this.setState({imageFile: undefined, imageUrl: undefined});
    }
    
    render(){
        const preview = this.state.imageUrl ? <img src={this.state.imageUrl}/> : '';
        let { user } = this.props
        debugger

        if (!user){
            { loading() }
        }

        return (
            <div className="user-profile-edit">
                <div className="header-section">
                    <div className="title">
                        <h3>Your Public Profile</h3>
                    </div>
                    <Link to={`/users/${user.id}`} className="btn-block">View Profile</Link>
                </div>
                <form onSubmit={this.handleSubmit} >

                    <div className="section edit-user-profile-pic-container flex-row">
                        <div className="label">
                        {/* <label>Profile Picture</label> */}
                            Profile Picture
                        </div>
                        <div className="profile-pic-input-container">
                            <input type="file" onChange={this.handleFile} id="profile-picture" />
       
                            <div className="profile-pic">
                                {preview}
                            </div>
                            {/* <button className="normal-button" onClick={this.removeProfilePicture}>Remove picture</button> */}
                        </div>
                    </div>
                    <div className="section">
                        <div className="label">
                            Your Name
                        </div>
                        <input type="text" value={this.state.username} id="name" onChange={this.update('username')} />
                    </div>

                    <div className="section">
                        <div className="label">
                            Gender
                        </div>
                        <div className="gender-options-container flex-row">
                            <div className="gender-div flex-row">
                                <input type="radio" checked={this.state.gender === 'Female'} value='Male' value='Female' id="gender" onChange={this.update('gender')} />
                                <label htmlFor="female">Female</label>
                            </div>
                            <div className="gender-div flex-row">
                                <input type="radio" checked={this.state.gender === 'Male'} value='Male' id="gender" onChange={this.update('gender')} />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div className="gender-div flex-row">
                                <input type="radio" checked={this.state.gender === 'Other'} value='Male' value='Other' id="gender" onChange={this.update('gender')} />
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>
                        
                    </div>

                    <div className="section">
                        <div className="label">
                            Birthday
                        </div>
                        <input type="date" value={this.state.birthday} onChange={this.update('birthday')} id="birthday" />
                    </div>

                    <div className="section">
                        <div className="label">
                            About
                        </div>
                        <textarea id="about" value={this.state.about} cols="50" rows="8" onChange={this.update('about')}>
                        </textarea>
                    </div>
                    <button className="clicky">Save Changes</button>
                </form>
            </div>  
        )
    }
}

export default EditUserProfleForm;