import React from 'react'
import OrderHeader from '../../Components/Order/OrderHeader'
import Servers from '../../Components/Servers/Servers'
import TableLayout from '../../Components/TableLayout'
import './ManagerDashboard.css'

export default function ManagerDashboard() {
    return (
        <div className="rootPage">
            <DashTableLayout className="tableLayout"/>
            <Servers className="servers"/>
            {/* <OrderHeader/> */}
        </div>
    )
}