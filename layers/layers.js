var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_exec_1 = new ol.format.GeoJSON();
var features_exec_1 = format_exec_1.readFeatures(json_exec_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_exec_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_exec_1.addFeatures(features_exec_1);
var lyr_exec_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_exec_1, 
                style: style_exec_1,
                popuplayertitle: "exec",
                interactive: true,
                title: '<img src="styles/legend/exec_1.png" /> exec'
            });
var format_25_day_2 = new ol.format.GeoJSON();
var features_25_day_2 = format_25_day_2.readFeatures(json_25_day_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_25_day_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_25_day_2.addFeatures(features_25_day_2);
var lyr_25_day_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_25_day_2, 
                style: style_25_day_2,
                popuplayertitle: "2.5_day",
                interactive: true,
    title: '2.5_day<br />\
    <img src="styles/legend/25_day_2_0.png" /> 2.45 - 2.92<br />\
    <img src="styles/legend/25_day_2_1.png" /> 2.92 - 4.1<br />\
    <img src="styles/legend/25_day_2_2.png" /> 4.1 - 4.4<br />\
    <img src="styles/legend/25_day_2_3.png" /> 4.4 - 4.82<br />\
    <img src="styles/legend/25_day_2_4.png" /> 4.82 - 5.6<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_exec_1.setVisible(true);lyr_25_day_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_exec_1,lyr_25_day_2];
lyr_exec_1.set('fieldAliases', {'time': 'time', 'type': 'type', });
lyr_25_day_2.set('fieldAliases', {'id': 'id', 'mag': 'mag', 'place': 'place', 'time': 'time', 'updated': 'updated', 'tz': 'tz', 'url': 'url', 'detail': 'detail', 'felt': 'felt', 'cdi': 'cdi', 'mmi': 'mmi', 'alert': 'alert', 'status': 'status', 'tsunami': 'tsunami', 'sig': 'sig', 'net': 'net', 'code': 'code', 'ids': 'ids', 'sources': 'sources', 'types': 'types', 'nst': 'nst', 'dmin': 'dmin', 'rms': 'rms', 'gap': 'gap', 'magType': 'magType', 'type': 'type', 'title': 'title', });
lyr_exec_1.set('fieldImages', {'time': '', 'type': '', });
lyr_25_day_2.set('fieldImages', {'id': '', 'mag': '', 'place': '', 'time': '', 'updated': '', 'tz': '', 'url': '', 'detail': '', 'felt': '', 'cdi': '', 'mmi': '', 'alert': '', 'status': '', 'tsunami': '', 'sig': '', 'net': '', 'code': '', 'ids': '', 'sources': '', 'types': '', 'nst': '', 'dmin': '', 'rms': '', 'gap': '', 'magType': '', 'type': '', 'title': '', });
lyr_exec_1.set('fieldLabels', {'time': 'no label', 'type': 'no label', });
lyr_25_day_2.set('fieldLabels', {'id': 'no label', 'mag': 'header label - always visible', 'place': 'no label', 'time': 'no label', 'updated': 'no label', 'tz': 'no label', 'url': 'no label', 'detail': 'no label', 'felt': 'no label', 'cdi': 'no label', 'mmi': 'no label', 'alert': 'no label', 'status': 'no label', 'tsunami': 'no label', 'sig': 'no label', 'net': 'no label', 'code': 'no label', 'ids': 'no label', 'sources': 'no label', 'types': 'no label', 'nst': 'no label', 'dmin': 'no label', 'rms': 'no label', 'gap': 'no label', 'magType': 'no label', 'type': 'no label', 'title': 'no label', });
lyr_25_day_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});