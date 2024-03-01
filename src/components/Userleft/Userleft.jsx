import React, { useEffect } from 'react'
import './Userleft.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Userleft = () => {
    const [username, setUsername] = useState(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {})
    const [error, setError] = useState("")
    const [dummy, setDummy] = useState(false)
    const navigate = useNavigate()
    // const [usersurname,setUsersurname]=useState([])


    useEffect(() => {
        axios.get("https://localhost:7211/auth/GetCurrentUserInfo").then(res => {
            setUsername(res.data)
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            setDummy(!dummy)
            console.log(res.data)
            // setUsersurname(res.data)
            // navigate('/')
            // {usersurname?.username}


        }).catch(err => {
            setError(err.message)
        })
    }, [])
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleExit = () => {

        setShowModal(true);
    };
    const handleConfirmExit = () => {
        localStorage.removeItem('userInfo')
        localStorage.removeItem('token')
        localStorage.removeItem('isLogin')
        window.location.href = "http://localhost:3000/";
    };
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const token = JSON.parse(localStorage.getItem('token'))

    return (
        <>
            <aside className="asi-3p2">
                <div className="card-7n2">
                    <div className="card-va6">
                        <div>
                            <div className="list-group-k4d nav-fo9 ">
                                <div className="list-group-item-r62">
                                    <i className="fa-solid fa-user mx-1"></i>
                                    <h3 className="title-pvs upp-qsi">
                                        {username?.name}
                                    </h3>
                                </div>
                                <div className="list-group-item-r62">
                                    <i className="fa-regular fa-circle-user mx-1"></i>
                                    <h3 className="title-pvs">
                                        <span>
                                            Müştəri̇ kodu
                                        </span>
                                        <strong>
                                            0256069
                                        </strong>
                                    </h3>
                                </div>

                                <div className="list-group-item-r62 nav-kn1">
                                    <Link to="/Bildirişlər">
                                        <i class="fa-regular fa-bell mx-1"></i>
                                        <h3 className="title-pvs">
                                            Bildirişlər
                                        </h3>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div className="list-group-k4d nav-ohl">
                            <div className="list-group-item-r62">
                                <Link to="/Sifarişlər" >
                                    <i class="fa-solid fa-bag-shopping mx-1"></i>
                                    <h3 className="title-3og">
                                        Sifarişlər
                                    </h3>
                                </Link>
                            </div>

                            <div className="list-group-item-r62">
                                <Link to="/Bağlamalar" >

                                    <i class="fa-solid fa-box-archive mx-1"></i>
                                    <h3 className="title-3og">
                                        Bağlamalar
                                    </h3>
                                </Link>
                            </div>
                            <div className="list-group-item-r62">
                                <Link to="/Xaricdəkiünvanlar">

                                    <i class="fa-solid fa-location-dot mx-1"></i>
                                    <h3 className="title-3og">
                                        Xaricdəki ünvanlar
                                    </h3>
                                </Link>
                            </div>

                            <div className="list-group-item-r62">
                                <Link to="/Kuryer">
                                    <i class="fa-solid fa-user-tie mx-1"></i>
                                    <h3 className="title-3og">
                                        Kuryer
                                    </h3>
                                </Link>
                            </div>
                            <div className="list-group-item-r62">
                                <Link to="/UserKargomatt">
                                    <img src="https://limak.az/new_front/assets/img/icons/kargomat.svg" className="mr-5po mx-1" />
                                    <h3 className="title-3og">
                                        Kargomat
                                    </h3>
                                    <span>
                                        <img src="https://limak.az/new_front/assets/img/loading.gif" height="16" width="16" />
                                    </span>
                                </Link>
                            </div>

                            <div className="list-group-item-r62">
                                <Link to="/Sorğu" >
                                    <i class="fa-regular fa-circle-question mx-1"></i>
                                    <h3 className="title-3og">
                                        Sorğu
                                    </h3>
                                </Link>
                            </div>



                        </div>
                        <div className="list-group-k4d aside-x35">

                            <div className="list-group-item-r62">
                                <Link to="/AZNbalans">
                                    <h3 className="title-kgi">
                                        AZN Balans
                                    </h3>
                                </Link>
                            </div>
                            <div className="list-group-item-r62">
                                <Link to="/Tənzimləmələr">

                                    <h3 className="title-kgi">
                                        Tənzimləmələr
                                    </h3>
                                </Link>
                            </div>
                            <div className="list-group-item-r62 style-xireJ" id="style-xireJ">
                                <button style={{ background: 'none', border: 'none', outline: "none" }} onClick={handleExit} >

                                    <h3 className="title-kgi">
                                        Hesabdan çıx
                                    </h3>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-7n2">
                    <div className="card-va6">
                        <div>
                            <div className="header-3kf">
                                <div className="title-mgr">
                                    <img src="https://limak.az/new_front/assets/img/icons/calculator.svg" />
                                    <h3>
                                        Məzənnə kalkulyatoru
                                    </h3>
                                </div>
                            </div>
                            <form>
                                <div className="input-xza input-pk4 mb-sm-o1w">
                                    <input type="number" placeholder="0.0" className="form-control-jqy" id="__B-ywe" />
                                    <div className="input-goh">
                                        <div className="dropdown-v84 btn-9zx">
                                            <button type="button" className="btn-5om dropdown-3wq btn-oey">
                                                USD
                                            </button>
                                            <ul className="dropdown-menu-nkb">
                                                <li>
                                                    <a href="#" className="dropdown-item-31v">
                                                        AZN
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item-31v act-3s8">
                                                        USD
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item-31v">
                                                        TRY
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item-31v">
                                                        RUB
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item-31v">
                                                        CNY
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-xza input-pk4">
                                    <input type="number" placeholder="0.0" className="form-control-jqy" id="__B-clr" />
                                    <div className="input-goh">
                                        <div className="dropdown-v84 btn-9zx">
                                            <button type="button" className="btn-5om dropdown-3wq btn-oey">
                                                AZN
                                            </button>
                                            <ul className="dropdown-menu-nkb">
                                                <li>
                                                    <a href="#" className="dropdown-item-31v act-3s8">
                                                        AZN
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item-31v">
                                                        USD
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item-31v">
                                                        TRY
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item-31v">
                                                        RUB
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item-31v">
                                                        CNY
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p className="form-g89">
                                    Günün məzənnəsinə uyğun hesablanır.
                                </p>
                            </form>
                            <div className="table-vyq">
                                <div className="title-mgr">
                                    <img src="https://limak.az/new_front/assets/img/icons/change.svg" />
                                    <h3>
                                        Günlük məzənnə
                                    </h3>
                                </div>
                                <table className="table-grx table-ihf">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div>
                                                    Country
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    Currency
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src="https://limak.az/new_front/assets/img/icons/tr-circle.svg" />
                                                <span>
                                                    1
                                                </span>
                                            </td>
                                            <td>
                                                <strong>
                                                    TRY
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="https://limak.az/new_front/assets/img/icons/az-circle.svg" />
                                                <span>
                                                    0.0542
                                                </span>
                                            </td>
                                            <td>
                                                <strong>
                                                    AZN
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="https://limak.az/new_front/assets/img/icons/usa-circle.svg" />
                                                <span>
                                                    0.0319243
                                                </span>
                                            </td>
                                            <td>
                                                <strong>
                                                    USD
                                                </strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </aside>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <img src="https://limak.az/new_front/assets/img/SehifeYuklenmedi.png" alt="Sehife Yuklenmedi" />
                        <p>Çıxış etməyə əminsiniz?</p>
                        <div style={{ display: "flex", gap: "70px", padding: "30px" }}>
                            <button style={{ width: "100px" }} onClick={handleCloseModal}>XEYR</button>
                            <button style={{ width: "100px" }} onClick={handleConfirmExit}>BƏLİ</button>
                        </div>
                    </div>
                </div>
            )}

        </>








    )
}

export default Userleft
