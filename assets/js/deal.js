const dealForm = document.getElementById("dealForm");
const isDealAccepted = localStorage.getItem("isDealAccepted");
const dealPageTitle = document.getElementById("dealPageTitle");

const confirmDealButtonClose = document.getElementById("confirmDealButtonClose");
const confirmDealModal = document.getElementById("confirmDealModal");
const thankYouModal = document.getElementById("thankYouModal");

const dealModalWish = document.getElementById("dealModalWish");
const dealSubmitButton = document.getElementById("dealSubmitButton");
const dealModalDates = document.getElementsByClassName("dealModalDate");
const dealModalMortals = document.getElementsByClassName("dealModalMortal");
const dealModalExecutors = document.getElementsByClassName("dealModalExecutor");

confirmDealButtonClose.addEventListener("click", () => {
  confirmDealModal.classList.add("hidden");
})

const addValuesToTheSubmitForm = () => {
  dealPageTitle.textContent = "Your soul already sold";
  const savedFormValues = JSON.parse(localStorage.getItem("dealFormValues"));
  for (const property in dealForm.elements) {
    const currentFormElement = dealForm.elements[property];
    const savedElements = savedFormValues[property];
    currentFormElement.disabled = true;

    switch (currentFormElement.type) {
      case "checkbox": {
        currentFormElement.checked = true;
        break;
      }
      case "submit": {
        currentFormElement.style.display = "none";
        break;
      }
      default: {
        currentFormElement.value = savedElements;
      }
    }
  }
}

function dealFormSubmit(event) {
  event.preventDefault();
  if (isDealAccepted) return;
  const values = Object.fromEntries([...new FormData(event.target).entries()]);
  localStorage.setItem("dealFormValues", JSON.stringify(values));

  dealModalWish.textContent = values.deal_wish || '';

  for (let i = 0; i < dealModalMortals.length; i++) {
    const dealModalMortal = dealModalMortals[i];
    dealModalMortal.textContent = `${values.first_name} ${values.last_name}`
  }

  for (let i = 0; i < dealModalExecutors.length; i++) {
    const dealModalExecutor = dealModalExecutors[i];
    dealModalExecutor.textContent = values.executor || '';
  }

  for (let i = 0; i < dealModalDates.length; i++) {
    const dealModalDate = dealModalDates[i];
    dealModalDate.textContent = new Date().toLocaleString() || "";
  }

  confirmDealModal.classList.remove("hidden");
}

if (isDealAccepted) addValuesToTheSubmitForm();
dealForm.addEventListener("submit", dealFormSubmit);

dealSubmitButton.addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  localStorage.setItem("isDealAccepted", "true");
  document.querySelector("html").setAttribute("data-theme", "dark");
  confirmDealModal.classList.add("hidden");
  thankYouModal.classList.remove("hidden");
})
