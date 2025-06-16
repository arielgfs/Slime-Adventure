gdjs.LoseCode = {};
gdjs.LoseCode.localVariables = [];
gdjs.LoseCode.GDTitleObjects1= [];
gdjs.LoseCode.GDTitleObjects2= [];
gdjs.LoseCode.GDPlay2Objects1= [];
gdjs.LoseCode.GDPlay2Objects2= [];
gdjs.LoseCode.GDPlayObjects1= [];
gdjs.LoseCode.GDPlayObjects2= [];
gdjs.LoseCode.GDMenuObjects1= [];
gdjs.LoseCode.GDMenuObjects2= [];
gdjs.LoseCode.GDSlimeObjects1= [];
gdjs.LoseCode.GDSlimeObjects2= [];
gdjs.LoseCode.GDGroundObjects1= [];
gdjs.LoseCode.GDGroundObjects2= [];
gdjs.LoseCode.GDGround2Objects1= [];
gdjs.LoseCode.GDGround2Objects2= [];
gdjs.LoseCode.GDTree2Objects1= [];
gdjs.LoseCode.GDTree2Objects2= [];
gdjs.LoseCode.GDNewSpriteObjects1= [];
gdjs.LoseCode.GDNewSpriteObjects2= [];
gdjs.LoseCode.GDNewSprite2Objects1= [];
gdjs.LoseCode.GDNewSprite2Objects2= [];
gdjs.LoseCode.GDNewSprite3Objects1= [];
gdjs.LoseCode.GDNewSprite3Objects2= [];
gdjs.LoseCode.GDNewSprite4Objects1= [];
gdjs.LoseCode.GDNewSprite4Objects2= [];
gdjs.LoseCode.GDNewSprite5Objects1= [];
gdjs.LoseCode.GDNewSprite5Objects2= [];
gdjs.LoseCode.GDarielObjects1= [];
gdjs.LoseCode.GDarielObjects2= [];


gdjs.LoseCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.advancedWindow.setFullScreenable(true, runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(6);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play2"), gdjs.LoseCode.GDPlay2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoseCode.GDPlay2Objects1.length;i<l;++i) {
    if ( gdjs.LoseCode.GDPlay2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoseCode.GDPlay2Objects1[k] = gdjs.LoseCode.GDPlay2Objects1[i];
        ++k;
    }
}
gdjs.LoseCode.GDPlay2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.LoseCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoseCode.GDMenuObjects1.length;i<l;++i) {
    if ( gdjs.LoseCode.GDMenuObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoseCode.GDMenuObjects1[k] = gdjs.LoseCode.GDMenuObjects1[i];
        ++k;
    }
}
gdjs.LoseCode.GDMenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.LoseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoseCode.GDTitleObjects1.length = 0;
gdjs.LoseCode.GDTitleObjects2.length = 0;
gdjs.LoseCode.GDPlay2Objects1.length = 0;
gdjs.LoseCode.GDPlay2Objects2.length = 0;
gdjs.LoseCode.GDPlayObjects1.length = 0;
gdjs.LoseCode.GDPlayObjects2.length = 0;
gdjs.LoseCode.GDMenuObjects1.length = 0;
gdjs.LoseCode.GDMenuObjects2.length = 0;
gdjs.LoseCode.GDSlimeObjects1.length = 0;
gdjs.LoseCode.GDSlimeObjects2.length = 0;
gdjs.LoseCode.GDGroundObjects1.length = 0;
gdjs.LoseCode.GDGroundObjects2.length = 0;
gdjs.LoseCode.GDGround2Objects1.length = 0;
gdjs.LoseCode.GDGround2Objects2.length = 0;
gdjs.LoseCode.GDTree2Objects1.length = 0;
gdjs.LoseCode.GDTree2Objects2.length = 0;
gdjs.LoseCode.GDNewSpriteObjects1.length = 0;
gdjs.LoseCode.GDNewSpriteObjects2.length = 0;
gdjs.LoseCode.GDNewSprite2Objects1.length = 0;
gdjs.LoseCode.GDNewSprite2Objects2.length = 0;
gdjs.LoseCode.GDNewSprite3Objects1.length = 0;
gdjs.LoseCode.GDNewSprite3Objects2.length = 0;
gdjs.LoseCode.GDNewSprite4Objects1.length = 0;
gdjs.LoseCode.GDNewSprite4Objects2.length = 0;
gdjs.LoseCode.GDNewSprite5Objects1.length = 0;
gdjs.LoseCode.GDNewSprite5Objects2.length = 0;
gdjs.LoseCode.GDarielObjects1.length = 0;
gdjs.LoseCode.GDarielObjects2.length = 0;

gdjs.LoseCode.eventsList0(runtimeScene);
gdjs.LoseCode.GDTitleObjects1.length = 0;
gdjs.LoseCode.GDTitleObjects2.length = 0;
gdjs.LoseCode.GDPlay2Objects1.length = 0;
gdjs.LoseCode.GDPlay2Objects2.length = 0;
gdjs.LoseCode.GDPlayObjects1.length = 0;
gdjs.LoseCode.GDPlayObjects2.length = 0;
gdjs.LoseCode.GDMenuObjects1.length = 0;
gdjs.LoseCode.GDMenuObjects2.length = 0;
gdjs.LoseCode.GDSlimeObjects1.length = 0;
gdjs.LoseCode.GDSlimeObjects2.length = 0;
gdjs.LoseCode.GDGroundObjects1.length = 0;
gdjs.LoseCode.GDGroundObjects2.length = 0;
gdjs.LoseCode.GDGround2Objects1.length = 0;
gdjs.LoseCode.GDGround2Objects2.length = 0;
gdjs.LoseCode.GDTree2Objects1.length = 0;
gdjs.LoseCode.GDTree2Objects2.length = 0;
gdjs.LoseCode.GDNewSpriteObjects1.length = 0;
gdjs.LoseCode.GDNewSpriteObjects2.length = 0;
gdjs.LoseCode.GDNewSprite2Objects1.length = 0;
gdjs.LoseCode.GDNewSprite2Objects2.length = 0;
gdjs.LoseCode.GDNewSprite3Objects1.length = 0;
gdjs.LoseCode.GDNewSprite3Objects2.length = 0;
gdjs.LoseCode.GDNewSprite4Objects1.length = 0;
gdjs.LoseCode.GDNewSprite4Objects2.length = 0;
gdjs.LoseCode.GDNewSprite5Objects1.length = 0;
gdjs.LoseCode.GDNewSprite5Objects2.length = 0;
gdjs.LoseCode.GDarielObjects1.length = 0;
gdjs.LoseCode.GDarielObjects2.length = 0;


return;

}

gdjs['LoseCode'] = gdjs.LoseCode;
