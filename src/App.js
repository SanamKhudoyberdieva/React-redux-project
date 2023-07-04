import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import { useState } from 'react';
import enMessages from "./locales/en";
import uzMessages from "./locales/uz";
import { IntlProvider } from 'react-intl';

const messages = {
	en: enMessages,
	uz: uzMessages,
};

const App = () => {
	const [locale, setLocale] = useState("uz")

	const handleLanguageChange = (e) => {
		setLocale(e.target.value);
	};

	return (
		<IntlProvider locale={locale} messages={messages[locale]}>
			<div className='container bg-white p-4 mt-5'>
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown button
					</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
				<h1>My Todo List</h1>
				<AddTodoForm locale={locale} setLocale={setLocale} />
				<TodoList locale={locale} setLocale={setLocale} />
				<TotalCompleteItems locale={locale} setLocale={setLocale} />
			</div>
		</IntlProvider>
	);
};

export default App;