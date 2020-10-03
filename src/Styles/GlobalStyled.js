import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
	${reset};
	@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700");
	* {
		box-sizing: border-box;
	}
	html, body {
		position: relative;
		width: 100%;
	}
	body {
		background-color: ${(props) => props.theme.bgColor};
		color: ${(props) => props.theme.black};
		font-size: 14px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		min-height: 100vh;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
	a {
		display: block;
		color: ${(props) => props.theme.black};
		text-decoration: none;
		transition: 0.3s;
		&:hover {
			color: ${(props) => props.theme.hoverBlack};
		}
	}
	input:focus {
		outline:none;
	}
	textarea {
		border: none;
		resize: none;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		&::placeholder {
			color: ${(props) => props.theme.blue};
			font-weight: 700;
		}
	}
	img {
		width: 100%;
		height: auto;
	}
`;
