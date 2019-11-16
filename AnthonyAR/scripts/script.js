/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

const NativeUI = require('NativeUI')
const Scene = require('Scene'); 
const Textures = require('Textures'); 

const plane = Scene.root.find('plane0000'); 

const description = Textures.get('description'); 
const artist = Textures.get('artist'); 
const contact = Textures.get('contact'); 

const picker = NativeUI.picker; 

const index = 0; 

const configuration = { 

  selectedIndex: index, 

  items: [ 
    {image_texture: description}, 
    {image_texture: artist}, 
    {image_texture: contact}, 
    {image_texture: description}, 
    {image_texture: artist},
    {image_texture: contact}, 
    {image_texture: description}, 
    {image_texture: artist}, 
    {image_texture: contact} 
  ]

};

picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(index) {
    plane.material.diffuse = configuration.items[index.newValue].image_texture;
});  