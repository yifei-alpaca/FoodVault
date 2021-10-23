data = {
	initPickColor: function () {
		$(".pick-class-label").click(function () {
			var new_class = $(this).attr("new-class");
			var old_class = $("#display-buttons").attr("data-class");
			var display_div = $("#display-buttons");
			if (display_div.length) {
				var display_buttons = display_div.find(".btn");
				display_buttons.removeClass(old_class);
				display_buttons.addClass(new_class);
				display_div.attr("data-class", new_class);
			}
		});
	},

	initDocChart: function () {
		chartColor = "#FFFFFF";

		// General configuration for the charts with Line gradientStroke
		gradientChartOptionsConfiguration = {
			maintainAspectRatio: false,
			legend: {
				display: false,
			},
			tooltips: {
				bodySpacing: 4,
				mode: "nearest",
				intersect: 0,
				position: "nearest",
				xPadding: 10,
				yPadding: 10,
				caretPadding: 10,
			},
			responsive: true,
			scales: {
				yAxes: [
					{
						display: 0,
						gridLines: 0,
						ticks: {
							display: false,
						},
						gridLines: {
							zeroLineColor: "transparent",
							drawTicks: false,
							display: false,
							drawBorder: false,
						},
					},
				],
				xAxes: [
					{
						display: 0,
						gridLines: 0,
						ticks: {
							display: false,
						},
						gridLines: {
							zeroLineColor: "transparent",
							drawTicks: false,
							display: false,
							drawBorder: false,
						},
					},
				],
			},
			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 15,
					bottom: 15,
				},
			},
		};
	},

	initDashboardPageCharts: function () {
		chartColor = "#FFFFFF";

		// General configuration for the charts with Line gradientStroke
		gradientChartOptionsConfiguration = {
			maintainAspectRatio: false,
			legend: {
				display: false,
			},
			tooltips: {
				bodySpacing: 4,
				mode: "nearest",
				intersect: 0,
				position: "nearest",
				xPadding: 10,
				yPadding: 10,
				caretPadding: 10,
			},
			responsive: 1,
			scales: {
				yAxes: [
					{
						display: 0,
						gridLines: 0,
						ticks: {
							display: false,
						},
						gridLines: {
							zeroLineColor: "transparent",
							drawTicks: false,
							display: false,
							drawBorder: false,
						},
					},
				],
				xAxes: [
					{
						display: 0,
						gridLines: 0,
						ticks: {
							display: false,
						},
						gridLines: {
							zeroLineColor: "transparent",
							drawTicks: false,
							display: false,
							drawBorder: false,
						},
					},
				],
			},
			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 15,
					bottom: 15,
				},
			},
		};

		gradientChartOptionsConfigurationWithNumbersAndGrid = {
			layout: {
				padding: {
					left: 20,
					right: 20,
					top: 0,
					bottom: 0,
				},
			},
			maintainAspectRatio: false,
			tooltips: {
				backgroundColor: "#fff",
				titleFontColor: "#333",
				bodyFontColor: "#666",
				bodySpacing: 4,
				xPadding: 12,
				mode: "nearest",
				intersect: 0,
				position: "nearest",
			},
			legend: {
				position: "bottom",
				fillStyle: "#FFF",
				display: false,
			},
			scales: {
				yAxes: [
					{
						ticks: {
							fontColor: "rgba(71,71,71,0.4)",
							fontStyle: "bold",
							beginAtZero: true,
							maxTicksLimit: 5,
							padding: 10,
						},
						gridLines: {
							drawTicks: true,
							drawBorder: false,
							display: true,
							color: "rgba(71,71,71,0.1)",
							zeroLineColor: "transparent",
						},
					},
				],
				xAxes: [
					{
						gridLines: {
							zeroLineColor: "transparent",
							display: false,
						},
						ticks: {
							padding: 10,
							fontColor: "rgba(71,71,71,0.4)",
							fontStyle: "bold",
						},
					},
				],
			},
		};

		var ctx = document.getElementById("bigDashboardChart").getContext("2d");

		var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
		gradientStroke.addColorStop(0, "#9bb59a");
		gradientStroke.addColorStop(1, chartColor);

		var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
		gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
		gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.4)");

		var bigCharts = [];
		for (let i = 0; i < 12; i++) {
			bigCharts.push(Math.floor(Math.random() * 20000) + 2000);
		}

		var myChart = new Chart(ctx, {
			type: "line",
			data: {
				labels: [
					"JAN",
					"FEB",
					"MAR",
					"APR",
					"MAY",
					"JUN",
					"JUL",
					"AUG",
					"SEP",
					"OCT",
					"NOV",
					"DEC",
				],
				datasets: [
					{
						// label: "Data",
						borderColor: chartColor,
						pointBorderColor: chartColor,
						pointBackgroundColor: "#9bb59a",
						pointHoverBackgroundColor: "#9bb59a",
						pointHoverBorderColor: chartColor,
						pointBorderWidth: 1,
						pointHoverRadius: 7,
						pointHoverBorderWidth: 2,
						pointRadius: 5,
						fill: true,
						backgroundColor: gradientFill,
						borderWidth: 2,
						data: bigCharts,
						// hard code:
						// data: [
						// 	23540, 24940, 29890, 21650, 16584, 14870, 20640, 16430, 14720,
						// 	19340, 15780, 12320,
						// ],
					},
				],
			},
			options: {
				layout: {
					padding: {
						left: 20,
						right: 20,
						top: 0,
						bottom: 0,
					},
				},
				// title: {
				// 	display: true,
				// 	text: "Food Donated (by months)",
				// },
				maintainAspectRatio: false,
				tooltips: {
					backgroundColor: "#fff",
					titleFontColor: "#333",
					bodyFontColor: "#666",
					bodySpacing: 4,
					xPadding: 12,
					mode: "nearest",
					intersect: 0,
					position: "nearest",
				},
				legend: {
					position: "left",
					fillStyle: "#FFF",
					display: false,
				},
				scales: {
					yAxes: [
						{
							ticks: {
								fontColor: "rgba(255,255,255,0.9)",
								fontStyle: "bold",
								beginAtZero: true,
								maxTicksLimit: 5,
								padding: 10,
							},
							gridLines: {
								drawTicks: true,
								drawBorder: false,
								display: true,
								color: "rgba(255,255,255,0.5)",
								zeroLineColor: "transparent",
							},
						},
					],
					xAxes: [
						{
							gridLines: {
								zeroLineColor: "transparent",
								display: false,
							},
							ticks: {
								padding: 10,
								fontColor: "rgba(255,255,255,0.9)",
								fontStyle: "bold",
							},
						},
					],
				},
			},
		});

		ctx = document
			.getElementById("lineChartExampleWithNumbersAndGrid")
			.getContext("2d");

		gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
		gradientStroke.addColorStop(0, "#2d8c28");
		gradientStroke.addColorStop(1, chartColor);

		gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
		gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
		gradientFill.addColorStop(1, hexToRGB("#2d8c28", 0.4));

		var timeChart = [];
		for (let i = 0; i < 4; i++) {
			timeChart.push(Math.floor(Math.random() * 200) + 50);
		}

		myChart = new Chart(ctx, {
			type: "line",
			responsive: true,
			data: {
				labels: ["12pm", "3pm", "6pm", "9pm"],
				datasets: [
					{
						label: "Total Receiver",
						borderColor: "#2d8c28",
						pointBorderColor: "#FFF",
						pointBackgroundColor: "#2d8c28",
						pointBorderWidth: 2,
						pointHoverRadius: 4,
						pointHoverBorderWidth: 1,
						pointRadius: 4,
						fill: true,
						backgroundColor: gradientFill,
						borderWidth: 2,
						data: timeChart,
						// [232, 89, 120, 610],
					},
				],
			},

			options: gradientChartOptionsConfigurationWithNumbersAndGrid,
		});

		var e = document
			.getElementById("barChartSimpleGradientsNumbers")
			.getContext("2d");

		gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
		gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
		gradientFill.addColorStop(1, hexToRGB("#2a648c", 0.6));

		var weekChart = [];
		for (let i = 0; i < 7; i++) {
			weekChart.push(Math.floor(Math.random() * 1500) + 100);
		}

		var a = {
			type: "bar",
			data: {
				labels: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday",
				],
				datasets: [
					{
						label: "Total Receiver",
						backgroundColor: gradientFill,
						borderColor: "#2a648c",
						pointBorderColor: "#FFF",
						pointBackgroundColor: "#2a648c",
						pointBorderWidth: 2,
						pointHoverRadius: 4,
						pointHoverBorderWidth: 1,
						pointRadius: 4,
						fill: true,
						borderWidth: 2,
						data: weekChart,
						// [861, 1024, 856, 606, 1023, 1217, 1148],
					},
				],
			},
			options: gradientChartOptionsConfigurationWithNumbersAndGrid,
		};

		var viewsChart = new Chart(e, a);
	},
};
