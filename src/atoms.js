import { atom, selector } from "recoil";

export const networkAtom = atom({
	key: "networkAtom",
	default: 102,
});
export const jobsAtom = atom({
	key: "jobsAtom",
	default: 0,
});
export const notificationsAtom = atom({
	key: "notificationsAtom",
	default: 12,
});
export const messageAtom = atom({
	key: "messageAtom",
	default: 0,
});
export const totalNotificationSelector = selector({
	key: "totalNotificationSelector",
	get: ({ get }) => {
		const networkAtomCount = get(networkAtom);
		const jobsAtomCount = get(jobsAtom);
		const notificationsAtomCount = get(notificationsAtom);
		const messageAtomAtomCount = get(messageAtom);
		return (
			networkAtomCount +
			jobsAtomCount +
			notificationsAtomCount +
			messageAtomAtomCount
		);
	},
});
