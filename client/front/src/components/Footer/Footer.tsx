import { Link } from 'react-router-dom';
import './Footer.css';
import { FaHome } from 'react-icons/fa';
import { MdPets,MdPeople,MdPermContactCalendar  } from 'react-icons/md';





import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue-gradient" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h4 className="title">Ado(p)et</h4>
            <h6><p>
              Adopt a pet and save a life!
            </p></h6>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
              <Link to={'/'} ><FaHome/> Home Page</Link>
              </li>
              <li className="list-unstyled">
              <Link to={'/allPets'} ><MdPets/> Pets</Link>
              </li>
              <li className="list-unstyled">
              <Link to={'/about'} ><MdPeople/> About</Link>
              </li>
              <li className="list-unstyled">
              <Link to={'/contact'} ><MdPermContactCalendar/> Contact Us</Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.wwe.com/f/2019/01/tlc_12132009rf_1089--5ed6a6b8f3616585fd6c87730d18b4dc.jpg"> Matan Hassin </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;

