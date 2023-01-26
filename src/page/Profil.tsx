import React, { useState } from 'react';

interface UserProfile {
  name: string;
  email: string;
  bio: string;
}

interface Props {
  user: UserProfile;
  onSave: (updatedUser: UserProfile) => void;
}

const UserProfileView: React.FC<Props> = ({ user, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
  });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setFormData({
      name: user.name,
      email: user.email,
      bio: user.bio,
    });
  };

  const handleSaveClick = () => {
    setEditing(false);
    onSave({ ...user, ...formData });
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      {editing ? (
        <>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea
              className="form-control"
              name="bio"
              value={formData.bio}
              onChange={handleFormChange}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSaveClick}>Save</button>
          <button className="btn btn-secondary" onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.bio}</p>
          <button className="btn btn-primary" onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
};

export default UserProfileView;
