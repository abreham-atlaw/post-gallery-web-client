import ViewModelView from "@/lib/components/views/ViewModelView";
import React from "react";
import { Link } from "react-router-dom";



export default class HomeView extends React.Component{


	render(): React.ReactNode {
		return <div>
			
			<a href="/auth/login">Login Page</a><br/>
			<a href="/search">Shop</a>

		</div>
	}

}