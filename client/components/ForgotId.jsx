  import React from 'react';
  import './ForgotId.css';
  import { Link } from 'react-router-dom';

  const ForgotId = () => {
    return (
      <div className="forgot-id-container">
        <div className="forgot-id-box">
          <div className="forgot-id-title">
            <h2>아이디 찾기</h2>
            <form>

              <div className="input-group">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" placeholder='이름을 입력해주세요' />
              </div>
            
              <div className="input-group">
                <label htmlFor="phone">연락처</label>
                <input type="tel" id="phone" name="phone" placeholder='- 없이 입력하세요'
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '');
                }}/>
              </div>

              <button type="submit" className="find-id-button">아이디 찾기</button>
              <div className='login-links'>
                <Link to="/forgot-password" className="forgot-password-link">비밀번호 찾기</Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default ForgotId;
