var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_pobl_repro_1 = new ol.format.GeoJSON();
var features_pobl_repro_1 = format_pobl_repro_1.readFeatures(json_pobl_repro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pobl_repro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pobl_repro_1.addFeatures(features_pobl_repro_1);
var lyr_pobl_repro_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pobl_repro_1, 
                style: style_pobl_repro_1,
                interactive: true,
    title: 'pobl_repro<br />\
    <img src="styles/legend/pobl_repro_1_0.png" /> 9 - 73 <br />\
    <img src="styles/legend/pobl_repro_1_1.png" /> 73 - 167 <br />\
    <img src="styles/legend/pobl_repro_1_2.png" /> 167 - 523 <br />\
    <img src="styles/legend/pobl_repro_1_3.png" /> 523 - 4239 <br />\
    <img src="styles/legend/pobl_repro_1_4.png" /> 4239 - 6393 <br />'
        });
var format_riosylagos_2 = new ol.format.GeoJSON();
var features_riosylagos_2 = format_riosylagos_2.readFeatures(json_riosylagos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_riosylagos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_riosylagos_2.addFeatures(features_riosylagos_2);
var lyr_riosylagos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_riosylagos_2, 
                style: style_riosylagos_2,
                interactive: true,
                title: '<img src="styles/legend/riosylagos_2.png" /> riosylagos'
            });
var format_ferrocarriles_3 = new ol.format.GeoJSON();
var features_ferrocarriles_3 = format_ferrocarriles_3.readFeatures(json_ferrocarriles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ferrocarriles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ferrocarriles_3.addFeatures(features_ferrocarriles_3);
var lyr_ferrocarriles_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ferrocarriles_3, 
                style: style_ferrocarriles_3,
                interactive: true,
                title: '<img src="styles/legend/ferrocarriles_3.png" /> ferrocarriles'
            });
var format_aero_esp_repro_4 = new ol.format.GeoJSON();
var features_aero_esp_repro_4 = format_aero_esp_repro_4.readFeatures(json_aero_esp_repro_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aero_esp_repro_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aero_esp_repro_4.addFeatures(features_aero_esp_repro_4);
var lyr_aero_esp_repro_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_aero_esp_repro_4, 
                style: style_aero_esp_repro_4,
                interactive: true,
                title: '<img src="styles/legend/aero_esp_repro_4.png" /> aero_esp_repro'
            });
var format_carreteras_5 = new ol.format.GeoJSON();
var features_carreteras_5 = format_carreteras_5.readFeatures(json_carreteras_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_carreteras_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carreteras_5.addFeatures(features_carreteras_5);
var lyr_carreteras_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_carreteras_5, 
                style: style_carreteras_5,
                interactive: true,
                title: '<img src="styles/legend/carreteras_5.png" /> carreteras'
            });
var format_cap_nacional_6 = new ol.format.GeoJSON();
var features_cap_nacional_6 = format_cap_nacional_6.readFeatures(json_cap_nacional_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cap_nacional_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cap_nacional_6.addFeatures(features_cap_nacional_6);
var lyr_cap_nacional_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cap_nacional_6, 
                style: style_cap_nacional_6,
                interactive: true,
                title: '<img src="styles/legend/cap_nacional_6.png" /> cap_nacional'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_pobl_repro_1.setVisible(true);lyr_riosylagos_2.setVisible(true);lyr_ferrocarriles_3.setVisible(true);lyr_aero_esp_repro_4.setVisible(true);lyr_carreteras_5.setVisible(true);lyr_cap_nacional_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_pobl_repro_1,lyr_riosylagos_2,lyr_ferrocarriles_3,lyr_aero_esp_repro_4,lyr_carreteras_5,lyr_cap_nacional_6];
lyr_pobl_repro_1.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'NATCODE': 'código', 'NAMEUNIT': 'nombre', 'pob_tot_es': 'población total', 'area': 'area', 'densidad': 'hab/km2', });
lyr_riosylagos_2.set('fieldAliases', {'gid': 'gid', 'codmasa': 'código', 'nommasa': 'nombre', 'supkm2': 'supkm2', 'nomdemarc': 'tipo', 'naturldad': 'estado', 'codtipona': 'subcódigo', 'nomtipona': 'zona', 'embalse': 'embalse', 'area': 'area', });
lyr_ferrocarriles_3.set('fieldAliases', {'OBJECTID': 'objeto', 'id_tramo': 'ID tramo', 'codigo': 'codigo', 'tipotramoD': 'tipo de tramo', 'estadofisD': 'estado', 'n_viasD': 'cantidad de vias', 'situacionD': 'situación', 'uso_ppalD': 'uso', 'fecha_alta': 'fecha de alta', 'id_lineafc': 'ID de linea', 'nombre': 'nombre', 'tipo_lineD': 'tipo de linea', 'Shape__Len': 'extención', });
lyr_aero_esp_repro_4.set('fieldAliases', {'OBJECTID': 'numobjeto', 'Texto': 'aeropuerto', });
lyr_carreteras_5.set('fieldAliases', {'MED_DESCRI': 'descripción', 'RTT_DESCRI': 'tipo', 'F_CODE_DES': 'clase', });
lyr_cap_nacional_6.set('fieldAliases', {'CITY_NAME': 'Ciudad', 'ADMIN_NAME': 'Capital', 'CNTRY_NAME': 'País', 'STATUS': 'Tipo', 'pob': 'pob', 'fundacion': 'fundacion', 'moneda': 'moneda', 'idioma': 'idioma', });
lyr_pobl_repro_1.set('fieldImages', {'INSPIREID': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEUNIT': 'TextEdit', 'pob_tot_es': 'TextEdit', 'area': 'TextEdit', 'densidad': 'TextEdit', });
lyr_riosylagos_2.set('fieldImages', {'gid': 'TextEdit', 'codmasa': 'TextEdit', 'nommasa': 'TextEdit', 'supkm2': 'TextEdit', 'nomdemarc': 'TextEdit', 'naturldad': 'TextEdit', 'codtipona': 'TextEdit', 'nomtipona': 'TextEdit', 'embalse': 'TextEdit', 'area': 'TextEdit', });
lyr_ferrocarriles_3.set('fieldImages', {'OBJECTID': 'Range', 'id_tramo': 'TextEdit', 'codigo': 'TextEdit', 'tipotramoD': 'TextEdit', 'estadofisD': 'TextEdit', 'n_viasD': 'TextEdit', 'situacionD': 'TextEdit', 'uso_ppalD': 'TextEdit', 'fecha_alta': 'DateTime', 'id_lineafc': 'TextEdit', 'nombre': 'TextEdit', 'tipo_lineD': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_aero_esp_repro_4.set('fieldImages', {'OBJECTID': 'Range', 'Texto': 'TextEdit', });
lyr_carreteras_5.set('fieldImages', {'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', });
lyr_cap_nacional_6.set('fieldImages', {'CITY_NAME': 'TextEdit', 'ADMIN_NAME': 'TextEdit', 'CNTRY_NAME': 'TextEdit', 'STATUS': 'TextEdit', 'pob': 'TextEdit', 'fundacion': 'Range', 'moneda': 'TextEdit', 'idioma': 'TextEdit', });
lyr_pobl_repro_1.set('fieldLabels', {'INSPIREID': 'no label', 'NATCODE': 'no label', 'NAMEUNIT': 'inline label', 'pob_tot_es': 'inline label', 'area': 'inline label', 'densidad': 'inline label', });
lyr_riosylagos_2.set('fieldLabels', {'gid': 'no label', 'codmasa': 'no label', 'nommasa': 'inline label', 'supkm2': 'inline label', 'nomdemarc': 'inline label', 'naturldad': 'no label', 'codtipona': 'no label', 'nomtipona': 'inline label', 'embalse': 'inline label', 'area': 'no label', });
lyr_ferrocarriles_3.set('fieldLabels', {'OBJECTID': 'no label', 'id_tramo': 'no label', 'codigo': 'no label', 'tipotramoD': 'inline label', 'estadofisD': 'no label', 'n_viasD': 'no label', 'situacionD': 'no label', 'uso_ppalD': 'no label', 'fecha_alta': 'no label', 'id_lineafc': 'no label', 'nombre': 'inline label', 'tipo_lineD': 'inline label', 'Shape__Len': 'no label', });
lyr_aero_esp_repro_4.set('fieldLabels', {'OBJECTID': 'no label', 'Texto': 'inline label', });
lyr_carreteras_5.set('fieldLabels', {'MED_DESCRI': 'inline label', 'RTT_DESCRI': 'inline label', 'F_CODE_DES': 'header label', });
lyr_cap_nacional_6.set('fieldLabels', {'CITY_NAME': 'inline label', 'ADMIN_NAME': 'inline label', 'CNTRY_NAME': 'inline label', 'STATUS': 'inline label', 'pob': 'inline label', 'fundacion': 'inline label', 'moneda': 'inline label', 'idioma': 'inline label', });
lyr_cap_nacional_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});