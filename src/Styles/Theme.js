const size = {
	mobile: "770px",
	tabletS: "1023px",
	tabletM: "1220px",
	tabletL: "1280px",
	laptop: "1460px",
	desktop: "1700px"
}

export default {
  mobile: `(max-width: ${size.mobile})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tabletM: `(max-width: ${size.tabletM})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
  maxWidth: "935px",
  bgColor: "#fff",
  bgBlackColor: "#111",
  black: "#000",
  white: "#fff",
  lightGray: "#dfdfdf",
  hoverBlack: "#c9c9c9",
  pointColor: "wheat",
  pointHoverColor: "#CD853E",
  grid: `background-color: #fff;
        background-image: linear-gradient(#dfdfdf 1px, transparent 1px), linear-gradient(90deg, #dfdfdf 1px, transparent 1px);
        background-size: 28px 28px;
  `
};
