import axios from 'axios';
import React, { useEffect } from 'react';

function ConfirmacaoPedido() {
	const confirmaPedido = () => {
		const restaurantId = 1;
		const body = {
			products: [
				{
					id: CnKdjU6CyKakQDGHzNln,
					quantity: 10,
				},
				{
					quantity: 1,
					id: KJqMl2DxeShkSBevKVre,
				},
			],
			paymentMethod: creditcard,
		};

		axios
			.post(
				`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${restaurantId}/order`,
				body,
				{
					headers: {
						auth: window.localStorage.getItem('token'),
					},
				}
			)
			.then((response) => console.log(response.data))
			.catch((error) => console.log(error));
	};

	const AtivaPedido = () => {
		axios
			.post(
				`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/active-order`,
				body,
				{
					headers: {
						auth: window.localStorage.getItem('token'),
					},
				}
			)
			.then((response) => console.log(response.data))
			.catch((error) => console.log(error));
	};

	return <div>ConfirmacaoPedido</div>;
}

export default ConfirmacaoPedido;
