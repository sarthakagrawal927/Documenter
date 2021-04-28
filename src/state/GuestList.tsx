import React,{useState} from 'react';

const GuestList :React.FC= () => {
    const [name, setName] = useState('');
    const [guests,setGuests] = useState<string[]>([]);

    const onClickAdd = () =>{
        setName('');
        setGuests([...guests, name]);
    }

    const [nameFind, setNameFind] = useState('');
    const onClickFind = () =>{
        const foundUser = guests.find((user) => {return user === nameFind})
        console.log(foundUser);
    }

    return (
        <div>
            <h3>Giestlist</h3>
            <ul>
                {guests.map((guest,index)=> (<li key={index}>{guest}</li>))}
            </ul>

            <input value={name} onChange={(e) => setName(e.target.value)} type="text"/>
            <button onClick={onClickAdd}>add</button>

            <input value={nameFind} onChange={(e) => setNameFind(e.target.value)} type="text"/>
            <button onClick={onClickFind}>find</button>
        </div>
    );
};

export default GuestList;