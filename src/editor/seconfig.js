//export const DEFAULTTILESETPATH = "./spritesheets/women.png";
//export const DEFAULTILEDIMX = 32; // px
//export const DEFAULTILEDIMY = 34; // px

//export const DEFAULTTILESETPATH = "./spritesheets/doll.png";
//export const DEFAULTILEDIMX = 48; // px
//export const DEFAULTILEDIMY = 48; // px

// export const DEFAULTTILESETPATH = "./spritesheets/peeps.png";
// export const DEFAULTILEDIMX = 48; // px
// export const DEFAULTILEDIMY = 96; // px

export const DEFAULTTILESETPATH = "./spritesheets/tall.png";
export const DEFAULTILEDIMX = 48; // px
export const DEFAULTILEDIMY = 80; // px


// If there is padding between tilesets, set this to the pixel size
export const tilesetpadding = 0; 


// width / height of layer panes
export const levelwidth  = 1024; // px
export const levelheight = 768; // px

export let leveltilewidth  = Math.floor(levelwidth / DEFAULTILEDIMX);
export let leveltileheight = Math.floor(levelheight / DEFAULTILEDIMX);

export const MAXTILEINDEX = leveltilewidth * leveltileheight;


// -- HTML

export const htmlLayerPaneW = 800;
export const htmlLayerPaneH = 600;

export const htmlTilesetPaneW = 1600;
export const htmlTilesetPaneH = 1600;

export const htmlCompositePaneW = 800;
export const htmlCompositePaneH = 600;

// --  zIndex

// 1-10 taken by layers
export const zIndexFilter           =  20;
export const zIndexMouseShadow      =  30;
export const zIndexGrid             =  50;
export const zIndexCompositePointer =  100;
