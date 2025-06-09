import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("FillChecker", (m) => {
  const fillChecker = m.contract("FillChecker", []);

  return { fillChecker };
});
