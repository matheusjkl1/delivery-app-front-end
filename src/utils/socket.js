import { io } from 'socket.io-client';

const socket = io('https://matheus-mysql.herokuapp.com/');
export default socket;
