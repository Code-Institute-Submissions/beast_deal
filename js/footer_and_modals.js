const rulesButtonOpen = document.getElementById("rulesButtonOpen");
const rulesButtonClose = document.getElementById("rulesButtonClose");
const rulesModal = document.getElementById("rulesModal");

rulesButtonOpen.addEventListener("click", () => {
  rulesModal.classList.remove("hidden");
})

rulesButtonClose.addEventListener("click", () => {
  rulesModal.classList.add("hidden");
})

const returnPolicyButtonOpen = document.getElementById("returnPolicyButtonOpen");
const returnPolicyButtonClose = document.getElementById("returnPolicyButtonClose");
const returnPolicyModal = document.getElementById("returnPolicyModal");

returnPolicyButtonOpen.addEventListener("click", () => {
  returnPolicyModal.classList.remove("hidden");
})

returnPolicyButtonClose.addEventListener("click", () => {
  returnPolicyModal.classList.add("hidden");
})
