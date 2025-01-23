// import { atom, selector } from "recoil";

// export const networkAtom = atom({
// 	key: "networkAtom",
// 	default: 102,
// });
// export const jobsAtom = atom({
// 	key: "jobsAtom",
// 	default: 0,
// });
// export const notificationsAtom = atom({
// 	key: "notificationsAtom",
// 	default: 12,
// });
// export const messageAtom = atom({
// 	key: "messageAtom",
// 	default: 0,
// });
// export const totalNotificationSelector = selector({
// 	key: "totalNotificationSelector",
// 	get: ({ get }) => {
// 		const networkAtomCount = get(networkAtom);
// 		const jobsAtomCount = get(jobsAtom);
// 		const notificationsAtomCount = get(notificationsAtom);
// 		const messageAtomAtomCount = get(messageAtom);
// 		return (
// 			networkAtomCount +
// 			jobsAtomCount +
// 			notificationsAtomCount +
// 			messageAtomAtomCount
// 		);
// 	},
// });

import axios from "axios";
import { atom, selector } from "recoil";
export const notifications = atom({
	key: "networkAtom",
	default: selector({
		key: "networkAtomSelector",
		get: async () => {
			const res = await axios.get(
				"https://jsonplaceholder.typicode.com/posts/1"
			);
			return res.data;
		},
	}),
});
export const totalNotificationSelector = selector({
	key: "totalNotificationSelector",
	get: ({ get }) => {
		const allNotifications = get(notifications);
		return (
			allNotifications.network +
			allNotifications.jobs +
			allNotifications.notications +
			allNotifications.messaging
		);
	},
});
