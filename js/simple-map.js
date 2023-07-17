// Initialize and add the map
let map;

async function initMap() {
    // The location of More London
    const position = { lat: 51.50462369531977, lng: -0.08113538091659021 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at More London
    map = new Map(document.getElementById("map"), {
        zoom: 4,
        center: position,
        mapId: "SIMPLE_MAP_ID",
    });

    // The marker, positioned at More London
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "PwC More London",
    });
}

initMap();