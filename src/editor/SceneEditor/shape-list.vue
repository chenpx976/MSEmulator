﻿
<template>
	<table class="main-frame">
		<tr>
			<td>
				<table class="fill" style="border-bottom: 1px solid gray;">
					<tr>
						<td>
							<div style="display: flex;">
								<button @click="newShape">New</button>
								<button @click="duplicateShape">Duplicate</button>
								<button @click="deleteShape">Delete</button>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<input type="text" v-model="inputName" @keydown.enter="editName($event)" @blur="editName($event)" placeholder="Name" style="background: transparent;" />
						</td>
						<td v-if="alertName">
							<span style="background-color: yellow; color: red;">名稱重複</span>
						</td>
						<td v-if="isShowType">Type</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td class="fill">
				<ul class="fill list">
					<template v-for="shape in editor.shapes">
						<li @click="selectShape(shape.name)" :class="{selected:editor.selectedShapeName==shape.name}">
							<span>
								<span>{{shape.name}}</span>
							</span>
							<span v-if="isShowType">
								<span>{{shape.type}}</span>
							</span>
						</li>
					</template>
				</ul>
			</td>
		</tr>
	</table>
</template>

<script>
	import { ShapeDef } from "./ShapeDefinition.js";


	let shapeSN = 0;

	export default {
		props: {
			editor: {
				required: true,
			},
		},
		data: function () {
			return {
				isShowType: false,
				inputName: null,
				alertName: false,
			};
		},
		methods: {
			_newShape: function (name) {
				const editor = this.editor;
				let def = new ShapeDef();
				def.name = name;
				editor.shapes.push(def);
				return def;
			},
			newShape: function () {
				const editor = this.editor;
				let def = new ShapeDef();
				def.name = "Shape_" + (++shapeSN);
				editor.shapes.push(def);
				return def;
			},
			duplicateShape: function (index) {
				const editor = this.editor;
				let def = editor.shapes[index].clone();
				def.name = "Shape_" + (++shapeSN) + "(" + def.name + ")";
				editor.shapes.push(def);
			},
			deleteShape: function (index) {
				const editor = this.editor;
				editor.shapes.splice(index, 1);
			},
			selectShape: function (shapeName) {
				if (!this.alertName) {
					const editor = this.editor;
					editor.selectedShapeName = shapeName;
					this.inputName = shapeName;
					return editor.selectedShape;
				}
				return false;
			},

			editName: function (evt) {
				if (!this.editor.selectedShape) {
					return;
				}
				const newName = evt.target.value;//this.inputName
				const editor = this.editor;

				if (editor.selectedShape.name == newName) {
					this.alertName = false;
					return;
				}
				else if (editor.getShapeByName(newName)) {
					this.alertName = true;

					let na = window.prompt("New name", newName + "_Copy");
					if (na) {
						evt.target.value = na;
						this.inputName = na;
					}
					this.editName(evt);
				}
				else {
					this.alertName = false;
					editor.selectedShape.name = newName;
					editor.selectedShapeName = newName;
				}
			},
			loadFromMapData: async function () {
				await scene_map.$promise;

				const gnd = scene_map.controller.ground;

				console.log(gnd.chains.map(a => a.footholds.map(a => a.id)));

				gnd.chains.forEach(chain => {
					chain.footholds.forEach(foothold => {
						let def = this._newShape("foothold_" + foothold.id);
						def.type = "edge";
					});
				});
			},
		},
		mounted: async function () {
			await this.loadFromMapData();
		}
	}
</script>

<style scoped>
	.selected {
		background-color: lightcoral;
	}

	.fill {
		width: 100%;
		height: 100%;
	}

	.list {
		overflow: auto;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.main-frame {
		width: 100%;
		height: 100%;
		border-collapse: collapse;
		border-spacing: 0;
	}
</style>

