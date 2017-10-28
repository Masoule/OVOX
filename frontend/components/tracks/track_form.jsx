// import React from 'react';
// import { Link } from 'react-router-dom';
//
//
// class TrackForm extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     const track = Object.assign({}, this.state);
//     // this.props.processForm(track)
//   }
//
//   update(field) {
//     return (e) => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }
//
//   render () {
//
//     return (
//       <div className="modal-background"
//         onClick={this.hideModal}>
//
//         <div
//           className='auth-modal'
//           onClick={ (e)=> e.stopPropagation() }
//           >
//
//           <div className='auth-modal-content'>
//
//             <form
//               className='auth-form'
//               onSubmit={this.handleSubmit}>
//
//               <h1 className='form-title'>
//                 {formHeader}
//               </h1>
//
//               <div className='form-input'>
//                 <label className='form-label'></label>
//                 <input
//                   className='textfield'
//                   type="text"
//                   value={this.state.username}
//                   onChange={this.update('username')}
//                   />
//               </div>
//
//               <div className='form-input'>
//                 <label className='form-label'>
//                   {passwordText}
//                 </label>
//                 <input
//                   className='textfield'
//                   type="password"
//                   value={this.state.password}
//                   onChange={this.update('password')}
//                   />
//               </div>
//
//               <div className='form-button'>
//                 <input
//                   className='button'
//                   type="submit"
//                   value={this.props.formType}
//                   />
//               </div>
//
//               <div className='errors'>
//                 {this.renderErrors()}
//               </div>
//             </form>
//
//             <div className='small-link'>
//               <span className='small-text'>{redirectText}</span>
//               <Link to={linkPath}>
//                 {linkName}
//               </Link>
//             </div>
//
//           </div>
//         </div>
//       </div>
//     )
//   }
//
// }
//
// export default TrackForm;
