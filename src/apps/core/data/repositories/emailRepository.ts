import NetworkApi from "@/lib/network/NetworkApi"
import CoreProviders from "../../di/coreproviders"
import SendEmailRequest from "../requests/mailRequests";
import Order from "../models/order";



export default class EmailRepository{

	private api: NetworkApi = CoreProviders.provideApiClient();

	public async sendEmail(
		to: string,
		subject: string,
		message: string
	){
		await this.api.execute(new SendEmailRequest(to, subject, message));
	}

	public async sendRequestAcceptedEmail(to: string, order: Order, purchaseLink: string){
		await this.sendEmail(
			to,
			"Art Purchase Request Accepted",
			`Dear ${order.client},
			Congratulations! Your art purchase request has been accepted. The exquisite artwork you selected
			is now ready for purchase.
			To complete the purchase, please follow this link: ${purchaseLink}
			If you encounter any issues or have additional queries, don't hesitate to contact us at sales@post-
			gallery.com.
			Best regards,
			The Post Gallery Team`
		);
	}

} 