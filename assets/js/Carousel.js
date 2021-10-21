var app = new Vue({
	el: "#app",
	data: {
		currentSlide: 0,
		isPreviousSlide: false,
		isFirstLoad: true,
		slides: [
			{
				headlineFirstLine: "Save the Earth",
				// headlineSecondLine: "",
				sublineFirstLine: "Singapore Management University",
				// sublineSecondLine: "novum",

				bgImg:
					"https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1313&q=80",
				rectImg:
					"https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1313&q=80",
				// 	bgImg:
				// 	"https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
				// rectImg:
				// 	"https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
			},
			{
				headlineFirstLine: "Reduce Food Wastage",
				// headlineSecondLine: "Auctor",
				sublineFirstLine: "Singapore Management University",
				// sublineSecondLine: "le soleil",
				bgImg:
					"https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				rectImg:
					"https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			},
			{
				headlineFirstLine: "Donate Leftover",
				sublineFirstLine: "Singapore Management University",
				bgImg:
					"https://images.unsplash.com/photo-1609139027234-57570f43f692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				rectImg:
					"https://images.unsplash.com/photo-1609139027234-57570f43f692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			},
		],
	},
	mounted: function () {
		var productRotatorSlide = document.getElementById("app");
		var startX = 0;
		var endX = 0;

		productRotatorSlide.addEventListener(
			"touchstart",
			(event) => (startX = event.touches[0].pageX)
		);

		productRotatorSlide.addEventListener(
			"touchmove",
			(event) => (endX = event.touches[0].pageX)
		);

		productRotatorSlide.addEventListener(
			"touchend",
			function (event) {
				var threshold = startX - endX;

				if (threshold < 150 && 0 < this.currentSlide) {
					this.currentSlide--;
				}
				if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
					this.currentSlide++;
				}
			}.bind(this)
		);
	},
	methods: {
		updateSlide(index) {
			index < this.currentSlide
				? (this.isPreviousSlide = true)
				: (this.isPreviousSlide = false);
			this.currentSlide = index;
			this.isFirstLoad = true;
		},
	},
});
