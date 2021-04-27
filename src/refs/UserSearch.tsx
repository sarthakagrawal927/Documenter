import React, { useState, useRef, useEffect } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const onClickAdd = () => {
    setName("");
    setGuests([...guests, name]);
  };

  const [nameFind, setNameFind] = useState("");
  const onClickFind = () => {
    const foundUser = guests.find((user) => {
      return user === nameFind;
    });
    console.log(foundUser);
  };

  return (
    <div>
      <h3>Guestlist</h3>
      <ul>
        {guests.map((guest, index) => (
          <li key={index}>{guest}</li>
        ))}
      </ul>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text'
      />
      <button onClick={onClickAdd}>add</button>

      <input
        value={nameFind}
        onChange={(e) => setNameFind(e.target.value)}
        type='text'
        ref={inputRef}
      />
      <button onClick={onClickFind}>find</button>
    </div>
  );
};

export default GuestList;
