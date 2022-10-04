import React from 'react';

// const styles = {
//   textBox: {
//     height: '100px',
//     backgroundColor: 'white',
//     width: '33%',
//   }
// }

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <form className='contact'>
        <div className="row mb-3">
          <label for="inputName" className="col-sm-2 col-form-label fs-5 fw-bold">Name:</label>
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" id="inputName"></input>
        </div>
        <div className="row mb-3">
          <label for="inputEmail" className="col-sm-2 col-form-label fs-5 fw-bold">Email:</label>
        </div>
        <div className="col-sm-4">
          <input type="email" className="form-control" id="inputEmail"></input>
        </div>
        <div className="row mb-3">
          <label for="inputMessage" className="col-sm-2 col-form-label fs-5 fw-bold">Message:</label>
        </div>
        <div className="col-sm-14">
          <textarea placeholder="Leave a comment here" className='mediaContact textBox'></textarea>
          <label for="floatingTextarea2"></label>
        </div>
      <br></br>
      <button type="submit" className="col-sm-1 btn btn-warning">Submit</button>
      </form>
    </div>
  );
}