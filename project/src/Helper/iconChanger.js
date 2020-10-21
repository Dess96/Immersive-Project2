const IconChanger = (id) => {
    const icon = document.getElementById(id);
    icon.classList.add('fas');
    icon.classList.remove('far');
}

export default IconChanger;