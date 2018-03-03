import React from 'react';
import { render } from 'react-dom';
import Input from './components/presentational/Input'

const app = (
	<Input />
	);

render(app, document.getElementById("create-article-form"));