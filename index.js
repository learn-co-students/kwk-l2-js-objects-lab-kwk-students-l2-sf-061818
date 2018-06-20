// Write your solution in this file!
driver = {}
function updateDriverWithKeyAndValue(driver, key, value){
   return Object.assign({}, driver, {[key]: value});
}
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  driver[key] = value
  return driver
}
function deleteFromDriverByKey(driver, key){
  const you = Object.assign({}, driver)
  delete you[key]
  return you
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}

