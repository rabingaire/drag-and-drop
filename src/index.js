import './styles/application.scss';
import React from 'react';
import { render } from  'react-dom';

import { Main } from './components'; 

let root = document.getElementById('root');
render(<Main />, root);