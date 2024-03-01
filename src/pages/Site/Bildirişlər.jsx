import React, { useEffect, useState } from 'react'
import './Bildirisler.css'
import Userleft from '../../components/Userleft/Userleft'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Bildirişlər = () => {
  const [notifications, setNotifications] = useState([])
  useEffect(() => {
    axios.get("https://localhost:7211/notifications").then(res => {
      setNotifications(res.data)
    }).catch(e => {
      console.log(e)
    })
  }, [])
  return (
    <div className="row-xpo">
      <div className="bn-p7q col-tsb">
        <a href="https://www.trendyol.com/">
          <div className="bn-img-8se banner-1kb style-pxcyL" id="style-pxcyL">
          </div>
        </a>
      </div>
      <div className="pt-c7z col-hr3 col-gal col-od6">
        <div className="container-vc9">
          <div className="header-nz9 mt-y58">
            <h2 className="title-5kd title-o46 upp-jj1">
              İstifadəçi paneli
            </h2>
            <ol className="breadcrumb-8yf">
              <li className="breadcrumb-item-gf2">
                <Link to={'/'}>
                  Ana səhifə
                </Link>
              </li>
              <li className="breadcrumb-item-gf2 act-689">
                <span>
                  İstifadəçi paneli
                </span>
              </li>
            </ol>
          </div>
          <div className="row-xpo">
            <div className="d-j2a block-thq col-ljn col-vwn col-3qn">
              <Userleft />
            </div>
            <div className="col-hr3 col-pht col-2ef">
              <div>
                <main>
                  <div>
                    <div className="d-fa6 align-3mo content-v17 mb-xcp">
                      <button type="button" className="btn-j12 btn-kwl btn-primary-1kb btn-9ek">
                        <span>
                          Yenilə
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-repeat">
                            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z">
                            </path>
                            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z">
                            </path>
                          </svg>
                        </span>
                      </button>
                      <button type="button" className="btn-j12 btn-kwl btn-primary-1kb btn-9ek">
                        <span>
                          Hamısını oxu
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check2-all">
                            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z">
                            </path>
                            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z">
                            </path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="card-v3k item-woc">
                      <div className="card-i74">
                        <div>
                          <div className="table-16g">
                            <table className="table-f62 table-aw7 table-fhj">
                              <thead>
                                <tr>
                                  <th>
                                    <div>
                                      №
                                    </div>
                                  </th>
                                  <th>
                                    <div>
                                      Mövzu
                                    </div>
                                  </th>
                                  <th>
                                    <div>
                                      Tarix
                                    </div>
                                  </th>
                                  <th>
                                    <div>
                                      Əməliyyat
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  notifications?.length == 0 ? <tr className='text-center'>
                                    <td>
                                      <div>
                                        <h4 className="text-bio">
                                          Bildiriş tapılmadı
                                        </h4>
                                      </div>
                                    </td>
                                  </tr> :
                                    notifications.map((item, i) => {
                                      return <tr key={i}>
                                        <td>

                                        </td>
                                      </tr>
                                    })
                                }

                              </tbody>
                            </table>
                          </div>
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
      <div className="bn-p7q col-tsb">
        <a href="https://instagram.com/pintravel.az?igshid=YzcxN2Q2NzY0OA==">
          <div className="bn-img-jar banner-1kb style-YMM57" id="style-YMM57">
          </div>
        </a>
      </div>
    </div>

  )
}

export default Bildirişlər
