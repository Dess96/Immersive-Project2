const IconChanger = (id, classN) => {
  const icon = document.getElementById(id);
  if (icon.className.includes('far')) {
    icon.classList.add("fas");
    icon.classList.remove("far");
  } else {
    icon.classList.add('far');
    icon.classList.remove('fas');
  }
};

export default IconChanger;
