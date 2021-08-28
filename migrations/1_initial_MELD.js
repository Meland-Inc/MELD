/// 为了支持开发过程中的一些细节fix.
/// 特别支持 upgrade.
/// 如果 upgrade 对市场信息等有影响.
/// 后期可以进行删除.
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const MELD = artifacts.require("MELD");


module.exports = async function (deployer) {
  const instance = await deployProxy(MELD, [], { deployer });

  console.log("deployed", instance.address);
};