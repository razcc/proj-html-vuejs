<template>
	<div class="featuresComp">
		<div class="featurs">
			<!-- Titolo e paragrafo -->
			<div class="contTitle">
				<h1>Key Features</h1>
				<p>
					Start working with
					<span class="landrick">Landrick</span> that can provide
					everything you need to generate awarenes, drive traffic,
					connect
				</p>
			</div>

			<!-- Container 4 Features -->
			<div class="contFeatures">
				<!-- Card ciclo  -->
				<div
					class="singleFeatures"
					v-for="(elem, index) in arKeyFeatures"
					:key="index"
				>
					<!-- Immagine card -->
					<div class="contImmage">
						<img :src="getImgUrl(elem.image)" alt="features" />
					</div>

					<!-- Testo card -->
					<div>
						<!-- Titolo -->
						<h3 class="titleSingleCard">
							{{ elem.name }}
						</h3>
						<!-- Paragrafo -->
						<p class="paragraphSingleCard">
							{{ elem.text }}
						</p>

						<!-- Read More -->
						<div class="readMoreCard">
							<span>Read More</span>
							<font-awesome-icon
								icon="fa-solid fa-chevron-right"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FeaturesComp",
	data() {
		return {
			arKeyFeatures: [
				{
					name: "Modular",
					image: "modular.svg",
					text: " Composed in a pseudo-Latin language whitch more or less corresponds",
				},
				{
					name: "Responsive",
					image: "responsive.svg",
					text: " Composed in a pseudo-Latin language whitch more or less corresponds",
				},
				{
					name: "Customizable",
					image: "custom.svg",
					text: " Composed in a pseudo-Latin language whitch more or less corresponds",
				},
				{
					name: "Scalable",
					image: "scalable.svg",
					text: " Composed in a pseudo-Latin language whitch more or less corresponds",
				},
			],
		};
	},
	methods: {
		// Url image Features
		getImgUrl(elem) {
			return require("../../../assets/img/" + elem);
		},
	},
};
</script>

<style lang="scss" scoped>
.featurs {
	width: 70%;
	margin: auto;
	padding: 5% 0;
	color: rgba(152, 164, 181, 1);
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
		sans-serif;
}

// Titolo + paragrafo
.contTitle {
	width: 40%;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

// Titolo
h1 {
	color: black;
}
.dark h1 {
	color: rgba(152, 164, 181, 1);
}

// parola Landrick evidenziata
.landrick {
	color: rgba(47, 85, 212, 1);
	font-weight: bold;
}
// Contenitore 4 features
.contFeatures {
	display: flex;
	justify-content: center;
	margin-top: 5%;
	gap: 50px;
}

// Singola Card
.singleFeatures {
	width: calc(100% / 7);
	border: 1px solid rgba(203, 212, 240, 0.829);
	background-color: rgba(236, 236, 238, 0.308);
	border-radius: 10px;
	padding: 20px;
	transition: all 0.6s;
}
.singleFeatures:hover {
	transform: translateY(-10%) scale(1.1);
	box-shadow: 5px 10px 10px gray;
	cursor: pointer;
}

.dark .singleFeatures {
	background-color: rgba(28, 40, 54, 1);
	border: 1px solid rgba(47, 57, 87, 0.829);
}
.dark .singleFeatures:hover {
	transform: translateY(-10%) scale(1.1);
	box-shadow: 2px 6px 7px rgb(68, 67, 67);
	cursor: pointer;
}

.titleSingleCard {
	color: black;
}
.dark .titleSingleCard {
	color: rgb(231, 230, 230);
}

// Img Singola Card
.contImmage {
	background-color: rgba(234, 238, 251, 1);
	display: inline-block;
	border-radius: 10px;
	text-align: center;
	margin-bottom: 10%;
	img {
		width: 80%;
	}
}

.dark .contImmage {
	background-color: rgba(17, 23, 112, 0.829);
	border: 1px solid rgba(33, 36, 83, 0.829);
}

// ReadMore Button
.readMoreCard {
	margin-top: 10px;
	font-size: 14px;
	color: blue;
	font-family: "Times New Roman", Times, serif;
	font-weight: bold;
	display: inline-block;
	transition: all 0.8s;
	border-radius: 7px;
	span {
		margin-right: 5px;
	}
	&:hover {
		padding: 7px 15px;
		box-shadow: 5px 10px 10px gray;
	}
}

.dark .readMoreCard {
	color: rgb(68, 0, 255);
	&:hover {
		box-shadow: 2px 4px 5px rgb(83, 83, 83);
	}
}
</style>