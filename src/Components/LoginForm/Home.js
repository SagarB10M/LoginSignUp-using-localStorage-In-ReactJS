import React from 'react';

const  Home = () => {

  const logout =()=> {
    localStorage.removeItem("signUp")
    window.location.reload()
  }

  const deleteAccount =()=> {
    localStorage.clear()
    window.location.reload()
  }
  

  return (
    <div className='home'>
      <h2>Welcome to the Home page</h2>
      <br></br>
      <strong><p style={{fontSize: "60px"}}>Hi Hello {localStorage.getItem("name")}</p></strong>
      <br></br>
      <button onClick={logout} className='logout'>Logout</button>
      <button onClick={deleteAccount} className='delete'>Delete Account</button>
      
    </div>
  );
};

export default Home;
