import Userleft from '../../components/Userleft/Userleft'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Sifarisler.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Sifarişlər() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const turkiyRef = useRef()
  const amerikaRef = useRef()
  const turkeyActiveRef = useRef()
  const amerikaActiveRef = useRef()
  const handleActive = () => {
    turkiyRef.current.classList.add('act-agd')
    amerikaRef.current.classList.remove('act-agd')

    turkeyActiveRef.current.classList.replace('d-none', 'd-flex')
    amerikaActiveRef.current.classList.replace('d-flex', 'd-none')
  }

  const handleDeactive = () => {
    turkiyRef.current.classList.remove('act-agd')
    amerikaRef.current.classList.add('act-agd')

    amerikaActiveRef.current.classList.replace('d-none', 'd-flex')
    turkeyActiveRef.current.classList.replace('d-flex', 'd-none')
  }

  return (
    <div className="row-nz3">
      <div className="bn-bvt col-8ye">
        <a href="https://www.trendyol.com/">
          <div className="bn-img-xv8 banner-oej style-eHMYy" id="style-eHMYy">
          </div>
        </a>
      </div>
      <div className="pt-j2b col-shn col-4ds col-d4t">
        <div className="container-jiz">
          <div className="header-hh9 mt-ern">
            <h2 className="title-663 title-1sc upp-1nq">
              İstifadəçi paneli
            </h2>
            <ol className="breadcrumb-9jc">
              <li className="breadcrumb-item-a34">
                <Link to={'/'}>
                  Ana səhifə
                </Link>
              </li>
              <li className="breadcrumb-item-a34 act-gvm">
                <span>
                  İstifadəçi paneli
                </span>
              </li>
            </ol>
          </div>
          <div className="row-nz3">
            <div className="d-3jm block-yam col-qj4 col-xyv col-8q7">
              <Userleft />
            </div>
            <div className="col-shn col-lo8 col-2l6">
              <div>
                <main>
                  <div className="d-o5f align-hm6 content-l7k mb-8ch">
                    <button type="button" className="btn-3qm btn-948 btn-primary-8r7 btn-cvw">
                      <span>
                        Yenilə
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-repeat">
                          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z">
                          </path>
                          <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z">
                          </path>
                        </svg>
                      </span>
                    </button>
                    <form className="form-dwt">
                      <select className="select-aaf" id="__B-n8e">
                        <option value="-1">
                          Hamısı
                        </option>
                        <option value="1">
                          Gözləmədə
                        </option>
                        <option value="2">
                          Icrada
                        </option>
                        <option value="3">
                          Problemli
                        </option>
                      </select>
                    </form>
                  </div>
                  <div className="row-nz3">
                    <div className="col-og1 col-8q7">
                      <div>
                        <ul className="nav-3so tabs-oyr card-x6o">
                          <li className="nav-item-ok2">
                            <button ref={turkiyRef} onClick={handleActive} className="nav-link-4bo act-gvm">
                              <img src="https://limak.az/new_front/assets/img/icons/tr-circle.svg" className="card-f73" />
                              <span>
                                Türkiyə
                              </span>
                            </button>
                          </li>
                          <li className="nav-item-ok2">
                            <button onClick={handleDeactive} ref={amerikaRef} className="nav-link-4bo">
                              <img src="https://limak.az/new_front/assets/img/icons/usa-circle.svg" className="card-f73" />
                              <span>
                                Amerika
                              </span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="card-qqj">
                        <div>
                          <div className="card-j7a item-hiw">
                            <div className="title-d84 p-8ql d-o5f content-2rm">
                              <h3>
                                Sifariş tapilmadi
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bn-bvt col-8ye">
        <a href="https://instagram.com/pintravel.az?igshid=YzcxN2Q2NzY0OA==">
          <div className="bn-img-odm banner-oej style-2ytzH" id="style-2ytzH">
          </div>
        </a>
      </div>
    </div>

  )
}

export default Sifarişlər;
