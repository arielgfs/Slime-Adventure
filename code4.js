gdjs.WinCode = {};
gdjs.WinCode.localVariables = [];
gdjs.WinCode.GDMenangObjects1= [];
gdjs.WinCode.GDMenangObjects2= [];
gdjs.WinCode.GDPlay2Objects1= [];
gdjs.WinCode.GDPlay2Objects2= [];
gdjs.WinCode.GDPlayObjects1= [];
gdjs.WinCode.GDPlayObjects2= [];
gdjs.WinCode.GDMenuObjects1= [];
gdjs.WinCode.GDMenuObjects2= [];
gdjs.WinCode.GDSlimeObjects1= [];
gdjs.WinCode.GDSlimeObjects2= [];
gdjs.WinCode.GDGroundObjects1= [];
gdjs.WinCode.GDGroundObjects2= [];
gdjs.WinCode.GDGround2Objects1= [];
gdjs.WinCode.GDGround2Objects2= [];
gdjs.WinCode.GDTree2Objects1= [];
gdjs.WinCode.GDTree2Objects2= [];
gdjs.WinCode.GDNewSpriteObjects1= [];
gdjs.WinCode.GDNewSpriteObjects2= [];
gdjs.WinCode.GDNewSprite2Objects1= [];
gdjs.WinCode.GDNewSprite2Objects2= [];
gdjs.WinCode.GDNewSprite3Objects1= [];
gdjs.WinCode.GDNewSprite3Objects2= [];
gdjs.WinCode.GDNewSprite4Objects1= [];
gdjs.WinCode.GDNewSprite4Objects2= [];
gdjs.WinCode.GDNewSprite5Objects1= [];
gdjs.WinCode.GDNewSprite5Objects2= [];
gdjs.WinCode.GDarielObjects1= [];
gdjs.WinCode.GDarielObjects2= [];
gdjs.WinCode.GDStar1Objects1= [];
gdjs.WinCode.GDStar1Objects2= [];
gdjs.WinCode.GDStar2Objects1= [];
gdjs.WinCode.GDStar2Objects2= [];
gdjs.WinCode.GDStar3Objects1= [];
gdjs.WinCode.GDStar3Objects2= [];
gdjs.WinCode.GDStar4Objects1= [];
gdjs.WinCode.GDStar4Objects2= [];
gdjs.WinCode.GDStar5Objects1= [];
gdjs.WinCode.GDStar5Objects2= [];
gdjs.WinCode.GDStar6Objects1= [];
gdjs.WinCode.GDStar6Objects2= [];
gdjs.WinCode.GDHeart2Objects1= [];
gdjs.WinCode.GDHeart2Objects2= [];
gdjs.WinCode.GDQuestionMarkObjects1= [];
gdjs.WinCode.GDQuestionMarkObjects2= [];
gdjs.WinCode.GDHearObjects1= [];
gdjs.WinCode.GDHearObjects2= [];
gdjs.WinCode.GDTree3Objects1= [];
gdjs.WinCode.GDTree3Objects2= [];
gdjs.WinCode.GDSecret2Objects1= [];
gdjs.WinCode.GDSecret2Objects2= [];


gdjs.WinCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hear"), gdjs.WinCode.GDHearObjects1);
gdjs.copyArray(runtimeScene.getObjects("Secret2"), gdjs.WinCode.GDSecret2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tree3"), gdjs.WinCode.GDTree3Objects1);
{gdjs.evtTools.advancedWindow.setFullScreenable(true, runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{for(var i = 0, len = gdjs.WinCode.GDHearObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDHearObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() + " > 3 =");
}
}{for(var i = 0, len = gdjs.WinCode.GDTree3Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDTree3Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() + " / 3  =");
}
}{for(var i = 0, len = gdjs.WinCode.GDSecret2Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDSecret2Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() + " / 3  =");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() > 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20005484);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Star4"), gdjs.WinCode.GDStar4Objects1);
{for(var i = 0, len = gdjs.WinCode.GDStar4Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDStar4Objects1[i].getBehavior("Animation").setAnimationName("Star 2");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20001396);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Star5"), gdjs.WinCode.GDStar5Objects1);
{for(var i = 0, len = gdjs.WinCode.GDStar5Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDStar5Objects1[i].getBehavior("Animation").setAnimationName("Star 2");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20000372);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Star6"), gdjs.WinCode.GDStar6Objects1);
{for(var i = 0, len = gdjs.WinCode.GDStar6Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDStar6Objects1[i].getBehavior("Animation").setAnimationName("Star 2");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Star1"), gdjs.WinCode.GDStar1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Star2"), gdjs.WinCode.GDStar2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Star3"), gdjs.WinCode.GDStar3Objects1);
{for(var i = 0, len = gdjs.WinCode.GDStar1Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDStar1Objects1[i].getBehavior("Animation").setAnimationName("Star 2 ");
}
}{for(var i = 0, len = gdjs.WinCode.GDStar2Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDStar2Objects1[i].getBehavior("Animation").setAnimationName("Star 1");
}
}{for(var i = 0, len = gdjs.WinCode.GDStar3Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDStar3Objects1[i].getBehavior("Animation").setAnimationName("Star 1 ");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Star1"), gdjs.WinCode.GDStar1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Star2"), gdjs.WinCode.GDStar2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Star3"), gdjs.WinCode.GDStar3Objects1);
{for(var i = 0, len = gdjs.WinCode.GDStar1Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDStar1Objects1[i].getBehavior("Animation").setAnimationName("Star 2 ");
}
}{for(var i = 0, len = gdjs.WinCode.GDStar2Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDStar2Objects1[i].getBehavior("Animation").setAnimationName("Star 2");
}
}{for(var i = 0, len = gdjs.WinCode.GDStar3Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDStar3Objects1[i].getBehavior("Animation").setAnimationName("Star 1 ");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Star1"), gdjs.WinCode.GDStar1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Star2"), gdjs.WinCode.GDStar2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Star3"), gdjs.WinCode.GDStar3Objects1);
{for(var i = 0, len = gdjs.WinCode.GDStar1Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDStar1Objects1[i].getBehavior("Animation").setAnimationName("Star 2 ");
}
}{for(var i = 0, len = gdjs.WinCode.GDStar2Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDStar2Objects1[i].getBehavior("Animation").setAnimationName("Star 2");
}
}{for(var i = 0, len = gdjs.WinCode.GDStar3Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDStar3Objects1[i].getBehavior("Animation").setAnimationName("Star 2");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.WinCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinCode.GDMenuObjects1.length;i<l;++i) {
    if ( gdjs.WinCode.GDMenuObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WinCode.GDMenuObjects1[k] = gdjs.WinCode.GDMenuObjects1[i];
        ++k;
    }
}
gdjs.WinCode.GDMenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDMenangObjects1.length = 0;
gdjs.WinCode.GDMenangObjects2.length = 0;
gdjs.WinCode.GDPlay2Objects1.length = 0;
gdjs.WinCode.GDPlay2Objects2.length = 0;
gdjs.WinCode.GDPlayObjects1.length = 0;
gdjs.WinCode.GDPlayObjects2.length = 0;
gdjs.WinCode.GDMenuObjects1.length = 0;
gdjs.WinCode.GDMenuObjects2.length = 0;
gdjs.WinCode.GDSlimeObjects1.length = 0;
gdjs.WinCode.GDSlimeObjects2.length = 0;
gdjs.WinCode.GDGroundObjects1.length = 0;
gdjs.WinCode.GDGroundObjects2.length = 0;
gdjs.WinCode.GDGround2Objects1.length = 0;
gdjs.WinCode.GDGround2Objects2.length = 0;
gdjs.WinCode.GDTree2Objects1.length = 0;
gdjs.WinCode.GDTree2Objects2.length = 0;
gdjs.WinCode.GDNewSpriteObjects1.length = 0;
gdjs.WinCode.GDNewSpriteObjects2.length = 0;
gdjs.WinCode.GDNewSprite2Objects1.length = 0;
gdjs.WinCode.GDNewSprite2Objects2.length = 0;
gdjs.WinCode.GDNewSprite3Objects1.length = 0;
gdjs.WinCode.GDNewSprite3Objects2.length = 0;
gdjs.WinCode.GDNewSprite4Objects1.length = 0;
gdjs.WinCode.GDNewSprite4Objects2.length = 0;
gdjs.WinCode.GDNewSprite5Objects1.length = 0;
gdjs.WinCode.GDNewSprite5Objects2.length = 0;
gdjs.WinCode.GDarielObjects1.length = 0;
gdjs.WinCode.GDarielObjects2.length = 0;
gdjs.WinCode.GDStar1Objects1.length = 0;
gdjs.WinCode.GDStar1Objects2.length = 0;
gdjs.WinCode.GDStar2Objects1.length = 0;
gdjs.WinCode.GDStar2Objects2.length = 0;
gdjs.WinCode.GDStar3Objects1.length = 0;
gdjs.WinCode.GDStar3Objects2.length = 0;
gdjs.WinCode.GDStar4Objects1.length = 0;
gdjs.WinCode.GDStar4Objects2.length = 0;
gdjs.WinCode.GDStar5Objects1.length = 0;
gdjs.WinCode.GDStar5Objects2.length = 0;
gdjs.WinCode.GDStar6Objects1.length = 0;
gdjs.WinCode.GDStar6Objects2.length = 0;
gdjs.WinCode.GDHeart2Objects1.length = 0;
gdjs.WinCode.GDHeart2Objects2.length = 0;
gdjs.WinCode.GDQuestionMarkObjects1.length = 0;
gdjs.WinCode.GDQuestionMarkObjects2.length = 0;
gdjs.WinCode.GDHearObjects1.length = 0;
gdjs.WinCode.GDHearObjects2.length = 0;
gdjs.WinCode.GDTree3Objects1.length = 0;
gdjs.WinCode.GDTree3Objects2.length = 0;
gdjs.WinCode.GDSecret2Objects1.length = 0;
gdjs.WinCode.GDSecret2Objects2.length = 0;

gdjs.WinCode.eventsList0(runtimeScene);
gdjs.WinCode.GDMenangObjects1.length = 0;
gdjs.WinCode.GDMenangObjects2.length = 0;
gdjs.WinCode.GDPlay2Objects1.length = 0;
gdjs.WinCode.GDPlay2Objects2.length = 0;
gdjs.WinCode.GDPlayObjects1.length = 0;
gdjs.WinCode.GDPlayObjects2.length = 0;
gdjs.WinCode.GDMenuObjects1.length = 0;
gdjs.WinCode.GDMenuObjects2.length = 0;
gdjs.WinCode.GDSlimeObjects1.length = 0;
gdjs.WinCode.GDSlimeObjects2.length = 0;
gdjs.WinCode.GDGroundObjects1.length = 0;
gdjs.WinCode.GDGroundObjects2.length = 0;
gdjs.WinCode.GDGround2Objects1.length = 0;
gdjs.WinCode.GDGround2Objects2.length = 0;
gdjs.WinCode.GDTree2Objects1.length = 0;
gdjs.WinCode.GDTree2Objects2.length = 0;
gdjs.WinCode.GDNewSpriteObjects1.length = 0;
gdjs.WinCode.GDNewSpriteObjects2.length = 0;
gdjs.WinCode.GDNewSprite2Objects1.length = 0;
gdjs.WinCode.GDNewSprite2Objects2.length = 0;
gdjs.WinCode.GDNewSprite3Objects1.length = 0;
gdjs.WinCode.GDNewSprite3Objects2.length = 0;
gdjs.WinCode.GDNewSprite4Objects1.length = 0;
gdjs.WinCode.GDNewSprite4Objects2.length = 0;
gdjs.WinCode.GDNewSprite5Objects1.length = 0;
gdjs.WinCode.GDNewSprite5Objects2.length = 0;
gdjs.WinCode.GDarielObjects1.length = 0;
gdjs.WinCode.GDarielObjects2.length = 0;
gdjs.WinCode.GDStar1Objects1.length = 0;
gdjs.WinCode.GDStar1Objects2.length = 0;
gdjs.WinCode.GDStar2Objects1.length = 0;
gdjs.WinCode.GDStar2Objects2.length = 0;
gdjs.WinCode.GDStar3Objects1.length = 0;
gdjs.WinCode.GDStar3Objects2.length = 0;
gdjs.WinCode.GDStar4Objects1.length = 0;
gdjs.WinCode.GDStar4Objects2.length = 0;
gdjs.WinCode.GDStar5Objects1.length = 0;
gdjs.WinCode.GDStar5Objects2.length = 0;
gdjs.WinCode.GDStar6Objects1.length = 0;
gdjs.WinCode.GDStar6Objects2.length = 0;
gdjs.WinCode.GDHeart2Objects1.length = 0;
gdjs.WinCode.GDHeart2Objects2.length = 0;
gdjs.WinCode.GDQuestionMarkObjects1.length = 0;
gdjs.WinCode.GDQuestionMarkObjects2.length = 0;
gdjs.WinCode.GDHearObjects1.length = 0;
gdjs.WinCode.GDHearObjects2.length = 0;
gdjs.WinCode.GDTree3Objects1.length = 0;
gdjs.WinCode.GDTree3Objects2.length = 0;
gdjs.WinCode.GDSecret2Objects1.length = 0;
gdjs.WinCode.GDSecret2Objects2.length = 0;


return;

}

gdjs['WinCode'] = gdjs.WinCode;
