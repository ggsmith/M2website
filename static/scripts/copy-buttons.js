const setButtonIcon = (button, icon, className = "size-4") => {
  const iconName = icon.charAt(0).toUpperCase() + icon.slice(1);
  const iconNode = lucide.icons[iconName];
  const oldIcon = button.querySelector("svg, i");

  if (!oldIcon || !iconNode) return;

  const newIcon = lucide.createElement(iconNode, {
    class: className,
  });

  oldIcon.replaceWith(newIcon);
};

document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll(".copy-code-button");

  copyButtons.forEach((button) => {
    let isCopying = false;
    button.addEventListener("click", async () => {
      if (isCopying) return;
      isCopying = true;
      const code = button.dataset.copyCode;
      await navigator.clipboard.writeText(code);
      setButtonIcon(button, "check", "size-4 text-success");
      setTimeout(() => {
        setButtonIcon(button, "clipboard");
        isCopying = false;
      }, 2000);
    });
  });
});
