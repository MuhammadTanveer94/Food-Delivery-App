// import React, { Component } from "react";

// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import {Button} from '../../component/buttons/bootstrapButton'
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// // import './UserProfile.css'

// const styles = theme => ({
//   margin: {
//     margin: theme.spacing.unit
//   },
//   extendedIcon: {
//     marginRight: theme.spacing.unit
//   },
//   root: {
//     ...theme.mixins.gutters(),
//     paddingTop: theme.spacing.unit * 2,
//     paddingBottom: theme.spacing.unit * 2,
//     marginTop: theme.spacing.unit * 2,
//     marginBottom: theme.spacing.unit * 4
//   }
// });

// class MapControl extends Component {
//   constructor() {
//     super();
//     this.state = {
//         top: false
//     };
//   }

//   toggleDrawer = (side, open) => () => {
//       console.log("map")
//     this.setState({
//     //   top: this.props.drawerOpen,
//     });
//   };

// //   componentDidUpdate(prevProps, prevState) {
// //     // only update chart if the data has changed
// //     if (prevProps.drawerOpen !== this.props.drawerOpen) {
// //         this.setState({
// //             top: this.props.drawerOpen,
// //           });
// //     }
// //   }

//   render() {
//     const { classes, drawerOpen } = this.props;
//     let {top} = this.state;
//     console.log(drawerOpen, top)
//     return (
//       <div class="">
//          <SwipeableDrawer
//           anchor="top"
//           open={this.state.top}
//           onClose={this.toggleDrawer('top', false)}
//           onOpen={this.toggleDrawer('top', true)}
//         >
//           <div
//             tabIndex={0}
//             role="button"
//             onClick={this.toggleDrawer('top', false)}
//             onKeyDown={this.toggleDrawer('top', false)}
//           >
            
//           </div>
//         </SwipeableDrawer>
//       </div>
//     );
//   }
// }

// MapControl.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(MapControl);
