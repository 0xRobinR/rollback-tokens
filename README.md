# rollback tokens

a rollback token gives an address or a contract a time period to roll back an erc20 transaction, if the transaction is not rolled back within the time period, the transaction is considered valid and cannot be rolled back.

one of the main advantages of using the rollback token standard in cold wallets or long-term asset holding wallets is the added layer of security it provides without compromising accessibility. cold wallets are typically used to store large amounts of cryptocurrency securely over long periods, with minimal interaction with the blockchain.

ethereum magicians discussion link - [here](https://ethereum-magicians.org/t/rollback-tokens-a-patch-to-unauthorized-erc20-transfers/20896/3)

---

hardhat defaults

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/rbt-deploy.ts
```
