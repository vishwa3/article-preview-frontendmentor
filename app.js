"use strict";

const shareButton = document.querySelector(".share-icon");
const hiddenShareButton = document.querySelector(".hidden-share-icon");
const shareModal = document.querySelector(".share-modal");

const toggleShareModal = () => {
  shareModal.classList.toggle("hide");
};

shareButton.addEventListener("click", (e) => {
  toggleShareModal();
});

hiddenShareButton.addEventListener("click", (e) => {
  toggleShareModal();
});

const hideShareModal = () => {
  shareModal.classList.add("hide");
};

document.addEventListener("click", (e) => {
  const modalSection = shareModal.contains(e.target);
  const shareButtonSection = shareButton.contains(e.target);
  if (!modalSection && !shareButtonSection) hideShareModal();
});
