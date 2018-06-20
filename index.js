driver = {}
function updateDriverWithKeyAndValue (driver, key, value) {
  return Object.assign({},driver,{[key]:value});
}
function destructivelyUpdateDriverWithKeyAndValue (driver2, key, value) {
  return Object.assign(driver,driver2,{[key]:value});
}
function deleteFromDriverByKey (driver2, key, value) {
  return Object.assign({},driver,{[key]:value});
}
function destructivelyDeleteFromDriverByKey (driver2, key, value) {
  driver = {}
  return Object.assign({},driver,{[key]:value});
}