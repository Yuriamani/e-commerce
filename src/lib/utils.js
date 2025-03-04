const COLORS = {
	green: {
		bg: "bg-[#A3C77C]",  // Darkened green background
		badge: "bg-[#87AD5A]",  // Darkened green badge
	},
	orange: {
		bg: "bg-[#D4B895]",  // Darkened orange background
		badge: "bg-[#B78F5A]",  // Darkened orange badge
	},
	red: {
		bg: "bg-[#D38B8D]",  // Darkened red background
		badge: "bg-[#A25B5C]",  // Darkened red badge
	},
};


export const getRandomColor = () => {
	const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
	const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
	const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
	return COLORS[randomColorName]; // Return the color object corresponding to the random color name
};