import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="profile_img_wrap">
          <img className="profile_img" src={require('../assets/dp.jpeg')} alt="Saurabh Merai" />
        </div>
        <p className="name"> Saurabh Merai</p>
        <p className="line">
          <FontAwesome name="address-card" className="banner_icons" />
          500 East 33rd Street APT 2009, Chicago-60616.
          </p>
        <p className="line">
          <FontAwesome name="envelope" className="banner_icons" />
          saurabhmerai2209@gmail.com
        </p>
        <p className="line">
          <FontAwesome name="phone" className="banner_icons" />
          (682)-564-6071
        </p>
      </div>
    )
  }
}

export default Banner;
