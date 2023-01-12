export const checkEmptyStringsUpdate = (urlCode, func) => {
  if (!urlCode) {
    let newBox = document.getElementsByClassName("update-newURL-input")[0];
    newBox.style.borderWidth = "6px";
    newBox.style.borderColor = "red";
    func("URL Name required");
    return true;
  }
};

export const resetStylesUpdate = () => {
  let newBoxx = document.getElementsByClassName("update-newURL-input")[0];
  newBoxx.style.borderWidth = "0px";
};
