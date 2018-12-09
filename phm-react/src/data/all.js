import beadsUk from "./uk/beads/beads";
import earringsUk from "./uk/earrings/earrings";
import braceletsUk from "./uk/bracelets/bracelets";
import collectionsUk from "./uk/collections/collections";
import bridalUk from "./uk/bridal/bridal";
import handmadeUk from "./uk/handmade/handmade";
import beadsRu from "./ru/beads/beads";
import earringsRu from "./ru/earrings/earrings";
import braceletsRu from "./ru/bracelets/bracelets";
import collectionsRu from "./ru/collections/collections";
import bridalRu from "./ru/bridal/bridal";
import handmadeRu from "./ru/handmade/handmade";


const all = [
    {idString: 'beads', uk: beadsUk, ru: beadsRu}, //300-500
    {idString: 'earrings', uk: earringsUk, ru: earringsRu}, //510-600
    {idString: 'bracelets', uk: braceletsUk, ru: braceletsRu}, //610-700
    {idString: 'collections', uk: collectionsUk, ru: collectionsRu}, //710-800
    {idString: 'bridal', uk: bridalUk, ru: bridalRu}, //810-900
    {idString: 'handmade', uk: handmadeUk, ru: handmadeRu } //910-1000
];
export default all;