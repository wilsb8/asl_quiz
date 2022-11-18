import React from 'react'

class Login extends React.Component
{
	render() {
		return (
			<div>
				<h1>Login</h1>
				<p>To login with github please click on the link below</p>
				<a href="https://github.com/login/oauth/authorize?client_id=486c23c454bf9511ecfc">Login With Github</a>
			</div>
		)
	}
}

export default Login