import React from 'react'
import Userleft from '../../../components/Userleft/Userleft'
import { Link } from 'react-router-dom'
import './User.css'
const User = () => {
    return (
        <div className="row-148">
            <div className="bn-45f col-ofv">
                <a href="https://www.trendyol.com/">
                    <div className="bn-img-o31 banner-val style-Nvs2y" id="style-Nvs2y">
                    </div>
                </a>
            </div>
            <div className="pt-chr col-7tv col-ga2 col-py5">
                <div className="container-di3">
                    <div className="header-e99 mt-g1b">
                        <h2 className="title-9l9 title-q9s upp-qsi">
                            İstifadəçi paneli
                        </h2>
                        <ol className="breadcrumb-ekt">
                            <li className="breadcrumb-item-n6o">
                                <Link to={'/'}>
                                    Ana səhifə
                                </Link>
                            </li>
                            <li className="breadcrumb-item-n6o act-3s8">
                                <span>
                                    İstifadəçi paneli
                                </span>
                            </li>
                        </ol>
                    </div>
                    <div className="row-148">
                        <div className="d-z6k block-8q9 col-qwq col-3rh col-6x4">
                            <Userleft />
                        </div>
                        <div className="col-7tv col-c2h col-oo8">
                            <div>
                                <main>
                                    <div>
                                        <div className="row-148">
                                            <div className="col-mox col-fzr">
                                                <Link to={'/Sifarişlər'} className="card-zso">
                                                    <div className="card-7n2 card-sff">
                                                        <div className="card-va6">
                                                            <img src="https://limak.az/new_front/assets/img/dashboard/icons/bag-color.svg" className="card-o52" />
                                                            <h4 className="title-qrs">
                                                                Sifarişlər
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>

                                            <div className="col-mox col-fzr">
                                                <Link to={'/Bağlamalar'} className="card-zso">
                                                    <div className="card-7n2 card-sff">
                                                        <div className="card-va6">
                                                            <img src="https://limak.az/new_front/assets/img/dashboard/icons/box-color.svg" className="card-o52" />
                                                            <h4 className="title-qrs">
                                                                Bağlamalar
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-mox col-fzr">
                                                <Link to={'/Xaricdəkiünvanlar'} className="card-zso">
                                                    <div className="card-7n2 card-sff">
                                                        <div className="card-va6">
                                                            <img src="https://limak.az/new_front/assets/img/dashboard/icons/location-color.svg" className="card-o52" />
                                                            <h4 className="title-qrs">
                                                                Xaricdəki ünvanlar
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-mox col-fzr">
                                                <   Link to={'/Kuryer'} className="card-zso">
                                                    <div className="card-7n2 card-sff">
                                                        <div className="card-va6">
                                                            <img src="https://limak.az/new_front/assets/img/dashboard/icons/employee-color.svg" className="card-o52" />
                                                            <h4 className="title-qrs">
                                                                Kuryer
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </ Link>
                                            </div>
                                            <div className="col-mox col-fzr">
                                                <Link to={'/Sorğu'} className="card-zso">
                                                    <div className="card-7n2 card-sff">
                                                        <div className="card-va6">
                                                            <img src="https://limak.az/new_front/assets/img/dashboard/icons/chat-color.svg" className="card-o52" />
                                                            <h4 className="title-qrs">
                                                                Sorğu
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <a href="https://play.google.com/store/apps/details?id=az.limakg" className="panel-xps">
                                            <div id="style-EYVnf" className="style-EYVnf">
                                                <img src="https://limak.az/new_front/assets/img/dashboard/banner/hbanner.jpeg" />
                                            </div>
                                        </a>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bn-45f col-ofv">
                <a href="https://instagram.com/pintravel.az?igshid=YzcxN2Q2NzY0OA==">
                    <div className="bn-img-4y2 banner-val style-b8wcZ" id="style-b8wcZ">
                    </div>
                </a>
            </div>
        </div>

    )
}

export default User
