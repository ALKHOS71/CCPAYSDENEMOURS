var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AMENAGEMENTSPRECONISES_1 = new ol.format.GeoJSON();
var features_AMENAGEMENTSPRECONISES_1 = format_AMENAGEMENTSPRECONISES_1.readFeatures(json_AMENAGEMENTSPRECONISES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMENAGEMENTSPRECONISES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMENAGEMENTSPRECONISES_1.addFeatures(features_AMENAGEMENTSPRECONISES_1);
var lyr_AMENAGEMENTSPRECONISES_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AMENAGEMENTSPRECONISES_1, 
                style: style_AMENAGEMENTSPRECONISES_1,
                interactive: false,
    title: 'AMENAGEMENTS PRECONISES<br />\
    <img src="styles/legend/AMENAGEMENTSPRECONISES_1_0.png" /> Voie Verte ou Piste cyclable<br />\
    <img src="styles/legend/AMENAGEMENTSPRECONISES_1_1.png" /> Voie interdite aux véhicules motorisés sauf ayants droit<br />\
    <img src="styles/legend/AMENAGEMENTSPRECONISES_1_2.png" /> Impasse avec débouché cyclable<br />\
    <img src="styles/legend/AMENAGEMENTSPRECONISES_1_3.png" /> Chaussée à Voie Centrale Banalisée<br />\
    <img src="styles/legend/AMENAGEMENTSPRECONISES_1_4.png" /> Zone 30 ou Zone 20<br />\
    <img src="styles/legend/AMENAGEMENTSPRECONISES_1_5.png" /> Voie partagée<br />\
    <img src="styles/legend/AMENAGEMENTSPRECONISES_1_6.png" /> Carrefour à feux<br />\
    <img src="styles/legend/AMENAGEMENTSPRECONISES_1_7.png" /> Signalisation et marquage d\'une traversée cyclable<br />\
    <img src="styles/legend/AMENAGEMENTSPRECONISES_1_8.png" /> EXISTANT<br />\
    <img src="styles/legend/AMENAGEMENTSPRECONISES_1_9.png" /> Projet voir Département<br />'
        });
var format_ANTENNESDACCESEV3_2 = new ol.format.GeoJSON();
var features_ANTENNESDACCESEV3_2 = format_ANTENNESDACCESEV3_2.readFeatures(json_ANTENNESDACCESEV3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANTENNESDACCESEV3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANTENNESDACCESEV3_2.addFeatures(features_ANTENNESDACCESEV3_2);
var lyr_ANTENNESDACCESEV3_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ANTENNESDACCESEV3_2, 
                style: style_ANTENNESDACCESEV3_2,
                interactive: false,
                title: '<img src="styles/legend/ANTENNESDACCESEV3_2.png" /> ANTENNES D\'ACCES EV3'
            });
var format_EV3_3 = new ol.format.GeoJSON();
var features_EV3_3 = format_EV3_3.readFeatures(json_EV3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EV3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EV3_3.addFeatures(features_EV3_3);
var lyr_EV3_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EV3_3, 
                style: style_EV3_3,
                interactive: false,
                title: '<img src="styles/legend/EV3_3.png" /> EV3'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AMENAGEMENTSPRECONISES_1.setVisible(true);lyr_ANTENNESDACCESEV3_2.setVisible(true);lyr_EV3_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AMENAGEMENTSPRECONISES_1,lyr_ANTENNESDACCESEV3_2,lyr_EV3_3];
lyr_AMENAGEMENTSPRECONISES_1.set('fieldAliases', {'__EPCI': '__EPCI', '__COMMUNE': '__COMMUNE', '__NOMLIAIS': '__NOMLIAIS', '__BOUCLE C': '__BOUCLE C', '__AXE ALKH': '__AXE ALKH', '__FONCTION': '__FONCTION', '__IDENTIFI': '__IDENTIFI', '__PRATICAB': '__PRATICAB', '__TYPE_EXI': '__TYPE_EXI', '__Accot1': '__Accot1', '__Chaussé': '__Chaussé', '__Accot2': '__Accot2', '__COMMENTA': '__COMMENTA', '__LINEAIRE': '__LINEAIRE', '__EXISTPRO': '__EXISTPRO', '__SCHEMA C': '__SCHEMA C', '__AMGT PRE': '__AMGT PRE', '__PROFIL T': '__PROFIL T', '__TRAVAUX': '__TRAVAUX', '__PU_TVX_�': '__PU_TVX_�', '__P_TVX_��': '__P_TVX_��', '__MOEALEAS': '__MOEALEAS', '__P_FONC_�': '__P_FONC_�', '__TOTAL_��': '__TOTAL_��', });
lyr_ANTENNESDACCESEV3_2.set('fieldAliases', {'EPCI': 'EPCI', 'COMMUNE': 'COMMUNE', 'POLES_DESS': 'POLES_DESS', 'LINEAIRE': 'LINEAIRE', 'REMARQUE': 'REMARQUE', });
lyr_EV3_3.set('fieldAliases', {'id': 'id', });
lyr_AMENAGEMENTSPRECONISES_1.set('fieldImages', {'__EPCI': 'TextEdit', '__COMMUNE': 'TextEdit', '__NOMLIAIS': 'TextEdit', '__BOUCLE C': 'TextEdit', '__AXE ALKH': 'TextEdit', '__FONCTION': 'TextEdit', '__IDENTIFI': 'TextEdit', '__PRATICAB': 'TextEdit', '__TYPE_EXI': 'TextEdit', '__Accot1': 'TextEdit', '__Chaussé': 'TextEdit', '__Accot2': 'TextEdit', '__COMMENTA': 'TextEdit', '__LINEAIRE': 'Range', '__EXISTPRO': 'TextEdit', '__SCHEMA C': 'TextEdit', '__AMGT PRE': 'TextEdit', '__PROFIL T': 'TextEdit', '__TRAVAUX': 'TextEdit', '__PU_TVX_�': 'TextEdit', '__P_TVX_��': 'TextEdit', '__MOEALEAS': 'TextEdit', '__P_FONC_�': 'TextEdit', '__TOTAL_��': 'TextEdit', });
lyr_ANTENNESDACCESEV3_2.set('fieldImages', {'EPCI': 'TextEdit', 'COMMUNE': 'TextEdit', 'POLES_DESS': 'TextEdit', 'LINEAIRE': 'TextEdit', 'REMARQUE': 'TextEdit', });
lyr_EV3_3.set('fieldImages', {'id': 'TextEdit', });
lyr_AMENAGEMENTSPRECONISES_1.set('fieldLabels', {'__EPCI': 'inline label', '__COMMUNE': 'inline label', '__NOMLIAIS': 'inline label', '__BOUCLE C': 'inline label', '__AXE ALKH': 'inline label', '__FONCTION': 'inline label', '__IDENTIFI': 'inline label', '__PRATICAB': 'inline label', '__TYPE_EXI': 'inline label', '__Accot1': 'inline label', '__Chaussé': 'inline label', '__Accot2': 'inline label', '__COMMENTA': 'no label', '__LINEAIRE': 'inline label', '__EXISTPRO': 'inline label', '__SCHEMA C': 'inline label', '__AMGT PRE': 'inline label', '__PROFIL T': 'inline label', '__TRAVAUX': 'inline label', '__PU_TVX_�': 'inline label', '__P_TVX_��': 'inline label', '__MOEALEAS': 'inline label', '__P_FONC_�': 'inline label', '__TOTAL_��': 'inline label', });
lyr_ANTENNESDACCESEV3_2.set('fieldLabels', {'EPCI': 'no label', 'COMMUNE': 'no label', 'POLES_DESS': 'no label', 'LINEAIRE': 'no label', 'REMARQUE': 'no label', });
lyr_EV3_3.set('fieldLabels', {'id': 'no label', });
lyr_EV3_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});