import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchingDatas = () => {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchDatas = async () => {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setDatas(response.data);
        }
        fetchDatas();
    },[]);



  return (
    <div className='flex flex-col items-center justify center'>
        <h1 className='text-3xl font-bold'>Fetched datas</h1>

        <table className='border'>
            <tbody>
            <tr className='border'>
                <td className='border p-2'>id</td>
                <td className='border p-2'>Name</td>
                <td className='border p-2'>Phone Number</td>
            </tr>

            {datas.map((user) => {
                return(
                <tr key={user.id}>
                <td className='border p-2'>{user.id}</td>
                <td className='border p-2'>{user.name}</td>
                <td className='border p-2'>{user.phone}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
    </div>
  )
}

export default FetchingDatas