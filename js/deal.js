const dealForm = document.getElementById("dealForm");

const confirmDealButtonClose = document.getElementById("confirmDealButtonClose");
const confirmDealModal = document.getElementById("confirmDealModal");

const dealModalWish = document.getElementById("dealModalWish");
const dealSubmitButton = document.getElementById("dealSubmitButton");
const dealModalDates = document.getElementsByClassName("dealModalDate");
const dealModalMortals = document.getElementsByClassName("dealModalMortal");
const dealModalExecutors = document.getElementsByClassName("dealModalExecutor");

confirmDealButtonClose.addEventListener("click", () => {
  confirmDealModal.classList.add("hidden");
})

function dealFormSubmit(event) {
  const values = Object.fromEntries([...new FormData(event.target).entries()]);
  dealModalWish.textContent = values.deal_wish || '';

  for(let i = 0;i < dealModalMortals.length; i++)
  {
    const dealModalMortal = dealModalMortals[i];
    dealModalMortal.textContent = `${values.first_name} ${values.last_name}`
  }

  for(let i = 0;i < dealModalExecutors.length; i++)
  {
    const dealModalExecutor = dealModalExecutors[i];
    dealModalExecutor.textContent = values.executor || '';
  }

  for(let i = 0;i < dealModalDates.length; i++)
  {
    const dealModalDate = dealModalDates[i];
    dealModalDate.textContent = new Date().toLocaleDateString().padStart(10, '0') || "";
  }

  confirmDealModal.classList.remove("hidden");
  event.preventDefault();
}

dealForm.addEventListener("submit", dealFormSubmit);

dealSubmitButton.addEventListener("click",  () => {
  localStorage.setItem("theme", "dark");
})
