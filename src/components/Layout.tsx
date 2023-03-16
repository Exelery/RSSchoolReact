// import React, { FunctionComponent } from 'react';
// import { NavLink } from 'react-router-dom';
// import '../styles/header.scss';

// export default class Layout extends React.Component<
//   { content: FunctionComponent },
//   { title: string }
// > {
//   constructor(props: { content: FunctionComponent }) {
//     super(props);
//     console.log(props.content.name);
//     this.state = {
//       title: props.content.name || '',
//     };
//   }
// setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'active-link' : '');
//   render() {
//     return (
//       <div>
//         {/* <header className="header">
//           <div className="name">{this.props.content.name} </div>
//           <div className="header__links">
//             <NavLink to="/" className={this.setActive}>
//               Home
//             </NavLink>
//             <NavLink to="/about" state={{ data: 'data' }} className={this.setActive}>
//               About
//             </NavLink>
//           </div>
//         </header> */}
//         {/* <div>{this.props.content('')}</div> */}
//         {/* <{{props.content}} /> */}
//       </div>
//     );
//   }
// }
