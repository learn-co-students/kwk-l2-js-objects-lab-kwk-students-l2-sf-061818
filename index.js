// Write your solution in this file!
const driver = {
  name: 'Sam',
  address: '1s'
};
function updateDriverWithKeyAndValue(driver, key, value) {
  const taylor = driver
  return driver, Object.assign({[key]: value}, taylor)
  
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const taylor = Object.assign({}, driver);
  delete taylor[key];
  return taylor
}
function destructivelyDeleteFromDriverByKey(driver, key) {
  const taylor = driver
  delete taylor[key];
  return taylor, driver
}