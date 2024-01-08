import axios from 'axios';
import { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddDonation() {
    const [donation, setDonation] = useState({
        username: "",
        email: "",
        type: "",  
        comment: "",
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;

      
        if (type === 'radio' && e.target.checked) {
            setDonation((prev) => ({ ...prev, [name]: value }));
        } else {
            setDonation((prev) => ({ ...prev, [name]: value }));
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();
        console.log("Donation data:", donation);
        try {
            const response = await axios.post("http://localhost:8081/donations", donation, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("Server response:", response.data);
        } catch (err) {
            console.error("Error:", err);
            console.log("Error response data:", err.response?.data);
        }
    }

    return (
        <div className="container">
            <section className="donation">
                <h1>Create Your Donation ...</h1>

                <div className="form">
                    <div className='topcontain'>
                        <h2>Information of Donor</h2>
                        <hr />
                    </div>
                    <div className='middlecontain'>
                        <label>User Name: </label>
                        <input id='username' className='textinput' type='text' onChange={handleChange} name='username' required /><br /><br />
                        <label>Email: </label>
                        <input id='email' className='textinput' type='text' onChange={handleChange} name='email' /><br /><br />
                        <label>Type of Donation: </label> <br />
                        <input type='radio' onChange={handleChange} name='type' value='Money' />
                        <label id='radio'>Money: </label><br />
                        <input type='radio' onChange={handleChange} name='type' value='FlowersS' />
                        <label id='radio'>Flower: </label><br /><br />
                        
                        <label>Comment: </label><br />
                        <input className='textarea' type='text' id='comment' onChange={handleChange} name='comment' /><br />
                    </div>
                </div>

                <div className='bottomcontain' >
                    <button class="btn btn-success" onClick={handleClick} style={{marginLeft: '50%', marginTop:'7%', marginLeft:'48%'}}>Submit</button>
                </div>

            </section>
        </div>
    )
}
