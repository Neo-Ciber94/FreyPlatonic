
if (typeof gdjs.evtsExt__Items__ItemToInventory !== "undefined") {
  gdjs.evtsExt__Items__ItemToInventory.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Items__ItemToInventory = {};
gdjs.evtsExt__Items__ItemToInventory.GDItemObjects1= [];
gdjs.evtsExt__Items__ItemToInventory.GDItemObjects2= [];
gdjs.evtsExt__Items__ItemToInventory.GDItemObjects3= [];
gdjs.evtsExt__Items__ItemToInventory.GDItemObjects4= [];
gdjs.evtsExt__Items__ItemToInventory.GDItemCountObjects1= [];
gdjs.evtsExt__Items__ItemToInventory.GDItemCountObjects2= [];
gdjs.evtsExt__Items__ItemToInventory.GDItemCountObjects3= [];
gdjs.evtsExt__Items__ItemToInventory.GDItemCountObjects4= [];

gdjs.evtsExt__Items__ItemToInventory.conditionTrue_0 = {val:false};
gdjs.evtsExt__Items__ItemToInventory.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Items__ItemToInventory.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Items__ItemToInventory.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__Items__ItemToInventory.mapOfGDgdjs_46evtsExt_95_95Items_95_95ItemToInventory_46GDItemObjects3Objects = Hashtable.newFrom({"Item": gdjs.evtsExt__Items__ItemToInventory.GDItemObjects3});
gdjs.evtsExt__Items__ItemToInventory.mapOfGDgdjs_46evtsExt_95_95Items_95_95ItemToInventory_46GDItemCountObjects3Objects = Hashtable.newFrom({"ItemCount": gdjs.evtsExt__Items__ItemToInventory.GDItemCountObjects3});
gdjs.evtsExt__Items__ItemToInventory.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Items__ItemToInventory.GDItemObjects3.length = 0;

gdjs.evtsExt__Items__ItemToInventory.GDItemCountObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Items__ItemToInventory.mapOfGDgdjs_46evtsExt_95_95Items_95_95ItemToInventory_46GDItemObjects3Objects, 5 + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerInventory").getChild("Index")) * 17), 22, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Items__ItemToInventory.mapOfGDgdjs_46evtsExt_95_95Items_95_95ItemToInventory_46GDItemCountObjects3Objects, 11 + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerInventory").getChild("Index")) * 17), 42, "UI");
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__Items__ItemToInventory.GDItemObjects3.length !== 0 ? gdjs.evtsExt__Items__ItemToInventory.GDItemObjects3[0] : null), (gdjs.evtsExt__Items__ItemToInventory.GDItemCountObjects3.length !== 0 ? gdjs.evtsExt__Items__ItemToInventory.GDItemCountObjects3[0] : null));
}{runtimeScene.getVariables().get("PlayerInventory").getChild("Items").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerInventory").getChild("Index"))).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ItemName") : ""));
}{gdjs.evtTools.inventory.equip(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("InventoryName") : ""), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ItemName") : ""), false);
}{gdjs.evtTools.inventory.add(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("InventoryName") : ""), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ItemName") : ""));
}{for(var i = 0, len = gdjs.evtsExt__Items__ItemToInventory.GDItemObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Items__ItemToInventory.GDItemObjects3[i].setZOrder(3);
}
}}

}


};gdjs.evtsExt__Items__ItemToInventory.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const keyIteratorReference2 = runtimeScene.getVariables().get("PlayerInventory").getChild("Index");
const valueIteratorReference2 = runtimeScene.getVariables().get("PlayerInventory").getChild("Item");
const iterableReference2 = runtimeScene.getVariables().get("PlayerInventory").getChild("Items");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

gdjs.evtsExt__Items__ItemToInventory.condition0IsTrue_0.val = false;
gdjs.evtsExt__Items__ItemToInventory.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__Items__ItemToInventory.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("PlayerInventory").getChild("Items").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerInventory").getChild("Index")))) == "0";
}if ( gdjs.evtsExt__Items__ItemToInventory.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__Items__ItemToInventory.condition1IsTrue_0.val = !(gdjs.evtTools.inventory.has(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("InventoryName") : ""), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ItemName") : "")));
}}
if (gdjs.evtsExt__Items__ItemToInventory.condition1IsTrue_0.val)
{

{ //Subevents: 
gdjs.evtsExt__Items__ItemToInventory.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


};gdjs.evtsExt__Items__ItemToInventory.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Items__ItemToInventory.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Items__ItemToInventory.condition0IsTrue_0.val = gdjs.evtTools.inventory.has(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("InventoryName") : ""), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ItemName") : ""));
}if (gdjs.evtsExt__Items__ItemToInventory.condition0IsTrue_0.val) {
{gdjs.evtTools.inventory.equip(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("InventoryName") : ""), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ItemName") : ""), false);
}{gdjs.evtTools.inventory.add(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("InventoryName") : ""), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ItemName") : ""));
}}

}


{


gdjs.evtsExt__Items__ItemToInventory.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Items__ItemToInventory.condition0IsTrue_0.val = !(gdjs.evtTools.inventory.has(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("InventoryName") : ""), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ItemName") : "")));
}if (gdjs.evtsExt__Items__ItemToInventory.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Items__ItemToInventory.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Items__ItemToInventory.func = function(runtimeScene, Item, ItemName, ItemCount, ItemIndex, InventoryName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Item": Item
, "ItemCount": ItemCount
},
  _objectArraysMap: {
"Item": gdjs.objectsListsToArray(Item)
, "ItemCount": gdjs.objectsListsToArray(ItemCount)
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
if (argName === "ItemIndex") return ItemIndex;
if (argName === "InventoryName") return InventoryName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Items__ItemToInventory.GDItemObjects1.length = 0;
gdjs.evtsExt__Items__ItemToInventory.GDItemObjects2.length = 0;
gdjs.evtsExt__Items__ItemToInventory.GDItemObjects3.length = 0;
gdjs.evtsExt__Items__ItemToInventory.GDItemObjects4.length = 0;
gdjs.evtsExt__Items__ItemToInventory.GDItemCountObjects1.length = 0;
gdjs.evtsExt__Items__ItemToInventory.GDItemCountObjects2.length = 0;
gdjs.evtsExt__Items__ItemToInventory.GDItemCountObjects3.length = 0;
gdjs.evtsExt__Items__ItemToInventory.GDItemCountObjects4.length = 0;

gdjs.evtsExt__Items__ItemToInventory.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Items__ItemToInventory.registeredGdjsCallbacks = [];