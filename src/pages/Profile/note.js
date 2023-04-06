import React, { useRef, useEffect, useState } from 'react';

function MyButton() {
  const buttonRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        console.log('Click ra ngoài phạm vi của button');
        setShow(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [buttonRef]);

  const showHello = () => {
    setShow(true);
  }
  return (
    <>
    {show && <h1>Hello</h1>}
    <button onClick ={showHello} ref={buttonRef}>Click me</button>
    </>
  );
}

export default MyButton;