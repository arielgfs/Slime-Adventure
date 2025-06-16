gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDQuitObjects1= [];
gdjs.MenuCode.GDQuitObjects2= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDTutorialObjects1= [];
gdjs.MenuCode.GDTutorialObjects2= [];
gdjs.MenuCode.GDSlimeObjects1= [];
gdjs.MenuCode.GDSlimeObjects2= [];
gdjs.MenuCode.GDGroundObjects1= [];
gdjs.MenuCode.GDGroundObjects2= [];
gdjs.MenuCode.GDGround2Objects1= [];
gdjs.MenuCode.GDGround2Objects2= [];
gdjs.MenuCode.GDTree2Objects1= [];
gdjs.MenuCode.GDTree2Objects2= [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDNewSprite2Objects1= [];
gdjs.MenuCode.GDNewSprite2Objects2= [];
gdjs.MenuCode.GDNewSprite3Objects1= [];
gdjs.MenuCode.GDNewSprite3Objects2= [];
gdjs.MenuCode.GDNewSprite4Objects1= [];
gdjs.MenuCode.GDNewSprite4Objects2= [];
gdjs.MenuCode.GDNewSprite5Objects1= [];
gdjs.MenuCode.GDNewSprite5Objects2= [];
gdjs.MenuCode.GDarielObjects1= [];
gdjs.MenuCode.GDarielObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlayObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayObjects1[k] = gdjs.MenuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MenuCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDQuitObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDQuitObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDQuitObjects1[k] = gdjs.MenuCode.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDQuitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.MenuCode.GDTutorialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDTutorialObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDTutorialObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDTutorialObjects1[k] = gdjs.MenuCode.GDTutorialObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDTutorialObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.advancedWindow.setFullScreenable(true, runtimeScene);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDQuitObjects1.length = 0;
gdjs.MenuCode.GDQuitObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDTutorialObjects1.length = 0;
gdjs.MenuCode.GDTutorialObjects2.length = 0;
gdjs.MenuCode.GDSlimeObjects1.length = 0;
gdjs.MenuCode.GDSlimeObjects2.length = 0;
gdjs.MenuCode.GDGroundObjects1.length = 0;
gdjs.MenuCode.GDGroundObjects2.length = 0;
gdjs.MenuCode.GDGround2Objects1.length = 0;
gdjs.MenuCode.GDGround2Objects2.length = 0;
gdjs.MenuCode.GDTree2Objects1.length = 0;
gdjs.MenuCode.GDTree2Objects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MenuCode.GDNewSprite3Objects2.length = 0;
gdjs.MenuCode.GDNewSprite4Objects1.length = 0;
gdjs.MenuCode.GDNewSprite4Objects2.length = 0;
gdjs.MenuCode.GDNewSprite5Objects1.length = 0;
gdjs.MenuCode.GDNewSprite5Objects2.length = 0;
gdjs.MenuCode.GDarielObjects1.length = 0;
gdjs.MenuCode.GDarielObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDQuitObjects1.length = 0;
gdjs.MenuCode.GDQuitObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDTutorialObjects1.length = 0;
gdjs.MenuCode.GDTutorialObjects2.length = 0;
gdjs.MenuCode.GDSlimeObjects1.length = 0;
gdjs.MenuCode.GDSlimeObjects2.length = 0;
gdjs.MenuCode.GDGroundObjects1.length = 0;
gdjs.MenuCode.GDGroundObjects2.length = 0;
gdjs.MenuCode.GDGround2Objects1.length = 0;
gdjs.MenuCode.GDGround2Objects2.length = 0;
gdjs.MenuCode.GDTree2Objects1.length = 0;
gdjs.MenuCode.GDTree2Objects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MenuCode.GDNewSprite3Objects2.length = 0;
gdjs.MenuCode.GDNewSprite4Objects1.length = 0;
gdjs.MenuCode.GDNewSprite4Objects2.length = 0;
gdjs.MenuCode.GDNewSprite5Objects1.length = 0;
gdjs.MenuCode.GDNewSprite5Objects2.length = 0;
gdjs.MenuCode.GDarielObjects1.length = 0;
gdjs.MenuCode.GDarielObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
