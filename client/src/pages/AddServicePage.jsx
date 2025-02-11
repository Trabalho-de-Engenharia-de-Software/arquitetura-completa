import React from 'react';
import { useParams } from 'react-router-dom';
import FormAddServices from '../components/AddServicesPage/FormAddServices';
import './CSS/AddServicePage.css';
import ReactVLibras from 'react-vlibras-plugin';

export default function AddServicePage() {
    const { barberId } = useParams();

    return (
        <div className='FormAddServices'>
            <FormAddServices barberId={barberId} />
            <ReactVLibras/>
        </div>
    );
}