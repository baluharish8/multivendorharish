import "./admindashboard.component.css"

export function AdminDashboardComponent(props) {
    return (
        <>
            <div className="dashboard  ">
                <div className="container-fluid">
                <div>
                    <h2>Dashboard</h2>
                </div>
                <div className="row  mt-3 ">
                    <div className=" col-12 col-sm-12 col-md-4 col-lg-3 mb-4">
                        <div className="project_box d-flex ms-1 me-1 ">
                            <div className=" icon_div "> <i className="fas fa-shopping-basket dashboard_icon_size"></i></div>
                            <div className=" ps-2 pt-3 project_content">
                                <div><h4>Orders</h4></div>
                                <div><h5>65</h5></div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-12 col-sm-12 col-md-4 col-lg-3 mb-4 ">
                        <div className="ledgertype_box d-flex ms-1 me-1 ">
                            <div className=" icon_div p-3"> <i className="fas fa-file-invoice-dollar dashboard_icon_size"></i></div>
                            <div className=" pt-3 ps-2 ledgertype_content">
                                <div><h4>Payments</h4></div>
                                <div><h5>22</h5></div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-12 col-sm-12 col-md-4 col-lg-3 mb-4 ">
                        <div className="ledgergroup_box d-flex ms-1 me-1 ">
                            <div className=" icon_div p-3"> <i className="fas fa-shopping-bag dashboard_icon_size" ></i></div>
                            <div className=" ps-2 pt-3 ledgergroup_content">
                                <div><h4>Products</h4></div>
                                <div><h5>49</h5></div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-12 col-sm-12 col-md-4 col-lg-3 mb-4">
                        <div className="ledger_box d-flex ms-1 me-1 ">
                            <div className=" icon_div p-3"> <i className="fas fa-file-invoice-dollar dashboard_icon_size"></i></div>
                            <div className=" pt-3 ps-2 ledger_content">
                                <div><h4>Total Earnings</h4></div>
                                <div><h5>61</h5></div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    {/* <div className="row  mt-4 mb-3"> */}
            
                </div>
                </div>
            
           


            </div>
        </>
    )
}