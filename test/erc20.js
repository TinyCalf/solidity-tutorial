var ERC20 = artifacts.require("./ERC20.sol")

let creator = {
	    address:"0x627306090abab3a6e1400e9345bc60c78a8bef57",
	    prikey:"c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"
}

let someuser = {
	    address:"0xf17f52151ebef6c7334fad080c5704d77216b732"
}

let contractInstance = ""

contract("MyToken", accounts => {
	it("should deploy contract correctly", function() {
		return ERC20.new("10000","MyToken", "MY", {
			from: creator.address
		})
		.then(instance => {
			assert(instance.transactionHash)
			assert(instance.address)
			console.log(`
ERC20 deployed:
transactionHash: ${instance.transactionHash}
contractaddress: ${instance.address}
			`)
			contractInstance = instance 
		})
	})

	it("should have 10000 token in creator", function() {
		return contractInstance.balanceOf.call(creator.address)	
		.then(balance => {
			console.log("balance of creator is:",balance)
		})
	})

	it("should send a transaction correctly", function() {
		return contractInstance.transfer(someuser.address, 10, {from:creator.address})
		.then(ret => {
			assert(ret.receipt.status == "0x01")
			assert(ret.tx)
			console.log("transactionHash is", ret.tx)
		})
	})




})
