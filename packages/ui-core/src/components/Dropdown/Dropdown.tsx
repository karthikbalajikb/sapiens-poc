import React from 'react';

type AppProps = { message: string }; /* could also use interface */

const Dropdown = ({ message }: AppProps) => <div style={{color: 'red'}}>{message}</div>;

export default Dropdown;