import axios from 'axios';
import { useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




export default function DonationsUser() {

    useEffect(()=>{
        axios.get('http://localhost:3000/donations')
        .then(res => console.log(res))
        .catch(err => console.log(err));

    },[])
 

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded'>
                <table className='table'>
                    <thead>
                    <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Type</th>
                    </tr>

                    </thead>
                    <tbody>

                    </tbody>

                </table>

            </div>
           
        </div>
    )
}
