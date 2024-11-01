import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';


// Весь JSX-код здесь представляет собой декларативный стиль
export function App() {
	const currentYear = new Date().getFullYear();

  return createElement(
		"div",
		{className: "App"},
		createElement(
			"header",
			{className: "App-header"},
			createElement(
				"img",
				{ src: logo, className: "App-logo", alt: "logo" }
			),
			createElement(
				"p",
				null,
				"Edit ",
				createElement("code", null, "src/App.js "),
				"and save to reload."
			),
			createElement("a", {className: "App-link", href: "https://reactjs.org", target: "__blank", rel: "noopener noreferrer"},
				"Learn React"
			)
		),
		createElement("footer",
			null,
			createElement("p", null, currentYear)
		)
  );
}
