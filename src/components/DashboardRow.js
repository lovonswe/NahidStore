import { IconButton, Typography } from '@mui/material'
import React from 'react';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import '../style/DashboardRowStyle.scss';


function DashboardRow() {
  return (
    <div className='dashboard-row'>
        <div>
            <IconButton>
                <FoodBankOutlinedIcon fontSize="large"/>
                <Typography>
                    <span>+15000 products</span> to shop from
                </Typography>
            </IconButton>
        </div>

        <div>
            <IconButton>
                <CurrencyExchangeOutlinedIcon fontSize="large"/>
                <Typography>
                    Pay <span>after</span> receiving products
                </Typography>
            </IconButton>
        </div>

        <div>
            <IconButton>
                <DeliveryDiningOutlinedIcon fontSize="large"/>
                <Typography>
                Get your delivery within <span>1 hour</span>
                </Typography>
            </IconButton>
        </div>
        <div>
            <IconButton>
                <RedeemOutlinedIcon fontSize="large"/>
                <Typography>
                Get offers that <span>Save Money</span>
                </Typography>
            </IconButton>
        </div>
    </div>
  )
}

export default DashboardRow