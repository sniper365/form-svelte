export const getUrl = () => window.location.hash.slice(2);

export const toCamelCase = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};
