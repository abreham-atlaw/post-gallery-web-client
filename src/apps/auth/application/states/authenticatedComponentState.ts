import { AsyncState } from "@/lib/state/asyncState";
import { AuthenticationStatus } from "../../data/repositories/authenticator";



export default class AuthenticatedComponentState extends AsyncState{

	authenticationStatus: AuthenticationStatus = AuthenticationStatus.none;

}