import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import CreateIcon from '@mui/icons-material/Create';

const Details = () => {
    return (

        <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}>Welcome Mahmudur Rahman</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" alt="" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">Name: <span >Mahmudur Rahman</span> </h3>
                            <h3 className="mt-3">Age: <span>22</span> </h3>
                            <p className="mt-3"><MailOutlineIcon />Email: <span>mru416@gmail.com</span> </p>
                            <p className="mt-3"><WorkIcon />Occupation: <span>MERN Stack developer</span></p>
                        </div>
                        <div className="right_view col-lg-6 col-md-6 col-12">
                            <div className="add_btn">
                                <button className="btn btn-primary mx-2"><CreateIcon /></button>
                                <button className="btn btn-danger"><DeleteOutlineIcon /></button>
                            </div>
                            <p className="mt-5"><PhoneAndroidIcon /> Mobile: <span>+8801875314193</span></p>
                            <p className="mt-3"><LocationOnIcon /> Location: <span>Dhaka</span></p>
                            <p className="mt-3">Description: <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dicta!</span></p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
// 55
export default Details;
