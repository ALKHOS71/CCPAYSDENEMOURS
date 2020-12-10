var size = 0;
var placement = 'point';
function categories_AMENAGEMENTSPRECONISES_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Voie Verte ou Piste cyclable':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,80,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(28,246,31,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Voie interdite aux véhicules motorisés sauf ayants droit':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,80,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(58,124,89,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Impasse avec débouché cyclable':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,80,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(68,92,227,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Chaussée à voie centrale banalisée':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,80,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,96,195,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zone 30 ou Zone 20':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,80,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(248,203,40,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Voie partagée':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,80,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(24,226,240,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Carrefour à feux':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,80,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(250,246,5,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Signalisation et marquage d\'une traversée cyclable':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,80,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(232,20,16,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EXISTANT':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,80,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(124,118,118,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Projet voir Département':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,126,127,1.0)', lineDash: [1,5], lineCap: 'round', lineJoin: 'round', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_AMENAGEMENTSPRECONISES_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("__AMGT PRE");
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("__IDENTIFI") !== null) {
        labelText = String(feature.get("__IDENTIFI"));
    }
    
var style = categories_AMENAGEMENTSPRECONISES_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
