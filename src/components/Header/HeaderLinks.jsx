import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import "./header.css"
import axios from 'axios';
class HeaderLinks extends Component {
 constructor(props){
  super(props);
 }
 
 handleCollapseButtonClick = (props) => {
  this.props.handleCollapseButtonClick();
};

 render() {
  axios.get(`http://localhost:3300`)
  .then(res => {
    const persons = res.data;
  })
  const notification = (
   <div>
    <i className="far fa-bell" />
    <b className="caret" />
    <span className="notification">5</span>
    <p className="hidden-lg hidden-md">Notification</p>
   </div>
  );
  const logout = (
   <div>
    <i className="fas fa-list-ul" />
    <b className="caret" />
    <p className="hidden-lg hidden-md">LogOut</p>
   </div>
  );
  const globe = (
   <div>
    <i className="fas fa-globe-asia "></i>
    {/* classNAme="fa fa-ellipsis-v visible-on-sidebar-regular" */}
    <b className="caret" />
    <p className="hidden-lg hidden-md">Globe</p>
   </div>
  );
  return (
   <div>
    <Nav>
     {
     (this.props.parent!=="sidebar")&&
     <NavItem eventKey={1} className="custom">
      <button className="btn btn-warning btn-fill btn-round btn-icon d-none d-lg-block" onClick={this.handleCollapseButtonClick}>
       <i className="fa fa-ellipsis-v "></i>
      </button>
      <p className="hidden-lg hidden-md">SideBarLink</p>
     </NavItem>}
     <NavItem eventKey={2} style={{
      width: "0px",
      paddingTop: "0px",
      paddingRight: "0px",
      paddingBottom: "0px",
      paddingLeft: "0px",
      marginTop: "0px",
      marginBottom: '0px',
      marginRight: "0px",
     }}>
      <div id="container" style={{ width: "100%" }}>
       <div id="search_con" style={{ width: "100%", height: "0px", float: "left !important" }}>
        <svg width="17px" height="17px" viewBox="0 0 490 490" version="1.1" marginRight="0px" paddingRight="0px">
         <path xmlns="http://www.w3.org/2000/svg" d="M469.725,418.417l-125.32-125.328c57.936-86.275,34.963-203.18-51.312-261.116S89.913-2.989,31.977,83.286  s-34.963,203.18,51.312,261.116c63.446,42.605,146.358,42.605,209.804,0l125.32,125.328c14.169,14.169,37.143,14.169,51.312,0  S483.895,432.587,469.725,418.417z M188.357,360.353c-94.949-0.106-171.894-77.051-172-172c0-94.993,77.007-172,172-172  s172,77.007,172,172S283.35,360.353,188.357,360.353z M458.421,458.41c-3.805,3.808-8.969,5.946-14.352,5.944  c-5.382,0.016-10.547-2.121-14.344-5.936L307.669,336.353l28.688-28.688l122.056,122.064  C466.335,437.647,466.339,450.488,458.421,458.41z" />
         <path xmlns="http://www.w3.org/2000/svg" d="M192.573,32.409l-0.424,16c41.401,1.072,80.192,20.463,105.896,52.936l12.528-9.952  C281.926,55.215,238.705,33.61,192.573,32.409z" />
         <path xmlns="http://www.w3.org/2000/svg" d="M322.245,108.233l-13.72,8.232c2.981,4.953,5.653,10.085,8,15.368l14.592-6.464  C328.513,119.481,325.551,113.758,322.245,108.233z" />
        </svg>  </div>
       <div id="submit_con" style={{ width: "100%", marginLeft: "30px", marginTop: "0px" }}>
        <input type="text" className="center" placeholder="Search" style={{ border: "0px" }} />
       </div>
      </div>
     </NavItem>
    </Nav>
    <Nav pullRight>
     <NavDropdown
      eventKey={2}
      title={globe}
      noCaret
      id="basic-nav-dropdown"
     >
      <MenuItem eventKey={2.1}> <span style={{ float: "left", marginRight: "25px", fontSize: "16px", fontWeight: "400", padding: "5px" }} >Create New Post</span></MenuItem>
      <MenuItem eventKey={2.2}> <span style={{ float: "left", marginRight: "25px", fontSize: "16px", fontWeight: "400", padding: "5px" }} >Manage Something</span></MenuItem>
      <MenuItem eventKey={2.3}> <span style={{ float: "left", marginRight: "25px", fontSize: "16px", fontWeight: "400", padding: "5px" }} >Do Nothing</span></MenuItem>
      <MenuItem eventKey={2.4}> <span style={{ float: "left", marginRight: "25px", fontSize: "16px", fontWeight: "400", padding: "5px" }} >Submit to Live</span></MenuItem>
      <hr style={{ marginTop: "30px", marginBottom: "0px" }} />
      <MenuItem eventKey={2.5}> <span style={{ float: "left", marginRight: "25px", fontSize: "16px", fontWeight: "400", marginBottom: "10px", padding: "5px" }} >Another Action</span></MenuItem>
     </NavDropdown>
     <NavDropdown
      eventKey={2}
      title={notification}
      noCaret
      id="basic-nav-dropdown-right"
     >
      <MenuItem eventKey={2.1}> <span style={{ float: "left", marginRight: "25px", fontSize: "16px", fontWeight: "400", padding: "5px" }} >Notification 1</span></MenuItem>
      <MenuItem eventKey={2.2}> <span style={{ float: "left", marginRight: "25px", fontSize: "16px", fontWeight: "400", padding: "5px" }} >Notification 2</span></MenuItem>
      <MenuItem eventKey={2.3}> <span style={{ float: "left", marginRight: "25px", fontSize: "16px", fontWeight: "400", padding: "5px" }} >Notification 3</span></MenuItem>
      <MenuItem eventKey={2.4}> <span style={{ float: "left", marginRight: "25px", fontSize: "16px", fontWeight: "400", padding: "5px" }} >Notification 4</span></MenuItem>
      <MenuItem eventKey={2.5}> <span style={{ float: "left", marginRight: "25px", fontSize: "16px", fontWeight: "400", marginBottom: "10px", padding: "5px" }} >Notification 5</span></MenuItem>
     </NavDropdown>
     {/* <NavItem eventKey={3} href="#">
      Log out
     </NavItem> */}
     <NavDropdown
      eventKey={2}
      title={logout}
      noCaret
      id="basic-nav-dropdown"
     >
      <MenuItem eventKey={2.1}>
       <svg width="25px" height="25px" viewBox="0 0 80 80" version="1.1" marginRight="0px" >
        <path xmlns="http://www.w3.org/2000/svg" d="M53.146,6.105H5.837C2.619,6.105,0,8.729,0,11.954v35.08c0,3.226,2.619,5.846,5.837,5.846h47.312   c3.218,0,5.836-2.62,5.836-5.846v-35.08C58.982,8.729,56.363,6.105,53.146,6.105z M56.523,47.031   c0,1.865-1.518,3.387-3.379,3.387H5.837c-1.862,0-3.379-1.521-3.379-3.387V11.954c0-1.865,1.518-3.386,3.379-3.386h47.312   c1.86,0,3.379,1.521,3.379,3.386L56.523,47.031L56.523,47.031z M38.029,29.059l12.104-12.123c0.48-0.479,0.48-1.26,0-1.74   c-0.479-0.479-1.257-0.479-1.734,0L29.491,34.131L10.955,15.562c-0.479-0.479-1.257-0.479-1.737,0   c-0.479,0.481-0.479,1.26,0,1.741l12.053,12.069L9.414,41.25c-0.479,0.479-0.479,1.26,0,1.736c0.24,0.24,0.554,0.361,0.869,0.361   c0.315,0,0.629-0.121,0.869-0.361l11.854-11.873l5.617,5.627c0.24,0.239,0.554,0.36,0.869,0.36c0.315,0,0.629-0.121,0.869-0.36   l5.932-5.94L48.46,42.986c0.24,0.24,0.556,0.361,0.869,0.361s0.628-0.121,0.869-0.361c0.479-0.479,0.479-1.26,0-1.736   L38.029,29.059z" />
       </svg>
       <span style={{ float: "right", marginRight: "25px", fontSize: "16px", fontWeight: "400", paddingBottom: "5px" }} >Messages</span></MenuItem>
      <MenuItem eventKey={2.2}>
       <svg width="19px" height="18px" viewBox="0 0 500 500" version="1.1" marginRight="0px"
       ><path xmlns="http://www.w3.org/2000/svg" d="M506.811,204.433c-3.365-16.445-8.386-32.62-14.923-48.075c-6.417-15.173-14.359-29.806-23.606-43.493 c-9.157-13.553-19.671-26.297-31.251-37.877c-11.582-11.582-24.326-22.097-37.877-31.253c-13.689-9.248-28.323-17.19-43.492-23.605 c-15.457-6.537-31.632-11.559-48.076-14.924c-16.868-3.451-34.221-5.201-51.578-5.201c-68.382,0-132.67,26.629-181.023,74.982 C26.629,123.34,0,187.629,0,256.011c0,11.86,10.793,16.005,20.986,13.808c5.642-1.216,10.837-3.911,15.98-6.53 c11.322-5.766,25.353-12.279,38.286-12.279c6.966,0,14.897,4.058,23.293,8.354c10.669,5.459,22.763,11.646,36.958,11.646 s26.289-6.188,36.958-11.646c8.396-4.297,16.328-8.354,23.293-8.354s14.897,4.058,23.293,8.354 c6.701,3.429,13.965,7.143,21.958,9.433v198.211c0,24.813,20.193,45,45.014,45c24.813,0,45-20.187,45-45v-15.997 c0-8.284-6.716-15-15-15s-15,6.716-15,15v15.997c0,8.271-6.729,15-15,15c-8.279,0-15.014-6.729-15.014-15V268.797 c7.993-2.29,15.257-6.004,21.958-9.433c8.396-4.297,16.328-8.354,23.293-8.354s14.897,4.058,23.293,8.354 c10.669,5.459,22.763,11.646,36.958,11.646c13.481,0,25.246-5.653,36.958-11.646c8.396-4.297,16.327-8.354,23.293-8.354 c17.732,0,33.829,11.197,49.807,17.43c10.629,4.147,25.445,1.707,25.445-12.429C512.012,238.647,510.262,221.294,506.811,204.433z  M112.209,232.657c-10.669-5.46-22.763-11.647-36.958-11.647c-16.297,0-31.004,6.189-44.096,12.063 c9.284-91.677,73.593-167.331,159.286-193.358c-7.427,10.091-14.318,22.01-20.549,35.651c-20.116,44.043-32.05,102.778-33.69,165.62 c-0.233,0.009-0.468,0.025-0.7,0.025C128.537,241.011,120.606,236.953,112.209,232.657z M316.257,221.01 c-14.195,0-26.289,6.188-36.958,11.647c-8.396,4.296-16.328,8.354-23.293,8.354s-14.897-4.058-23.293-8.354 c-10.669-5.46-22.763-11.647-36.958-11.647c-10.809,0-20.396,3.589-29.067,7.711c2.71-53.875,13.388-103.44,30.494-140.89 c16.785-36.749,38.226-57.826,58.824-57.826c39.717,0,83.409,79.078,89.331,198.723C336.662,224.602,327.071,221.01,316.257,221.01z  M436.76,221.01c-14.195,0-26.289,6.188-36.958,11.647c-8.396,4.296-16.328,8.354-23.293,8.354c-0.23,0-0.463-0.016-0.695-0.025 c-1.627-62.337-13.368-120.6-33.227-164.587c-6.366-14.101-13.432-26.38-21.06-36.737c7.622,2.306,15.127,5.002,22.446,8.097 c13.386,5.66,26.3,12.67,38.384,20.833c11.969,8.087,23.226,17.375,33.458,27.607c10.23,10.23,19.518,21.487,27.606,33.459 c8.162,12.081,15.172,24.996,20.835,38.385c5.766,13.632,10.194,27.897,13.163,42.403c1.525,7.45,2.673,15.01,3.44,22.628 C467.768,227.201,453.059,221.01,436.76,221.01z" />
       </svg>
       <span style={{ float: "right", marginRight: "13px", fontSize: "16px", fontWeight: "400", paddingBottom: "5px" }} >Help Center</span></MenuItem>
      <MenuItem eventKey={2.3}><svg width="30px" height="30px" viewBox="0 0 970 970" version="1.1" marginRight="0px" >
       <path d="M482.059,385.817c-10.639-7.487-22.917-11.509-35.319-12.165c-46.744-30.61-77.364-53.585-95.241-71.462l-54.915-54.915  l33.324-37.302c6.316,3.565,13.099,5.914,19.884,6.883c5.12,0.853,8.533,0.853,11.947,0.853c6.827,0,8.533,0,15.36,5.973  c-3.413,2.56-5.12,6.827-5.12,11.093s1.707,9.387,5.12,12.8l29.867,29.867c4.267,5.12,11.093,7.68,17.92,7.68  s13.653-2.56,17.92-8.533l60.587-60.587c5.12-4.267,7.68-11.093,7.68-17.92s-2.56-12.8-7.68-17.92l-29.867-29.867  c-3.413-3.413-7.68-5.12-11.947-5.12s-8.533,2.56-11.947,5.12c-6.827-5.973-6.827-7.68-6.827-14.507c0-3.413,0-7.68-1.707-12.8  c-1.707-11.947-7.68-23.893-17.067-33.28l-30.72-30.72c-17.92-17.92-26.453-26.453-49.493-36.693  c-49.493-23.04-99.84-18.773-173.227,14.507c-4.267,1.707-5.973,5.12-5.12,9.387s4.267,6.827,8.533,6.827h11.093  c37.547,0,57.173,0,91.307,34.133c14.946,14.946,15.377,37.863,1.986,54.724c-1.805,0.272-3.179,1.082-4.546,2.449l-37.906,42.308  l-28.654-28.654c-31.494-31.494-53.646-61.291-70.695-94.47c-0.895-16.789-7.632-32.497-19.758-44.623  C102.325,4.377,81.845-2.45,61.365-0.743c-2.56,0.853-5.12,2.56-5.973,4.267c-1.707,2.56-1.707,5.973,0,8.533l23.893,42.667  c-5.12,11.093-17.067,17.92-29.013,17.067L25.525,30.83c-0.853-2.56-4.267-4.267-6.827-4.267c-2.56-0.853-5.12,0.853-6.827,3.413  c-20.48,30.72-12.8,71.68,17.92,93.013c10.584,7.56,22.508,11.764,34.584,12.626c0.135,0.057,0.262,0.127,0.402,0.174  c33.28,17.067,63.147,39.253,94.72,70.827l31.209,30.499L9.312,439.577c-6.827,6.827-10.24,16.213-10.24,25.6  c0,9.387,3.413,17.92,10.24,24.747l11.947,11.947c6.827,5.973,15.36,9.387,23.893,9.387s17.92-3.413,24.747-10.24l181.187-202.813  l52.626,52.626c17.903,17.903,40.917,49.435,71.594,95.444c1.1,16.423,7.821,31.757,19.713,43.649  c12.8,12.8,29.867,19.627,47.787,19.627c2.56,0,5.12,0,6.827,0c2.56,0,5.12-1.707,6.827-4.267s1.707-5.973,0-8.533l-24.747-41.813  c5.973-11.093,17.067-17.92,29.867-17.067l23.893,40.96c0.853,2.56,4.267,4.267,6.827,4.267c3.413-0.853,5.973-1.707,7.68-4.267  C520.459,448.11,511.925,407.15,482.059,385.817z M287.499,73.497c-27.307-26.453-47.787-34.987-70.827-37.547  c48.64-15.36,84.48-14.507,120.32,1.707c20.48,8.533,27.307,15.36,45.227,33.28l30.72,30.72  c6.827,6.827,11.093,15.36,11.947,23.893c0.853,4.267,0.853,7.68,0.853,10.24c0,9.387,0.853,16.213,11.093,26.453  c3.413,3.413,8.533,5.12,12.8,5.12c5.12,0,9.387-1.707,11.947-5.12l29.867,29.867c1.707,1.707,2.56,3.413,2.56,5.973  s-0.853,4.267-2.56,5.973l-60.587,60.587c-3.413,3.413-8.533,3.413-11.947,0l-29.867-29.867c3.413-2.56,5.12-6.827,4.267-11.947  c0-4.267-1.707-9.387-5.12-12.8c-10.24-10.24-17.067-11.093-26.453-11.093c-2.56,0-5.973,0-10.24-0.853  c-9.387-0.853-17.067-5.12-23.893-11.947l-36.693-36.693C309.685,126.404,307.979,93.977,287.499,73.497z M19.552,53.017  l17.92,30.72c1.707,2.56,4.267,4.267,6.827,4.267h4.267c19.627,0.853,37.547-9.387,46.08-26.453l1.707-4.267  c1.707-2.56,1.707-5.12,0-7.68L77.579,17.177c10.24,1.707,19.627,6.827,27.307,14.507c8.798,9.531,14.431,21.585,14.764,34.533  c-0.165,0.657-0.258,1.364-0.258,2.161c0,3.952-0.477,7.807-1.36,11.523c-3.219,12.356-10.938,23.129-21.68,30.291  c-17.067,11.093-40.107,11.093-57.173-0.853C21.259,96.537,13.579,73.497,19.552,53.017z M171.445,194.67  c-25.6-26.453-51.2-46.933-78.507-63.147c4.267-1.707,9.387-4.267,13.653-6.827c12.8-8.533,21.333-19.627,26.453-33.28  c16.213,27.307,36.693,52.907,62.293,78.507l29.31,29.31l-22.985,25.655L171.445,194.67z M57.952,488.217  c-6.827,6.827-17.92,7.68-24.747,0.853l-11.947-11.093c-3.413-3.413-5.12-7.68-5.12-11.947c0-5.12,1.707-9.387,5.973-13.653  l4.833-5.407l12.234,12.234c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56c3.413-3.413,3.413-8.533,0-11.947  l-12.904-12.904l11.277-12.617l13.574,13.574c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56  c3.413-3.413,3.413-8.533,0-11.947L60.775,409.12l219.494-245.573l35.84,35.84l-35.215,39.399  c-1.006,0.426-1.896,1.077-2.782,1.964l-34.133,38.4c-0.975,0.975-1.661,2.091-2.079,3.264L57.952,488.217z M262.762,285.134  l23.353-26.14l55.143,55.143c15.36,16.213,41.813,36.693,80.213,62.293c-5.12,1.707-10.24,4.267-15.36,7.68  c-10.587,6.617-18.085,15.804-23.31,25.96c-0.077,0.145-0.148,0.293-0.224,0.439c-0.31,0.611-0.612,1.225-0.906,1.843  c-0.421,0.875-0.821,1.76-1.204,2.654c-0.262,0.605-0.523,1.21-0.77,1.819c-0.035,0.088-0.069,0.176-0.104,0.264  c-0.269,0.668-0.536,1.336-0.788,2.008c-4.847-7.109-9.51-13.818-13.995-20.138l11.435-11.435c3.413-3.413,3.413-8.533,0-11.947  c-3.413-3.413-8.533-3.413-11.947,0l-9.513,9.513c-3.546-4.812-6.971-9.351-10.275-13.618l7.842-7.842  c3.413-3.413,3.413-8.533,0-11.947c-3.413-3.413-8.533-3.413-11.947,0l-6.514,6.514c-6.272-7.559-12.057-13.992-17.379-19.314  L262.762,285.134z M491.445,455.79l-17.92-30.72c-1.707-2.56-4.267-4.267-6.827-4.267h-4.267  c-19.627-1.707-37.547,9.387-46.08,26.453l-1.707,4.267c-1.707,2.56-1.707,5.12,0,7.68l18.773,32.427  c-10.24-1.707-19.627-6.827-27.307-14.507c-8.631-9.351-14.21-21.13-14.735-33.797c0.146-0.624,0.228-1.294,0.228-2.043  c0-10.81,3.432-20.931,9.413-29.504c3.675-5.114,8.271-9.591,13.627-13.162c8.533-5.973,17.92-8.533,28.16-8.533  c10.24,0,20.48,3.413,29.013,9.387C489.739,412.27,497.419,435.31,491.445,455.79z" />
      </svg><span style={{ float: "right", marginRight: "37px", marginLeft: "5px !important", fontWeight: "400", fontSize: "16px", paddingBottom: "5px" }} >Settings</span></MenuItem>
      <hr style={{ marginTop: "0px", marginBottom: "0px" }} />
      <MenuItem eventKey={2.4}><svg width="23px" height="23px" viewBox="0 0 600 600" version="1.1" marginRight="0px" >
       <path xmlns="http://www.w3.org/2000/svg" d="M396,252.125H171V115c0-46.869,38.131-85,85-85s85,38.131,85,85v41.642h-25c-8.284,0-15,6.716-15,15s6.716,15,15,15h40  c8.284,0,15-6.716,15-15V115C371,51.589,319.411,0,256,0S141,51.589,141,115v137.125h-25c-8.284,0-15,6.716-15,15V357  c0,85.467,69.533,155,155,155s155-69.533,155-155v-89.875C411,258.84,404.284,252.125,396,252.125z M381,357  c0,68.925-56.075,125-125,125s-125-56.075-125-125v-74.875h250V357z" />
       <path xmlns="http://www.w3.org/2000/svg" d="M256,322.062c-22.056,0-40,17.944-40,40c0,16.753,10.357,31.124,25,37.071v27.929c0,8.284,6.716,15,15,15s15-6.716,15-15  v-27.929c14.643-5.947,25-20.318,25-37.071C296,340.006,278.056,322.062,256,322.062z M256,372.062c-5.514,0-10-4.486-10-10  c0-5.514,4.486-10,10-10c5.514,0,10,4.486,10,10C266,367.576,261.514,372.062,256,372.062z" /></svg>
       <span style={{ float: "right", marginRight: "10px", fontWeight: "400", fontSize: "16px", paddingBottom: "5px" }} >Lock Screen</span></MenuItem>
      <MenuItem eventKey={2.5}>
       <svg width="27px" height="27px" viewBox="0 0 1000 1000" version="1.1" marginRight="0px" >
        <path xmlns="http://www.w3.org/2000/svg" d="M489.738,74.368c-5.034-3.495-10.779-5.192-16.484-5.251c-9.516-0.119-18.913,4.343-24.717,12.733   c-9.318,13.464-5.962,31.903,7.482,41.221c66.767,46.236,106.626,122.005,106.626,202.671   c0,136.081-110.693,246.774-246.774,246.774S69.097,461.823,69.097,325.742c0-80.666,39.859-156.435,106.626-202.69   c13.464-9.299,16.8-27.757,7.482-41.221c-5.922-8.548-15.557-13.01-25.25-12.694c-5.528,0.158-11.076,1.856-15.952,5.232   C59.266,131.679,9.871,225.65,9.871,325.742c0,168.734,137.266,306,306,306s306-137.266,306-306   C621.871,225.65,572.477,131.679,489.738,74.368z M315.871,236.903c16.366,0,29.613-13.267,29.613-29.613V29.613   C345.484,13.267,332.237,0,315.871,0s-29.613,13.267-29.613,29.613v177.677C286.258,223.637,299.505,236.903,315.871,236.903z"
         fill="red" /></svg>
       <span style={{ float: "right", marginRight: "42px", color: "red", fontWeight: "400", fontSize: "16px", paddingBottom: "0px" }} >Log Out</span></MenuItem>
     </NavDropdown>
    </Nav>
   </div>
  );
 }
}
export default HeaderLinks;