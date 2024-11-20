const textContent = ["Returns the value of a base expression taken to a specified power.",
    "Returns a supplied numeric expression rounded to the nearest integer.",
    "A numeric expression that contains an angle measured in radians.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, mauris vel tincidunt malesuada, velit turpis tincidunt velit,ut tincidunt sapien velit vel sapien. imis in faucibus orci luctus et ultrices posuere cubilia curae;",
    "Enables basic storage and retrieval of dates and times."]
export function randomText() {
   const index =  (Math.random() * textContent.length)
   return textContent[Math.floor(index)]
}


