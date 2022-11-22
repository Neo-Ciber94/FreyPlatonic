
if (typeof gdjs.evtsExt__Items__CanUseItem !== "undefined") {
  gdjs.evtsExt__Items__CanUseItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Items__CanUseItem = {};

gdjs.evtsExt__Items__CanUseItem.conditionTrue_0 = {val:false};
gdjs.evtsExt__Items__CanUseItem.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Items__CanUseItem.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Items__CanUseItem.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Items__CanUseItem.condition3IsTrue_0 = {val:false};


gdjs.evtsExt__Items__CanUseItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Items__CanUseItem.condition0IsTrue_0.val = false;
gdjs.evtsExt__Items__CanUseItem.condition1IsTrue_0.val = false;
gdjs.evtsExt__Items__CanUseItem.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__Items__CanUseItem.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("PlayerInventory").getChild("Items").getChild((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ItemIndex")) || 0 : 0))) == (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ItemName") : "");
}if ( gdjs.evtsExt__Items__CanUseItem.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__Items__CanUseItem.condition1IsTrue_0.val = gdjs.evtTools.inventory.isEquipped(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("InventoryName") : ""), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ItemName") : ""));
}if ( gdjs.evtsExt__Items__CanUseItem.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__Items__CanUseItem.condition2IsTrue_0.val = gdjs.evtTools.inventory.count(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("InventoryName") : ""), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ItemName") : "")) > 0;
}}
}
if (gdjs.evtsExt__Items__CanUseItem.condition2IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Items__CanUseItem.func = function(runtimeScene, ItemName, InventoryName, ItemIndex, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ItemName") return ItemName;
if (argName === "InventoryName") return InventoryName;
if (argName === "ItemIndex") return ItemIndex;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Items__CanUseItem.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Items__CanUseItem.registeredGdjsCallbacks = [];