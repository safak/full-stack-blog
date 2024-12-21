import React from 'react';
import './Profile.css'; // Importing CSS for styling
import { FaComments, FaVideo, FaPhoneAlt } from 'react-icons/fa'; // Importing the icons

const ProfilePage = () => {
  // Example profile data
  const profileData = {
    name: 'John Doe',
    location: 'New York, USA',
    learn: 'Spanish',
    canTeach: 'English, French',
    bio: 'Passionate educator with over 5 years of experience teaching languages. I love connecting with people and sharing knowledge to help them grow.',
  };

  return (
    <div className="profile-container">
      {/* Main Profile Section */}
      <div className="main-content">
        <div className="profile-left">
          <div className="profile-details">
            <div className="profile-image"></div> {/* Profile Image */}
            <p><strong>Name:</strong> {profileData.name}</p>
            <p><strong>Location:</strong> {profileData.location}</p>
            <p><strong>Learn:</strong> {profileData.learn}</p>
            <p><strong>Can Teach:</strong> {profileData.canTeach}</p>

            <div className="icons">
              <FaComments id="chat-icon" /> {/* Chat Icon */}
              <FaVideo id="video-call-icon" /> {/* Video Call Icon */}
              <FaPhoneAlt id="phone-call-icon" /> {/* Phone Call Icon */}
            </div>
          </div>
        </div>

        {/* Profile Right Section */}
        <div className="profile-right">
          {/* Bio Section */}
          <div className="bio-section">
            <h2>Bio</h2>
            <p>{profileData.bio}</p>
          </div>

          {/* Reviews Section */}
          <div className="reviews">
            <div className="review-card">
              <p><strong>Review 1</strong></p>
              <p>"John simplifies complex topics, making them easy to understand. His enthusiasm and patience make learning enjoyable."</p>
            </div>
            <div className="review-card">
              <p><strong>Review 2</strong></p>
              <p>"John ensures everyone understands the material. His practical examples helped me grasp web technologies better."</p>
            </div>
            <div className="review-card">
              <p><strong>Review 3</strong></p>
              <p>"John is approachable and always willing to help. His teaching style creates a supportive environment for learning."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
